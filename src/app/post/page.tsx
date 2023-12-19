import React from "react";
import "./page.css";
import Avatar from '@mui/material/Avatar';
import img4 from "../_assets/image6.png"
import ExploreIcon from '@mui/icons-material/Explore';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';

export default function SignUp() {
    const imgp4 = img4.src
    return (
    <div className="mainDiv">
      <section className="sec1">
            <h1>CREAVEFEED</h1>
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
            <div className="search">
                <div className="searchBox">
                    <SearchIcon style={{fontSize : "4.5vh" , marginRight : "2vh"}}/>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="addBtn">
                    <button>Add photo</button>
                </div>
            </div>
            <div className="posts">
                <div className="PandS">

                </div>
                <div className="followings">

                </div>
            </div>
      </section>
    </div>
  );
}