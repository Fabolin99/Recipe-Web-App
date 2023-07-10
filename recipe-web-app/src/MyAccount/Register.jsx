import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './MyAccount.css'; 
import { createClient } from '@supabase/supabase-js';

//delcare useStates 
const RegisterForm = () => {
    const[email, setEmail] = useState('');
    const[password, setPass] = useState('');
    const[name, setName] = useState('');
    const navigate = useNavigate();

//create supabase client
const url = process.env.SUPABASE_APP_URL;
const anon_key = process.env.SUPABASE_APP_KEY;
const supabase = createClient(url, anon_key);

//handleRegister function 
const handleRegister = async (e) => {
  e.preventDefault();
  console.log(email);
  try {
    const { user, error } = await supabase.auth.signUp
    ({ 
      email:'someone@email.com',
      password :"Aveeno1030"
    });
      if (error) {
        console.error(error);
        } else {
          console.log('You have successfully registered!:', user);
          }
        } catch (error) {
          console.error('There as an issue with signing up!:', error.message);
        }
        }
  //make registration form
  return (
    <div className="form-container">
      <h2>Register</h2>
        <form onSubmit = {handleRegister}>
          <label htmlFor="name">Full Name</label>
          <br/>
          <input value = {name} 
          onChange = {(e) => setName(e.target.value)}>
          </input>
          <br/>
          <label htmlFor="email">Email(Username)</label>
          <br/>
          <input value = {email}
          onChange = {(e) => setEmail(e.target.value)}>
          </input>
          <br/>
          <label htmlFor = "password">Password</label>
          <br/>
          <input value = {password} 
          onChange = {(e) => setPass(e.target.value)}/>

          <br/>
          <button onClick = {handleRegister} type = "submit">Register</button>
          <br/>
          <br/>
          <button onClick={()=>navigate("/LoginPage")}>Back to Login Page</button>
          <br/>
          </form>
         
        </div>
    )
}

export default RegisterForm;