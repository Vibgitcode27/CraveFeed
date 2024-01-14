"use client"
import React, { useState, ChangeEvent, KeyboardEvent, useRef } from "react";
import { Avatar } from "@mui/material";
import "./page.css";

export default function SignUp() {
    const [foodTags, setFoodTags] = useState<string[]>([]);
    const [cuisineTags, setCuisineTags] = useState<string[]>([]);
    const inputRef = useRef(null)
    const [image , setImage] = useState()

    function handleImageChange (e) {
        setImage(URL.createObjectURL(e.target.files[0]))
        // console.log(URL.createObjectURL(e.target.files[0]))
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
                <div className="inputs">
                    <h3>Name</h3>
                    <input type="text" placeholder="Your Name" />
                    <h3>What will others call you?</h3>
                    <input type="text" placeholder="Username" />
                    <h1> Spill the beans on your cravings, buddy!</h1>
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
                    <div className="App">
                        <h2>Add Image:</h2>
                        <input type="file" ref={inputRef} onChange={handleImageChange} />
                        <Avatar alt="Profile Pic" src={image} style={{position : "relative" , width : "20vh" , height : "20vh" , marginTop : "5vh" , marginLeft : "16vh" , border: "2px solid black"}}/>
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