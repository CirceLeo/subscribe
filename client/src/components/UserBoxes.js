import Header from "./Header"
import BoxesList from "./BoxesList"
import { useState } from "react";

function UserBoxes(props) {
    // const user = {
    //     id: 22,
    //     username: 'joe'
    // }

    // const [userBoxes, setUserBoxes] = useState([])

    // fetch(`http://localhost:4000/user/${user.id}`)
    // .then( res => res.json())
    // .then( data => setUserBoxes(data.boxes))
    // .catch( error => console.log(error.message));
    
    return (
        <div>
            <Header />
        <h1>My Boxes</h1>
        {/* <BoxesList boxInfo={userBoxes} /> */}
        </div>
    )
}
export default UserBoxes