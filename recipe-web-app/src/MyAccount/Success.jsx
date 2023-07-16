import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseConfig.js";
import "./Success.css";

function Success(){
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect (() =>{
        async function getUserData(){
            await supabase.auth.getUser().then((value) =>{
                if(value.data?.user){
                    console.log(value.data.user)
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    },[])

    async function signOut(){
        const {error} = await supabase.auth.signOut();
        navigate("/myaccount");
    }
    return(
        <div className="success-page">
            <header className="success-header">
                <h1>Success!</h1>
                <br/>
                <p>Welcome</p>
                <button onClick = {() => signOut()}>Sign Out</button>
            </header>
        </div>
    );
}
export default Success;