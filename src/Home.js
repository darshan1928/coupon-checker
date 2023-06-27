import { Button } from "react-bootstrap";
import "./Home.css";

function Home({ inputValue, setInputValue, setAmount, amount, isButtonPressed, setIsButtonPressed }) {
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleClick = (event) => {
        if (inputValue.length === 0) {
            return false;
        }

        setIsButtonPressed(true);
        setAmount(parseInt(inputValue));
        console.log(isButtonPressed);
    };
   
    return (
        <div style={{ backgroundColor:"#081B4B",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"85vh"}}>
            <h1 style={{color:"#3D7EDE"}}>OFFER ZONE!!!!!</h1>
            <div className="inputBox" style={{ backgroundColor:"#E6E6E6",padding: 30,border:"2px solid black" ,borderRadius:10}}>
            <input
                className="no-spin"
                placeholder="TYPE AN AMOUNT"
                onChange={handleChange}
                value={inputValue}
                type="number"
               
               
            />
            <Button style={{backgroundColor:"#081B4B"}} type="submit" onClick={handleClick}>
                Click for Offer!!!
            </Button>
            </div>
        </div>
    );
}

export default Home;
