import logo from './logo.svg';
import './App.css';
import "./RepicePlanner/RecipePlanner.jsx"
import RecipePlanner from './RepicePlanner/RecipePlanner.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecipePlanner />
      </header>
    </div>
  );
}

export default App;
