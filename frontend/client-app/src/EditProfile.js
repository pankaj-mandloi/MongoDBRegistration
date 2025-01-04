
import React, {useState} from "react";
import axios from "axios";
function EditProfile(props)
{
    const [userid,setUserId] = useState(props.data.userid);
    const [userpass,setUserPass] = useState(props.data.userpass);
    const [fullname,setFullName] = useState(props.data.fullname);
    const [picname,setPicName] = useState(props.data.picname);
    const [image,setImage] = useState({preview:'',data:''});
    const [status,setStatus] = useState();
    const[oldpicname,setOldPicName]=useState(props.data.picname);

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

        const response = await fetch('http://localhost:6090/user/updateuserimage/'+oldpicname,{
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
        axios.put("http://localhost:6090/user/editprofile/",obj).then((res)=>{
            alert(res.data);
        }).catch((err)=>{
            alert(err);
        })

    }

    return(
        <div>
            <center>
                <h5>Edit User Profile</h5>
                <table>
                    <tr>
                        <td>User id</td>
                        <td>
                            <input readOnly type="text" onChange={handleUserIdText} value={userid}></input>
                        </td>
                    </tr>
                    <tr>
                        <td> Password</td>
                        <td>
                            <input type="password" onChange={handleUserPassText} value={userpass}></input>
                        </td>
                    </tr>
                    <tr>
                        <td> Full Name</td>
                        <td>
                            <input type="text" onChange={handleFullNameText} value={fullname}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Photo</td>
                        <td>
                            <img src={"http://localhost:9191/user/getuserimage/"+oldpicname} height={100} width={100}></img>
                       </td>
                </tr>
                <tr>
                    <td>Select Photo</td>
                    <td>
                        <td>
                           <input type="file" name="file" onChange={handleFileChange}/>
                        </td>
                        <img src={image.preview} height={100} width={100}/>
                    </td>
                </tr>
                
                <tr>
                    <td></td>
                    <td>
                        <button type="submit" onClick={()=>{handleRegistrationButton();handleUploadImage();}}>submit</button>
                    </td>
                </tr>
                </table>
            </center>
        </div>
    );

}export default EditProfile;