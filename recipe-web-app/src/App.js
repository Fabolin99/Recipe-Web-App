import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import NotFound from "./components/NotFound";
import RecipePlanner from "./components/RecipePlanner"


function App() {
    return (    
        <div>
            <BrowserRouter>
            <NavigationBar />
                <Routes>
                    <Route path="/" element={<NotFound />} />
                    <Route path="/create" element={<NotFound />} />
                    <Route path="/cookbooks" element={<NotFound />} />
                    <Route path="/plan" element={<RecipePlanner />} />
                    <Route path="/myaccout" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
