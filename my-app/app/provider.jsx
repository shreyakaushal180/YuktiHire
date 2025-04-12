import { supabase } from '@/lib/SupabaseClient';
import React, { useEffect, useState, useContext, createContext } from 'react';

const UserDetailContext = createContext();

function Provider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        CreateNewUser();
    }, []);

    const CreateNewUser = async () => {
        try {
            const { data: { user }, error: authError } = await supabase.auth.getUser();
            if (authError) throw authError;

            const { data: users, error: fetchError } = await supabase
                .from('users')
                .select("*")
                .eq('email', user?.email);

            if (fetchError) throw fetchError;

            if (users?.length === 0) {
                const { data: insertData, error: insertError } = await supabase
                    .from("users")
                    .insert([
                        {
                            name: user?.user_metadata?.name,
                            email: user?.email,
                            picture: user?.user_metadata?.picture
                        }
                    ]);

                if (insertError) throw insertError;

                console.log(insertData);
                setUser(insertData);
                return;
            }
            setUser(users[0]);
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