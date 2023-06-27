import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Offer1 from "./Offer1";
import Offer2 from "./Offer2";
import Offer3 from "./Offer3";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Error from "./Error";
import { useState } from "react";
function App() {
    const [inputValue,setInputValue]=useState('')
    const [amount,setAmount]=useState('')
    const [isButtonPressed, setIsButtonPressed] = useState(false);


    return (
        <BrowserRouter>
            <div style={{ textAlign: "center" }}>
                <Header setIsButtonPressed={setIsButtonPressed} isButtonPressed={isButtonPressed} setAmount={setAmount} amount={amount} setInputValue={setInputValue} inputValue={inputValue} />
                <Routes>
                    <Route path="/" element={<Home  setIsButtonPressed={setIsButtonPressed} isButtonPressed={isButtonPressed} setAmount={setAmount} amount={amount} setInputValue={setInputValue} inputValue={inputValue} />} />
                    <Route path="/offer1" element={<Offer1 isButtonPressed={isButtonPressed} setIsButtonPressed={setIsButtonPressed} setAmount={setAmount} amount={amount} setInputValue={setInputValue} inputValue={inputValue} />} />
                    <Route path="/offer2" element={<Offer2 isButtonPressed={isButtonPressed} setIsButtonPressed={setIsButtonPressed}  setAmount={setAmount} amount={amount} setInputValue={setInputValue} inputValue={inputValue}/>} />
                    <Route path="/offer3" element={<Offer3 isButtonPressed={isButtonPressed} setIsButtonPressed={setIsButtonPressed}  setAmount={setAmount} amount={amount} setInputValue={setInputValue} inputValue={inputValue}/>} />
                    <Route path="*" element={<Error/>} />
                    
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
