import React from "react";

function Offer3({ inputValue, amount }) {
    var result = (25 / 100) * amount;

    return (
        <div style={{ height: "85vh", backgroundColor: "#081B4B",textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
           
                <h2 style={{ color: "#fff" }}>After 25 % offer ,Your Final Amount is : {amount - result}</h2>
            
        </div>
    );
}

export default Offer3;
