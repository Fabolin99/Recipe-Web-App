import React, {useState} from "react";
export const Register = () => {
    const[email, setEmail] = useState('');
    const[password, setPass] = useState('');
    const[name, setName] = useState('');

    const handleSubmit = () => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value = {name} name = "name" id = "name" placeholder = "full name" onChange = {(e) => setName(e.target.value)}></input>
                <label htmlFor="email">Email</label>
                <input value = {email} name = "email" id = "email" placeholder = "youremail@gmail.com" onChange = {(e) => setEmail(e.target.value)}></input>
                <label htmlfor = "password"> Password</label>
                <input value = {password} onChange = {(e) => setPass(e.target.value)} type = "password" placeholder="*******" id = "password" name = "password"></input>
                <button type = "submit">Register</button>
            </form>
            <button className = "link-button" onClick = {() => props.OnFormSwitch('login')}>Already registered? Login</button>
        </div>
    )
}