import React from "react";
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
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';

export default function SignUp() {
    const imgp4 = img4.src
    const imgp7 = img6.src
    const imgpP = imgP.src
    const p2r = p2.src
    const p3r = p3.src
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
            <div className="search">
                <div className="searchBox">
                    <SearchIcon style={{fontSize : "4.5vh" , marginRight : "2vh" , color: "rgb(213, 213, 213)"}}/>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="addBtn">
                    <button> 
                    <AddBoxIcon/>
                    Add post
                    </button>
                </div>
            </div>
            <div className="posts">
                <div className="PandS">
                    <h1>Your Cravings</h1>
                    <div className="content">

                        {/* This is post content div */}

                        <div className="content-post">
                            <div style={{display : "flex"}}>
                                <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "7vh" , height : "7vh" , marginTop : "1vh" , marginBottom : "1vh" , marginLeft : "2vh"}}/>
                                <h2>Big bundah Girl</h2>
                            </div>
                                <img src={imgpP} alt="" />
                            <div className="reactions">
                                <FavoriteBorderIcon/>
                                <ChatBubbleIcon style={{marginLeft : "3vh"}}/>
                                <SendIcon style={{marginLeft : "3vh"}}/>
                            </div>
                        </div>

                        <div className="content-post">
                            <div style={{display : "flex"}}>
                                <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "7vh" , height : "7vh" , marginTop : "1vh" , marginBottom : "1vh" , marginLeft : "2vh"}}/>
                                <h2>Big bundah Girl</h2>
                            </div>
                                <img src={p2r} alt="" />
                            <div className="reactions">
                                <FavoriteBorderIcon/>
                                <ChatBubbleIcon style={{marginLeft : "3vh"}}/>
                                <SendIcon style={{marginLeft : "3vh"}}/>
                            </div>
                        </div>

                        <div className="content-post">
                            <div style={{display : "flex"}}>
                                <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "7vh" , height : "7vh" , marginTop : "1vh" , marginBottom : "1vh" , marginLeft : "2vh"}}/>
                                <h2>Big bundah Girl</h2>
                            </div>
                                <img src={p3r} alt="" />
                            <div className="reactions">
                                <FavoriteBorderIcon/>
                                <ChatBubbleIcon style={{marginLeft : "3vh"}}/>
                                <SendIcon style={{marginLeft : "3vh"}}/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="creator">
                    <img src={imgp7} alt="" />
                    <h2>Big bundah Girl</h2>
                    <div style={{display : "flex" , marginTop : "1vh"}}>
                        <div className="creator-followers">
                            <h1>1.5M</h1>
                            <h3>Followers</h3>
                        </div>
                        <div className="creator-following">
                            <h1>1</h1>
                            <h3>Following</h3>
                        </div>
                    </div>
                    <div className="creator_summary">
                        <p>Embracing my curves with confidence, I am the Big Bundah girl who owns every room she enters.</p>
                        <p>My big bundah is not just a feature! I walk with a stride that speaks volumes, turning heads and breaking stereotypes</p>
                    </div>
                    <div className="creator-favourite-foods">
                        <h1>Favourite foods :</h1>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
}