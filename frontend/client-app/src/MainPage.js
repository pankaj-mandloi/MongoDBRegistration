import React from "react";
import {Link,Route,Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register"
import mainpic from "./mainpic.jpg";

function MainPage()
{
    return(
        <div>
            <center>
                <img src={mainpic} height={400} width={1000}></img>
                <nav>
                    <Link to="/login" style={{padding:"10px"}}>Login</Link><span></span>
                    <Link to="/register" style={{padding:"10px"}}>Register</Link><span></span>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                </Routes>
            </center>
        </div>
    )
}export default MainPage;
