"use client";
import React from 'react';
import { useUser } from '../../../../components/hooks/useUser';
import Image from 'next/image';

function WelcomeContainer() {
    const { user } = useUser();
    console.log('User object in WelcomeContainer:', user);

    return (
        <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-3xl shadow-lg w-full max-w-3xl mx-auto flex items-center justify-between gap-4 transition-all duration-300">
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800">
                    Welcome Back, <span className="text-indigo-600">{user?.name}</span>
                </h2>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    AI-Driven Interviews, Hassle-Free Hiring
                </p>
            </div>
            {user?.picture && (
                <div className="shrink-0">
                    <Image
                        src={user.picture}
                        alt="User profile picture"
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-indigo-200 shadow-sm object-cover"
                    />
                </div>
            )}
        </div>
    );
}

export default WelcomeContainer;
