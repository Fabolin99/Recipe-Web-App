import logo from './logo.svg';
import './App.css';
import LoginPage from './MyAccount/LoginPage';
import { useState } from 'react';
import Register from './MyAccount/Register';
function App() {

  const [formSwitch, setOnFormSwitch] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>setOnFormSwitch(!formSwitch)}></button>
        {
          formSwitch?(<Register />):(<LoginPage />)
        }
        
        
      </header>
    </div>
  );
}

export default App;
