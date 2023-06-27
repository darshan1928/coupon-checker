import React from 'react'

function Offer1({inputValue,amount}) {
 console.log(inputValue)
  var result = (10 / 100) * amount

  return (
    <div style={{height:"85vh",backgroundColor:"#081B4B",textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h2 style={{color:"#fff"}}>After 10 % offer ,Your Final Amount is : {amount- result}</h2>
    </div>
  )
}

export default Offer1
