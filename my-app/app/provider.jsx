"use client";
import { supabase } from '@/lib/SupabaseClient';
import React, { useEffect, useState, useContext, createContext } from 'react';

const UserDetailContext = createContext();

function Provider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        // Check for existing session on mount
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                CreateNewUser();
            }
        });
        // Listen for auth state changes
        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN" && session) {
                CreateNewUser();
            }
        });
        // Cleanup
        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    const CreateNewUser = async () => {
        console.log("CreateNewUser called");
        try {
            const { data: { user }, error: authError } = await supabase.auth.getUser();
            console.log("Supabase auth.getUser() result:", user);
            if (authError || !user) throw authError || new Error("No user found");

            // Log all user_metadata fields for debugging
            console.log("user_metadata (all fields):", user?.user_metadata);

            // Try to get a name from any available field
            let fallbackName =
                user?.user_metadata?.name ||
                user?.user_metadata?.full_name ||
                user?.user_metadata?.user_name ||
                user?.user_metadata?.given_name ||
                user?.user_metadata?.email ||
                user?.email ||
                "User";

            const { data: users, error: fetchError } = await supabase
                .from('users')
                .select("*")
                .eq('email', user?.email);
            console.log("Fetched users from DB:", users);

            if (fetchError) throw fetchError;

            if (users?.length === 0) {
                console.log("No user found, inserting new user with name:", fallbackName);
                const { data: insertData, error: insertError } = await supabase
                    .from("users")
                    .insert([
                        {
                            name: fallbackName,
                            email: user?.email,
                            picture: user?.user_metadata?.picture
                        }
                    ])
                    .select();

                console.log("Insert result:", insertData, insertError);
                // If duplicate key error, run update logic
                if (insertError && insertError.code === "23505") {
                    console.log("Duplicate email, running update instead.");
                    const { data: updatedData, error: updateError } = await supabase
                        .from("users")
                        .update({
                            name: fallbackName,
                            picture: user?.user_metadata?.picture
                        })
                        .eq('email', user?.email)
                        .select();
                    console.log("Update result (after duplicate):", updatedData, updateError);
                    if (updateError) throw updateError;
                    // If update returns no data, fetch the user again
                    if (!updatedData || !updatedData[0]) {
                        const { data: refetched, error: refetchError } = await supabase
                            .from("users")
                            .select("*")
                            .eq('email', user?.email)
                            .single();
                        if (refetchError) throw refetchError;
                        setUser(refetched);
                    } else {
                        setUser(updatedData[0]);
                    }
                    return;
                }
                if (insertError) throw insertError;
                setUser(insertData[0]);
                return;
            } else if (users?.length > 0) {
                console.log("User found, updating user with name:", fallbackName);
                const { data: updatedData, error: updateError } = await supabase
                    .from("users")
                    .update({
                        name: fallbackName,
                        picture: user?.user_metadata?.picture
                    })
                    .eq('email', user?.email)
                    .select();
                console.log("Update result:", updatedData, updateError);
                if (updateError) throw updateError;
                if (!updatedData || !updatedData[0]) {
                    const { data: refetched, error: refetchError } = await supabase
                        .from("users")
                        .select("*")
                        .eq('email', user?.email)
                        .single();
                    if (refetchError) throw refetchError;
                    setUser(refetched);
                } else {
                    setUser(updatedData[0]);
                }
                return;
            } else {
                console.log("Unexpected branch: users:", users);
            }
        } catch (error) {
            console.error("Error creating new user:", error);
        }
    };

    return (
        <UserDetailContext.Provider value={{ user, setUser }}>
            <div>{children}</div>
        </UserDetailContext.Provider>
    );
}

export default Provider;

export const useUser = () => {
    const context = useContext(UserDetailContext);
    if (!context) {
        throw new Error("useUser must be used within a Provider");
    }
    return context;
};