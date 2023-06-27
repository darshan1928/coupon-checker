import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({setIsButtonPressed,setInputValue,setAmount,isButtonPressed}) {

     function clearClick(){
      setInputValue("")
      setAmount("")
      setIsButtonPressed(false)

     }

  return (

<Navbar style={{backgroundColor:"#D6DCEA"}} data-bs-theme="dark">
<Container>
  
  <Nav className="me-auto">
    <Nav.Link >  <Link to='/'>   <button style={{backgroundColor:"rgb(28,107,134)",padding:"5px",borderRadius:"5px"}} onClick={clearClick} >HOME</button></Link> </Nav.Link>

    {
          isButtonPressed && <div style={{display: 'flex'}}>
 <Nav.Link >  <Link to='/offer1'>   <button style={{backgroundColor:"rgb(28,107,134)",padding:"5px",borderRadius:"5px"}}>Coupon 1</button></Link>    </Nav.Link>
 <Nav.Link >   <Link to='/offer2'>   <button style={{backgroundColor:"rgb(28,107,134)",padding:"5px",borderRadius:"5px"}}>Coupon 2</button></Link>    </Nav.Link>
 <Nav.Link >   <Link to='/offer3'>   <button style={{backgroundColor:"rgb(28,107,134)",padding:"5px",borderRadius:"5px"}}>Coupon 3</button></Link>    </Nav.Link>
 </div>
        }


    
  </Nav>
</Container>
</Navbar>


   
  )
}

export default Header


