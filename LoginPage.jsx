import React, {useState} from "react";
export const Login = (props) => {
    const[email, setEmail] = useState('');
    const[password, setPass] = useState('');
    const handleSubmit = () => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <label htmlFor = "email"> Email</label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder="youremail@gmail.com" id = "email" name = "email"></input>
                <label htmlFor = "password"> Password</label>
                <input alue = {password} onChange = {(e) => setPass(e.target.value)} type = "password" placeholder="*******" id = "password" name = "password"></input>
                <button type = "submit">Login</button>
            </form>
            <button onClick = {() => props.OnFormSwitch('register')}>New to us? Register here</button>
        </>
    )
}