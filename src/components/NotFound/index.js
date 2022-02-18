import React from 'react'
import Wrapper from '../Wrapper'
import { Link } from "react-router-dom";

const NotFound =()=> {
  return (
      <Wrapper>
        <h1>404 - Not Found! <Link to="/main">Go to Main</Link></h1>
        
     </Wrapper>
  )
}
export default NotFound;