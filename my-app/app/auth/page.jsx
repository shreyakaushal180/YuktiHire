'use client'

import { supabase } from '@/lib/SupabaseClient'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import React from 'react'

function Login() {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
    if (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4">
      <div className="flex flex-col items-center bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="YuktiHire Logo"
          width={400}
          height={100}
          className="w-44 mb-6"
        />

        {/* Illustration */}
        <Image
          src="/login.png"
          alt="Login Illustration"
          width={600}
          height={400}
          className="w-80 h-52 rounded-xl object-cover mb-6"
        />

        {/* Text Content */}
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-2">
          Welcome to YuktiHire
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Sign in with Google to get started
        </p>

        {/* Google Login Button */}
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
          onClick={signInWithGoogle}
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
