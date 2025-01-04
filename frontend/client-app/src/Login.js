import React ,{useState} from "react";
import axios from "axios";
import Home from "./Home";
import ReactDOM from "react-dom/client";
function Login()
{
    const[userid,setUserId]=useState();
    const[userpass,setUserPass]=useState();
    const[fullname,setFullName]=useState();
    const[picname,setPicName]=useState();

    const handleUserIdText=(evt)=>{
        setUserId(evt.target.value);
    }
    const handleUserPass=(evt)=>{
        setUserPass(evt.target.value);
    }
    const handleLoginButton=()=>{
        var obj={
            userid:userid,
            userpass:userpass
        };
        axios.post("http://localhost:6090/user/login",obj).then((res)=>{
            if(res.data.userid!=undefined)
            {
                setFullName(res.data.fullname)
                setPicName(res.data.picname)
                const root=ReactDOM.createRoot(document.getElementById("root"));
                root.render(<Home data={res.data}></Home>)
            }
            else{
                alert(res.data);
            }
        }).catch((err)=>{
            alert(err);
        })
    }
    return(
        <div>
            <center style={{padding:"20px"}}>
                <table style={{backgroundColor:"yellow",borderStyle:"double"}}>
                    <tr>
                        <td>User Id</td>
                        <td>
                            <input type="text" onChange={handleUserIdText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="password" onChange={handleUserPass}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td >
                            <button type="submit" onClick={handleLoginButton} style={{padding:"5px",backgroundColor:"greenyellow"}}>Login</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    )

}export default Login;