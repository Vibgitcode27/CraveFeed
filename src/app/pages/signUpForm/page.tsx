"use client"
import React, { useState, ChangeEvent, KeyboardEvent, useRef } from "react";
import { Avatar } from "@mui/material";
import "./page.css";

export default function SignUpForm() {
    const [foodTags, setFoodTags] = useState<string[]>([]);
    const [cuisineTags, setCuisineTags] = useState<string[]>([]);
    const [image, setImage] = useState<string>();

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

    return(
        <div className="main-div">
            <div className="sub-div">
                <h2>🍽️ Welcome to <span>CRAVEFEED</span>😋</h2>
                    <div className="Upload-button" style={{display : "flex"}}>
                        <Avatar alt="Profile Pic" src={image} style={{position : "relative" , width : "14vh" , height : "14vh" , marginTop : "-2vh" , marginLeft : "30vh" , border: "2px solid black"}}/>
                        <div className="Upload-button-div">
                            <input type="file" onChange={handleImageChange} className="input-file" />
                        </div>
                    </div>
                <div className="inputs">
                    {/* <h3>Name</h3> */}
                    <input type="text" placeholder="Your Name" />
                    {/* <h3>Bio</h3> */}
                    <input type="text" placeholder="Bio" />
                    {/* <h3>Username</h3> */}
                    <input type="text" placeholder="Username" />
                    {/* <h1> Spill the beans on your cravings, buddy!</h1> */}
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
                <button>Let's Go</button>
            </div>
        </div>
    )
}