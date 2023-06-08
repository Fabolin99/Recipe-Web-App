// import React, {useState} from "react";

// const LoginPage = (props) => {
//     const[email, setEmail] = useState('');
//     const[password, setPass] = useState('');
//     const handleSubmit = () => {
//         console.log(email);
//     }
//     return (
//         <div className="form-container">
//             <h2>Login</h2>
//             <form onSubmit = {handleSubmit}>
//                 <label htmlFor = "email">Email</label>
//                 <br/>
//                 <input value = {email} onChange = {() => setEmail()} type = "email" placeholder="youremail@gmail.com" id = "email" name = "email"></input>
//                 <br/>
//                 <label htmlFor = "password"> Password</label>
//                 <br/>
//                 <input value = {password} onChange = {() => setPass()} type = "password" placeholder="*******" id = "password" name = "password"></input>
//                 <br/>
//                 <button type = "submit">Login</button>
//             </form>
//             <button className = "link-button" onClick = {() => props.OnFormSwitch('Register')}>New to us? Register here</button>
//         </div>
//     )
// }

// export default LoginPage;

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {useNavigate} from "react-router-dom";
 

const supabaseUrl = 'https://ixfirovbkskvyhrltteh.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Zmlyb3Zia3Nrdnlocmx0dGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwNDQzMDMsImV4cCI6MjAwMDYyMDMwM30.e-9p8pkQ7T5FnXai60BydhcREf1O-Ga3h0VTZzCCUPY"
const supabase = createClient(supabaseUrl, supabaseKey);

 

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate()
 

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

 

    if (error) {
      setLoginError(error.message);
    } else if (user) {
      alert("Logged in successfully!");
    }
  };

 

  return (
<div className="App">
<form onSubmit={handleLogin}>
<label>
          Email:
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
</label>
<label>
    <br/>
          Password:
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
</label>
<button type="submit">Login</button>
        {loginError && <p>{loginError}</p>}
</form>
<br/>

<button className = "register-button" onClick = {() => {navigate("Register")}}>New to us? Register here</button>

</div>
  );
}

 

export default App;