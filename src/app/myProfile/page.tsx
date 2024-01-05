"use client"

import React from "react";
import { useState } from "react";
import "./page.css";
import Avatar from '@mui/material/Avatar';
import img4 from "../_assets/image6.png"
import imgP from "../_assets/post1.webp"
import img6 from "../_assets/image4.jpg"
import p2 from "../_assets/post2.webp"
import p3 from "../_assets/post3.webp"
import ExploreIcon from '@mui/icons-material/Explore';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import PostInMyProfile from "../compnents/PofilePosts";
import FollowersInMyProfile from "../compnents/ProfileFollowers";
import FollowingInMyProfile from "../compnents/ProfileFollowing";

export default function myProfile(){
    const imgp4 = img4.src
    const imgp7 = img6.src
    const imgpP = imgP.src
    const p2r = p2.src
    const p3r = p3.src
    const [active , setActive] = useState("POSTS")
    return (
    <div className="mainDiv">
      <section className="sec1">
            <h1>CRAVEFEED</h1>
            <Avatar alt="Remy Sharp" src={imgp4} style={{position : "relative" , width : "13vh" , height : "13vh" , marginTop : "9vh" , marginLeft : "16vh" , border: "2px solid black"}}/>
            <div className="username">
                <h1>Ivanka James</h1>
                <h2>@ivankajames</h2>
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
                <div className="explore">
                    <ExploreIcon/>
                    <h1>Explore</h1>
                </div>
                <div className="forYou">
                    <SupervisedUserCircleIcon/>
                    <h1>For You</h1>
                </div>
                <div className="profile">
                    <PersonIcon/>
                    <h1>Profile</h1>
                </div>
            </div>
            <div className="logout">
                <div>
                    <LogoutIcon style={{marginTop: "2.5vh" , marginLeft : "2vh"}}/>
                    <h1>Logout</h1>
                </div>
            </div>
      </section>
      <section className="sec2">
            <div className="secondary-div1">
                <Avatar alt="Profile Pic" src={imgp4} style={{position : "relative" , width : "20vh" , height : "20vh" , marginTop : "5vh" , marginLeft : "16vh" , border: "2px solid black"}}/>
                <div className="profileInfo">
                    <h1>Ivanka James</h1>
                    <h2>@ivankajames</h2>
                    <div className="profile-follow">
                        <div className="profile-post">
                            <h1>50</h1>
                            <h3>Post</h3>
                        </div>
                        <div className="profile-followers">
                            <h1>2.2K</h1>
                            <h3>Followers</h3>
                        </div>
                        <div className="profile-following">
                            <h1>600</h1>
                            <h3>Following</h3>
                        </div>
                    </div>
                    <p>Ivanka James: Culinary maven weaving flavors into unforgettable symphonies, turning every meal into a celebration of taste and culture.</p>
                </div>
            </div>
            <div className="secondary-div2">
                <div className="nav-buttons">
                    <button className="button" onClick={() => {setActive("POSTS");}}>
                        POSTS
                    </button>
                    <button className="button" onClick={() => {setActive("FOLLOWING")}}>
                        FOLLOWING                    
                    </button>
                    <button className="button" onClick={() => {setActive("FOLLOWERS")}}>
                        FOLLOWERS
                    </button>
                </div>
                <div className="button_result">
                    {active === "POSTS" && <PostInMyProfile/>}
                    {active === "FOLLOWERS" && <FollowersInMyProfile/>}
                    {active === "FOLLOWING" && <FollowingInMyProfile/>}
                </div>
            </div>
      </section>
    </div>
  )
}