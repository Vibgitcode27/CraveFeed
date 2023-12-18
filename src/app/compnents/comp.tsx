"use client"
import { trpc } from "../_utils/client"
import { useState } from "react"
import { z } from "zod"

export function TestFunctionality()
{
    let pushUser = trpc.user.signUp.useMutation();

    const [email , setEmail] = useState()
    const [username , setUsername] = useState()
    const [password , setPassword] = useState()
    const [bio , setBio ] = useState()


    return (
        <div>
            <h1>Email</h1>
            <input type="text" onChange={(event) =>
            {
                //@ts-ignore
                setEmail(event.target.value)
            }} />
            <h1>Username</h1>
            <input type="text" onChange={(event) =>
            {
                //@ts-ignore
                setUsername(event.target.value)
            }} />
            <h1>Password</h1>
            <input type="text" onChange={(event) =>   
            {
                //@ts-ignore
                setPassword(event.target.value)
            }} />
            <h1>Bio</h1>
            <input type="text" onChange={(event) =>
            {
                //@ts-ignore
                setBio(event.target.value)
            }} />

            <button onClick={() =>
            {
                pushUser.mutate({
                    email,
                    username,
                    password,
                    bio
                })
                console.log("Works")
            }}>Submit</button>
        </div>
    )
}