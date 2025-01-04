import React  from "react";
import axios from "axios";
import EditProfile from "./EditProfile";
import ReactDOM from "react-dom/client";
function Home(props)
{
    const handleEditButton=()=>{
        var data=props.data;
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<EditProfile data={data}></EditProfile>);
    }
    return(
        <div>
            <h5>User Home</h5>
            <p>Welcome  {props.data.fullname}</p>
            <img src={"http://localhost:6090/user/getuserimage/"+props.data.picname} height={100} width={100}></img>
           <button onClick={handleEditButton}>EditProfile</button>
        </div>
    );
}export default Home;