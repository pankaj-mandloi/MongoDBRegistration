import React,{useState} from "react";
import axios from "axios";

function Register()
{
    const [userid,setUserId] = useState();
    const [userpass,setUserPass] = useState();
    const [fullname,setFullName] = useState();
    const [picname,setPicName] = useState();
    const [image,setImage] = useState({preview:'',data:''});
    const [status,setStatus] = useState();

    const handleUserIdText=(evt)=>{
        setUserId(evt.target.value);
    }

    const handleUserPassText=(evt)=>{
        setUserPass(evt.target.value);
    }

    const handleFullNameText=(evt)=>{
        setFullName(evt.target.value);
    }

    const handleFileChange = async(evt)=>{
        evt.preventDefault();

        const img = {
            preview:URL.createObjectURL(evt.target.files[0]),
            data:evt.target.files[0],
        }
        setImage(img);
        alert("image upload");
        setPicName(evt.target.files[0].name);
    }

    const handleUploadImage = async()=>{
        var formData = new FormData()
        formData.append('file',image.data);

        const response = await fetch('http://localhost:6090/user/saveuserimage',{
            method:'POST',
            body:formData,
        })
        if (response){setStatus("status:" +response.statusText)}
        alert("upload image");
    }
    const handleRegistrationButton=()=>{
        var obj = {
            userid:userid,
            userpass:userpass,
            fullname:fullname,
            picname:picname,
        };
        
                axios.post("http://localhost:6090/user/register/",obj).then((res)=>{
                    alert(res.data);
                }).catch((err)=>{
                    alert(err);
                })
            }
            

    return(
        <div>
            <center>
                <table>
                    <tr>
                        <td>Enter user id</td>
                        <td>
                            <input type="text" onChange={handleUserIdText}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter user password</td>
                        <td>
                            <input type="password" onChange={handleUserPassText}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Full Name</td>
                        <td>
                            <input type="text" onChange={handleFullNameText}></input>
                        </td>
                    </tr>
                    <tr>
                    <td>Select Photo</td>
                    <td>
                        <img src={image.preview} height={100} width={100}></img>
                        <td>
                            <input type="file" name="file" onChange={handleFileChange}></input>
                        </td>
                    </td>
                </tr>
                <tr>
                    <td>Click to upload image</td>
                    <td>
                        <td>
                            <button type="submit" onClick={handleUploadImage}>Upload</button>
                        </td>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button type="submit" onClick={handleRegistrationButton}>Submit</button>
                    </td>
                </tr>
                </table>
            </center>
        </div>
    );
}export default Register;