import React from "react";
import { useNavigate} from "react-router-dom";
import './MyAccount.css'; 
import { createClient } from "@supabase/supabase-js";
import {Auth} from "@supabase/auth-ui-react";

//create supabase client
const url = process.env.SUPABASE_APP_URL;
const anon_key = process.env.SUPABASE_APP_KEY;
const supabase = createClient(
   "https://ixfirovbkskvyhrltteh.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Zmlyb3Zia3Nrdnlocmx0dGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwNDQzMDMsImV4cCI6MjAwMDYyMDMwM30.e-9p8pkQ7T5FnXai60BydhcREf1O-Ga3h0VTZzCCUPY"
);


function Login(){
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async(event) =>{
    if (event !== "SIGNED_OUT"){
      //forward to sucess page
      navigate("/MyProfile")
    } else {
      //forward to localhost3000
      navigate("/");
    }
  })
  return(
    <div className = "App">
        <header className="header">
          <Auth
            supabaseClient = {supabase}
            theme = "dark"
            providers = {["github", "facebook", "apple"]}
          />
        </header>
    </div>
  )
}

export default Login;
