import React, {useState} from "react";
import {LoginPage} from "./LoginPage";
import {Register} from "./register";

function MyAccount() {
    const[currentForm, setCurrentForm] = useState('login');
    const toggleForm = (forName) => {
        setCurrentForm(forName)
    }
    return (
        <div className = "MyAccount">
            {
            currentForm === "login" ? <LoginPage onFormSwitch = {toggleForm}/> : <Register onFormSwitch = {toggleForm}/>
            }

        </div>
    );
}

export default MyAccount;