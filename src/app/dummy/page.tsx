"use client"

import {signIn, useSession} from "next-auth/react";
import {trpc} from "@/app/_trpc/client";
import {router} from "@/trpc/trpc";
import {Button} from "@mui/base";
import {useEffect, useState} from "react";

export default function dummy(){
    const [data, setData] = useState();
    const { data: session } = useSession();

    const mutation = trpc.authSignInCheck.useQuery({
        username: session?.user?.email,
    });

    const locat = () => {
        if(data === true){
            window.location.href="/post"
        } else {
            window.location.href="/signUp";
        }
    }
    const work = () => {
        if (session) {
            try {
                const response = mutation.data;
                setData(response.message);
                console.log(data);
            } catch (error) {
                console.error("Error during work:", error);
            }
        } else {
            console.log("No Session is there");
        }
        // locat();
    };

    return(
        <div>
            <h1>To Check</h1>
            <button
                onClick={work}
                className="flex items-center justify-center gap-2 rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white ring-red-300 transition duration-100 hover:bg-red-600 md:text-base"
            >
                Check
            </button>
        </div>
    )
}