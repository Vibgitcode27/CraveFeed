"use client"

import React , {KeyboardEvent} from "react";
import { useEffect } from "react";
import "./page.css";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import img4 from "../../_assets/image6.png"
import imgP from "../../_assets/post1.webp"
import img6 from "../../_assets/image4.jpg"
import p2 from "../../_assets/post2.webp"
import p3 from "../../_assets/post3.webp"
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import { Modal , Box} from "@mui/material";
import { trpc } from "@/app/_trpc/client";
import { useAppDispatch, useAppSelector } from "@/app/globalRedux/hooks";
import { userPostData } from "@/app/globalRedux/features/users/postPageUser";

export default function Explore() {
    const imgp4 = img4.src
    const imgp7 = img6.src
    const imgpP = imgP.src
    const p2r = p2.src
    const p3r = p3.src
    const [image, setImage] = useState<string>();
    const [open, setOpen] = useState(false);
    const [foodTags, setFoodTags] = useState<string[]>([]);
    const [cuisineTags, setCuisineTags] = useState<string[]>([]);

    const dispatch = useAppDispatch()

    const postData = trpc.getPosts.useQuery({userId : 1})

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
          setImage(URL.createObjectURL(e.target.files[0]));
        }
      }  

      function handleKeyDownFood(e : KeyboardEvent<HTMLInputElement>) {
        if(e.key !== 'Enter') return;
        const value = e.currentTarget.value;
        if(!value.trim()) return;
        setFoodTags([...foodTags, value]);
        e.currentTarget.value = ''
    }

    function removeTagFood(index : number){
        setFoodTags(foodTags.filter((e1 , i) => i !== index))
    }

    function handleKeyDownCuisine(e : KeyboardEvent<HTMLInputElement>) {
        if(e.key !== 'Enter') return;
        const value = e.currentTarget.value;
        if(!value.trim()) return;
        setCuisineTags([...cuisineTags, value]);
        e.currentTarget.value = ''
    }

    function removeTagCuisine(index : number){
        setCuisineTags(cuisineTags.filter((e1 , i) => i !== index))
    }


    useEffect(() => {
        if(postData.data)
        {
            dispatch(userPostData(postData.data))
        }
    })

    const postDataArray = useAppSelector((state) => state.postData.postData)

    const imageArray = [
        {
            id : 1,
            h2 : "Big Bundah Girl",
            img1 : imgp7,
            img2 : imgpP
        },
        {
            id : 2,
            h2 : "Big Bundah Girl",
            img1 : imgp7,
            img2 : p2r
        },
        {
            id : 3,
            h2 : "Big Bundah Girl",
            img1 : imgp7,
            img2 : p3r
        },
    ]
    
    const [like, setLike] = useState(
        // postDataArray.map((post) => ({ id: post.id , like: "UNLIKE" }))
        imageArray.map((post) => ({ id: post.id , like: "UNLIKE" }))

    );

    function handleLike(postId : any) {
        setLike((prevLikes) =>
            prevLikes.map((prevLike) =>
                prevLike.id === postId ? { ...prevLike, like: "LIKE" } : prevLike
            )
        );
    }

    function handleUnLike(postId : any) {
        setLike((prevLikes) =>
            prevLikes.map((prevLike) =>
                prevLike.id === postId ? { ...prevLike, like: "UNLIKE" } : prevLike
            )
        );
    }

    return (
    <div className="mainDiv">
      <section className="sec2">
            <div className="search">
                <div className="searchBox">
                    <SearchIcon style={{fontSize : "4.5vh" , marginRight : "2vh" , color: "rgb(213, 213, 213)"}}/>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="addBtn">
                    <button onClick={() => setOpen(true)}> 
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
                        {/* {postDataArray.map((value, index) => ( */}
                        {imageArray.map((value, index) => (
                            <div className="content-post" key={index}>
                                <div className = "post-div1" style={{display : "flex"}}>
                                    <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "7vh" , height : "7vh" , marginTop : "1vh" , marginBottom : "1vh" , marginLeft : "2vh"}}/>
                                    <div>
                                    {/* <h2>{value.Usera.name}</h2> */}
                                        <h2>{value.h2}</h2>
                                        <h3>@username</h3>
                                    </div>
                                    <button>User Info</button>
                                </div>
                                <img src={imgpP} alt="" />
                                <div className="reactions">
                                    { value.id === like[index].id && like[index].like === `LIKE`?
                                        ( <FavoriteIcon style={{color : "crimson"}} onClick={() => handleUnLike(value.id)}/>) : (
                                            <FavoriteBorderIcon onClick={() => handleLike(value.id)}/>
                                        )
                                    }
                                    <ChatBubbleIcon style={{marginLeft : "3vh"}}/>
                                    <SendIcon style={{marginLeft : "3vh"}}/>
                                </div>
                                <div className="about-post">
                                    <div>
                                        <h3>This is caption of the post the delicious cousine.</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="creator">
                    <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "30vh" , height : "30vh" , marginTop : "2vh", justifyContent : "center", marginLeft : "8vh" , border : "2px solid black"}}/>
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{padding: "5vh 40vh"}}
      >
        <Box >
        <div className="sub-div">
                <h2>Add Post</h2>
                <img src={image} alt="" />
                <div className="Add-Post-Upload-button">
                    <div className="Add-post-Upload-button-div">
                        <input type="file" onChange={handleImageChange} className="input-file" />
                    </div>
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Add caption here" />
                        <div className="flex-input">
                            <input type="text" placeholder="Add Location"/>
                            <input type="text" placeholder="Enter Restaurent" id="flex-input2" />
                        </div>
                    <h3>Three foods you crave most </h3>
                    <div className="tags-input-container">
                    {foodTags.map((tag, index) => (
                        <div className="tag-item" key={index}>
                            <span className="text">{tag}</span>
                            <span className="close" onClick={() => removeTagFood(index)}>&times;</span>
                        </div>
                    ))}
                        <input type="text" onKeyDown={handleKeyDownFood} className="tags-input" placeholder="Enter your food"/>                        
                    </div>
                    <h3>Three cousines you like</h3>
                    <div className="tags-input-container">
                    {cuisineTags.map((tag, index) => (
                        <div className="tag-item" key={index}>
                            <span className="text">{tag}</span>
                            <span className="close" onClick={() => removeTagCuisine(index)}>&times;</span>
                        </div>
                    ))}
                        <input type="text" onKeyDown={handleKeyDownCuisine} className="tags-input" placeholder="Enter your food"/>                        
                    </div>
                </div>
                <div>
                    <button className="post-button">POST</button>
                </div>
        </div>
        </Box>
      </Modal>
    </div>
  );
}