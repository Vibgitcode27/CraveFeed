"use client";

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { trpc } from "@/app/_trpc/client";
import path from "path";
import Link from "next/link";

export default function Home() {
    const router = useRouter();
    const { data: session } = useSession();

    async function handleSignIn() {
        await signIn();
        // if (session) {
        //     const mutation = trpc.signInCheck.useQuery({
        //         username: session.user.email!,
        //     });
        //     const response = mutation.data;
        //     if (response && response.message) {
        //         router.push("/post");
        //     } else {
        //         router.push("/test");
        //     }
        // } else {
        //     router.push("/signIn");
        // }
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
