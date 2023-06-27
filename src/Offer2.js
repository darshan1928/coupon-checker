import React from 'react'

export default function Offer2({amount}) {

  var result = (20 / 100) * amount
  return (
     <div style={{height:"85vh",backgroundColor:"#081B4B",textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <h2 style={{color:"#fff"}}>After 20 % offer ,Your Final Amount is : {amount- result}</h2>
  </div>
  )
}
