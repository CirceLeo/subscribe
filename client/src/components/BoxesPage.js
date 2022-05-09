import BoxesList from "./BoxesList"
import Header from "./Header"
import { useEffect, useState } from "react";

function BoxesPage() {

    const [boxInfo, setBoxInfo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/boxes`)
        .then( res => res.json())
        .then( data => setBoxInfo(data))
        .catch( error => console.log(error.message));
    }, [])

    return (
        <div>
            <Header />
            <div id="box-container">
                <BoxesList boxInfo={boxInfo} />
            </div>
        </div>
    )
}

export default BoxesPage