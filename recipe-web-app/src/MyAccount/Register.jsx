// import React, {useState} from "react";
// //import LoginPage from "./LoginPage";


// const Register = () => {
//     const [formSwitch, setOnFormSwitch] = useState(true)
//     const[email, setEmail] = useState('');
//     const[password, setPass] = useState('');
//     const[name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }
//     return (
//         <div className="form-container">
//             <h2>Register</h2>
//             <form onSubmit = {(e)=>handleSubmit}>
//                 <label htmlFor="name">Full Name</label>
//                 <br/>
//                 <input value = {name} name = "name" id = "name" 
//                 placeholder = "full name" onChange = {(e) => setName(e.target.value)}></input>
//                 <br/>
//                 <label htmlFor="email">Email</label>
//                 <br/>
//                 <input value = {email} name = "email" id = "email" 
//                 placeholder = "youremail@gmail.com" onChange = {(e) => setEmail(e.target.value)}></input>
//                 <br/>
//                 <label htmlfor = "password"> Password</label>
//                 <br/>
//                 <input value = {password} 
//                 onChange = {(e) => setPass(e.target.value)} type = "password" placeholder="*******" id = "password" name = "password" />
//                 <br/>
//                 <button type = "submit">Register</button>
//                 <br/>
//                 <button onClick={()=>setOnFormSwitch(!formSwitch)}>Back to Login Page</button>
//                 <br/>
//             </form>
         
//         </div>
//     )
// }

// export default Register;