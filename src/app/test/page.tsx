"use client"

// Import the necessary modules
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Define the test component
export default function Test() {
    // Access the router
    const router = useRouter();

    // Define the handleSignOut function
    async function handleSignOut() {
        // Perform the sign-out operation
        await signOut();

        // Redirect to a new page after successful sign-out
        router.push("/");
    }

    // Render the component
    return (
        <div>
            <button
                onClick={handleSignOut}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
            >
                Logout
            </button>
        </div>
    );
}
