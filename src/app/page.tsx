"use client";

import { trpc } from './_trpc/client';
import {z} from "zod";
import {useQueryClient} from "@tanstack/react-query";
import {useState} from "react";

export default function Home() {
    // const mutation = trpc.newPost.useMutation();
    // const check = () => {
    //     mutation.mutate({
    //         userId: 1 ,
    //         restaurantName: "KK",
    //         cityName: "Kanpur",
    //         dishName: "Matar Panner",
    //         caption: "Caption This",
    //         image: "This will be the imamge",
    //         location: "location",
    //     })
    //     // const responseData = mutation.data;
    //     // console.log("Mutation Data: ",responseData);
    // }
    const [inputValue, setInputValue] = useState('');
    const { data: users, isLoading, isFetching } = trpc.authSignInCheck.useQuery({ username: "shashwat123student@gmail.com" });

    const queryClient = useQueryClient();

    function handleClick() {
        console.log(users);
    }

    if (isLoading || isFetching) {
        return <p>Loading...</p>;
    }
    return(
        <div>
            <h1>Button for checking</h1>
            <button onClick={handleClick}>
                Check for Mutation
            </button>
        </div>
    )
}