"use client";
import React from 'react';
import { useUser } from '../../../../components/hooks/useUser';
import Image from 'next/image';

function WelcomeContainer() {
    const { user } = useUser();
    console.log('User object in WelcomeContainer:', user);
    return (
        <div>
            <div className="bg-white p-5 rounded-xl">
                <h2 className="text-lg font-bold">
                    Welcome Back, {user?.name}
                </h2>
                <h2 className="text-gray-500">
                    AI-Driven Interviews, Hassle-Free Hiring
                </h2>
            </div>
           {user?.picture && <Image src={user.picture} alt='userImage' width={50} height={50} />}
        </div>
    );
}

export default WelcomeContainer;