import React from "react";
import {useNavigate} from "react-router-dom";
import {Auth} from "@supabase/auth-ui-react";
import supabase from "../supabaseConfig.js";
import "./LoginPage.css";

function Login(){
  const navigate = useNavigate();
  supabase.auth.onAuthStateChange(async(event) =>{
    if (event !== "SIGNED_OUT"){
      //forward to sucess page
      navigate("/Success")
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