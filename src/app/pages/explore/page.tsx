"use client"

import React , {KeyboardEvent} from "react";
import { useEffect } from "react";
import "./page.css";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import imgP from "../../_assets/post1.webp"
import img6 from "../../_assets/image4.jpg"
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Accordion , AccordionDetails , AccordionSummary , Typography} from "@mui/material";
import { Modal , Box} from "@mui/material";
import { trpc } from "@/app/_trpc/client";
import { useAppDispatch, useAppSelector } from "@/app/globalRedux/hooks";
import { userPostData , pushUserId , setVisitingUser} from "@/app/globalRedux/features/users/postPageUser";
import { useRouter } from "next/navigation";

export default function Explore() {
    
    const router = useRouter()

    const imgp7 = img6.src
    const imgpP = imgP.src
    const [image, setImage] = useState<string>();
    const [open, setOpen] = useState(false);
    const [foodTags, setFoodTags] = useState<string[]>([]);
    const [cuisineTags, setCuisineTags] = useState<string[]>([]);
    const dispatch = useAppDispatch()
    let userDataByFil;
    
    const okID = useAppSelector((state) => state.userInfo.viewUserId)
    userDataByFil = trpc.getUserById.useQuery(okID)
    console.log(userDataByFil.data)
    
    const UserInfoData = userDataByFil.data;
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
    console.log(postDataArray)
    
    // HANDLE VIEW COMMENTS BUTTON

    const [expandedArray, setExpandedArray] = React.useState(new Array(postDataArray.length).fill(false));

  const handleExpansion = (index: number) => {
    // Toggle the expansion state of the clicked Accordion and close others
    setExpandedArray((prevExpandedArray) =>
      prevExpandedArray.map((_, i) => (i === index ? !prevExpandedArray[i] : false))
    );
  };

    // HANDLE LIKES 

    const [like, setLike] = useState(
        postDataArray.map((post) => ({ id: post.id , like: "UNLIKE" }))

    );

    function handleLike(postId: any) {
        setLike((prevLikes) =>
          prevLikes.map((prevLike) =>
            prevLike.id === postId ? { ...prevLike, like: "LIKE" } : prevLike
          )
        );
      }
      
      function handleUnLike(postId: any) {
        setLike((prevLikes) =>
          prevLikes.map((prevLike) =>
            prevLike.id === postId ? { ...prevLike, like: "UNLIKE" } : prevLike
          )
        );
      }
      
      const mutation = trpc.likePost.useMutation()

      const handleLikePost = async (postId: number) => {
        try {
            const result = await mutation.mutate({ userId: 1, postId });
            setTimeout(() => {
                window.location.reload();
            },10)
            console.log(result);
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };

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
                        {postDataArray && postDataArray.map((value, index) => (
                        // {imageArray.map((value, index) => (
                            <div className="content-post" key={index}>
                                <div className = "post-div1" style={{display : "flex"}}>
                                    <Avatar alt="Remy Sharp" src={imgp7} style={{border : "2px solid black" , position : "relative" , width : "7vh" , height : "7vh" , marginTop : "1vh" , marginBottom : "1vh" , marginLeft : "2vh"}}/>
                                    <div>
                                    {/* <h2>{value.Usera.name}</h2> */}
                                        <h2>{value.Usera.name}</h2>
                                        <h3><LocationOnIcon style={{color : "gray" , height : "17px" , marginTop : "-0.4vh" , marginRight : "-0.4vh"}}/>{value.city}</h3>
                                    </div>
                                    <button onClick={() => {
                                        const id = value.Usera.id;
                                        dispatch(pushUserId({id}));
                                    }}>User Info</button>
                                </div>
                                <img src={imgpP} alt="" />
                                <div className="reactions">
                                    {/* {like.find((prevLike) => prevLike.id === value.id)?.like === "LIKE" ? (
                                        <FavoriteIcon style={{ color: "crimson" }} onClick={() => handleUnLike(value.id)} />
                                        ) : (
                                        <FavoriteBorderIcon onClick={() => handleLike(value.id)} />
                                    )} */}
                                    {value.Likes.length > 0 ? (value.Likes.map((like, index) => (
                                    <React.Fragment key={index}>
                                        {like.postId && like.postId === value.id ? (
                                            <FavoriteIcon style={{ color: "crimson" }} onClick={() => handleLikePost(value.id)} />
                                        ) : (
                                            <FavoriteBorderIcon/>
                                        )}
                                    </React.Fragment>
                                ))) : (
                                    <FavoriteBorderIcon onClick={() => handleLikePost(value.id)} />
                                )}
                                    <ChatBubbleIcon style={{marginLeft : "3vh"}}/>
                                    <SendIcon style={{marginLeft : "3vh"}}/>
                                </div>
                                <div className="about-post">
                                    <div>
                                        <h3>{value.caption}</h3>
                                    </div>
                                </div>
                                <div className="content-comments">
                                {/* <Accordion
                                    expanded={expanded}
                                    onChange={handleExpansion}
                                    // slots={{ transition: Fade }}
                                    // slotProps={{ transition: { timeout: 400 } }}
                                    // sx={{
                                    //     '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                    //     '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                                    //     }}
                                    style={{boxShadow : "none" ,borderRadius : "20px" , marginTop : "-0.5vh"}}
                                > */}
                                    <Accordion
                                    expanded={expandedArray[index]} // Use the individual expanded state
                                    onChange={() => handleExpansion(index)} // Pass the index to handleExpansion
                                    style={{ boxShadow: "none", borderRadius: "20px", marginTop: "-0.5vh" }}
                                    >
                                        <AccordionSummary
                                        aria-controls="panel1-content"
                                        id="panel1-header" >
                                        <Typography style={{fontSize : "14px"}}>View Comments</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        {value.Comments && Array.isArray(value.Comments) && value.Comments.length > 0 && (
                                            value.Comments.map((comment, commentIndex) => (
                                                <div key={commentIndex} className="comment-load-main-div">
                                                    <div style={{ display: "flex" }} className="comment-load-div">
                                                        <Avatar alt="Remy Sharp" src={imgp7} style={{ position: "relative",border: "1px solid black" , width: "6vh", height: "6vh", marginBottom: "1vh" }} />
                                                        <div className="comment-name-username">
                                                            <h2>{comment.Usera.name}</h2>
                                                        </div>
                                                    </div>
                                                    <div className="comment-pTag">
                                                        <p>{comment.text}</p>
                                                    </div>
                                                </div>
                                            ))
                                            )}
                                    </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="creator">
                    <Avatar alt="Remy Sharp" src={imgp7} style={{position : "relative" , width : "30vh" , height : "30vh" , marginTop : "2vh", justifyContent : "center", marginLeft : "8vh" , border : "2px solid black"}}/>
                    <h2>{UserInfoData?.name}</h2>
                    <div style={{display : "flex" , marginTop : "1vh"}}>
                        <div className="creator-followers">
                            <h1>{UserInfoData?.Followers.length}</h1>
                            <h3>Followers</h3>
                        </div>
                        <div className="creator-following">
                            <h1>{UserInfoData?.Following.length}</h1>
                            <h3>Following</h3>
                        </div>
                    </div>
                    <div className="creator_summary">
                        <p>{UserInfoData?.bio}</p>
                    </div>
                    <div className="creator-favourite-foods">
                        <h1>Favourite foods :</h1>
                    </div>
                    <button onClick={ () => {
                        let id = UserInfoData?.id;
                        dispatch(setVisitingUser({visitingUserId : id}))
                        setTimeout(() => {
                            router.push('/pages/visit-user-profile')        
                        }, 2000);
                    }} >View Profile</button>
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
                        <input type="text" onKeyDown={handleKeyDownFood} style={{paddingLeft : "1vh"}} className="tags-input" placeholder="Enter your food"/>                        
                    </div>
                    <h3>Three cousines you like</h3>
                    <div className="tags-input-container">
                    {cuisineTags.map((tag, index) => (
                        <div className="tag-item" key={index}>
                            <span className="text">{tag}</span>
                            <span className="close" onClick={() => removeTagCuisine(index)}>&times;</span>
                        </div>
                    ))}
                        <input type="text" onKeyDown={handleKeyDownCuisine} style={{paddingLeft : "1vh"}} className="tags-input" placeholder="Enter the cousine"/>                        
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