import React from "react";
import { Avatar } from "@mui/material";
import img4 from "../_assets/image5.jpg"
import img1 from "../_assets/image7.jpg"
import img2 from "../_assets/image4.jpg"
import img3 from "../_assets/image6.png"
import img5 from "../_assets/image2.jpg"
import "../styles/ProfileFollowers.css"

export default function FollowersInMyProfile(){

    const fetchedProfile = [
        {
            h1 : "Ivanka James",
            h2 : "@ivankajames",
            img : img3
        },
        {
            h1 : "Big Bundah Girl",
            h2 : "@bigBgirl",
            img : img1 
        },
        {
            h1 : "GlizzyGobbler",
            h2 : "@GZperiod",
            img : img2
        },
        {
            h1 : "Tiny Weenie",
            h2 : "@teeniweeni",
            img : img4    
        },
        {
            h1 : "Bob Loader",
            h2 : "@BLnigger",
            img : img3
        },
        {
            h1 : "Dee Snuts",
            h2 : "@DjNutter",
            img : img5
        }
    ]
    return(
        <div className="follower-main-div">
                {fetchedProfile.map((value, index) => (
                    <div>
                    <Avatar alt="Profile Pic" src={value.img.src} style={{position : "relative" , width : "10vh" , height : "10vh" , marginTop : "1vh" , marginLeft : "16vh" , border: "2px solid black"}}/>
                <div className="follower-profile">
                    <h1>{value.h1}</h1>
                    <h2>{value.h2}</h2>
                </div>
                <button>Remove</button>
                </div>))
                }
        </div>
    )
}