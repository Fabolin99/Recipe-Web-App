import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Auth} from "@supabase/auth-ui-react";
import supabase from "supabaseConfig.js";
import "./MyProfile.css";

function Success(){
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    useEffect (() =>{
        async function getUserData(){
            await supabase.auth.getUser().then((value) =>{
                //value.data.user
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
        navigate("/LoginPage");
    }
    return(
        <div className="success-page">
            <header className="success-header">
                <h1>Success!</h1>
                <button onClick = {() => signOut()}>Sign Out</button>
            </header>
        </div>
    );
}
export default Success;