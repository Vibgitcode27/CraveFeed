"use client";

import { signIn, useSession } from 'next-auth/react';

export default function Home() {
    const { data: session } = useSession();

    async function handleSignIn() {
        const result = await signIn('github', { callbackUrl: '/test' });
        if (result?.error) {
            console.error('Sign-in failed:', result.error);
        } else {
            console.log('Sign-in successful!');
            console.log('Session details:', session);

        }
    }
    return (
        <div>
            <button
                onClick={handleSignIn}
                className="flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white ring-teal-300 transition duration-100 hover:bg-teal-600 md:text-base"
            >
                Login
            </button>

            {session && (
                <div>
                    <p>Welcome, {session.user.name}!</p>
                    <p>{session.user.email}</p>
                    <img src={session.user.image} alt={"Github Image"}></img>
                </div>
            )}
        </div>
    );
}
