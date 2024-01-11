"use client"

import Explore from "../explore/page";
import MyProfile from "../profile/page";
import React, { useEffect } from "react";
import "./page.css";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
// import img4 from "../../_assets/image6.png"
import img4 from "../../_assets/image6.png"
import imgP from "../../_assets/post1.webp"
import img6 from "../../_assets/image4.jpg"
import p2 from "../../_assets/post2.webp"
import p3 from "../../_assets/post3.webp"
import ExploreIcon from '@mui/icons-material/Explore';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PersonIcon from '@mui/icons-material/Person';
import { useAppSelector , useAppDispatch } from "@/app/globalRedux/hooks";
import LogoutIcon from '@mui/icons-material/Logout';
import { trpc } from "@/app/_trpc/client";
import { currentUser } from "@/app/globalRedux/features/users/loginUser";

export default function SignUp() {
    const imgp4 = img4.src
    const imgp7 = img6.src
    const imgpP = imgP.src
    const p2r = p2.src
    const p3r = p3.src
    const [active , setActive] = useState("EXPLORE")

    // STATES
    const dispatch = useAppDispatch()
    
    const user = trpc.getUserById.useQuery({id : 1})
    
    useEffect(() => {
        if(user.data)
        {
            dispatch(currentUser(user.data))
        }
    })

    const email = useAppSelector((state) => state.currentUser.user.email)
    const id = useAppSelector((state) => state.currentUser.user.id)
    const username = useAppSelector((state) => state.currentUser.user.username)

    return (
    <div className="mainDiv">
      <section className="sec1">
            <h1>CRAVEFEED</h1>
            <Avatar alt="Remy Sharp" src={imgp4} style={{position : "relative" , width : "13vh" , height : "13vh" , marginTop : "9vh" , marginLeft : "16vh" , border: "2px solid black"}}/>
            <div className="username">
                <h1>Ivanka James</h1>
                <h2>{username}</h2>
            </div>
            <div className="follow">
                <div className="post">
                    <h1>50</h1>
                    <h3>Post</h3>
                </div>
                <div className="followers">
                    <h1>2.2K</h1>
                    <h3>Followers</h3>
                </div>
                <div className="following">
                    <h1>600</h1>
                    <h3>Following</h3>
                </div>
            </div>
            <div className="InPages">
                <div className="explore" onClick={() => setActive("EXPLORE")}>
                    <button>
                        <ExploreIcon/>
                        <h1>Explore</h1>
                    </button>
                </div>
                <div className="forYou">
                    <button>
                        <SupervisedUserCircleIcon/>
                        <h1>For You</h1>
                    </button>
                </div>
                    <div className="profile" onClick={ () => setActive("PROFILE")}>
                        <button>
                            <PersonIcon/>
                            <h1>Profile</h1>
                        </button>
                    </div>
            </div>
            <div className="logout">
                <div>
                    <LogoutIcon style={{marginTop: "2.5vh" , marginLeft : "2vh"}}/>
                    <h1>Logout</h1>
                </div>
            </div>
      </section>
      {active === "EXPLORE" && <Explore/>}
      {active === "PROFILE" && <MyProfile/>}
    </div>
  );
}