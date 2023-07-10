import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './MyAccount.css'; 
import { createClient } from "@supabase/supabase-js";
import {Auth} from "@supabase/auth-ui-react";

const supabase = createClient(
  'https://ixfirovbkskvyhrltteh.supabase.co',
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Zmlyb3Zia3Nrdnlocmx0dGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwNDQzMDMsImV4cCI6MjAwMDYyMDMwM30.e-9p8pkQ7T5FnXai60BydhcREf1O-Ga3h0VTZzCCUPY"
);

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