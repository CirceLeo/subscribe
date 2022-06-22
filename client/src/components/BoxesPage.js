import BoxesList from "./BoxesList"
import Header from "./Header"
import { useEffect, useState } from "react";

function BoxesPage() {

    const [boxInfo, setBoxInfo] = useState([]);

    const [boxesURL, setBoxesURL] = useState(`low-to-high`)

    useEffect(() => {
        fetch(boxesURL)
        .then( res => res.json())
        .then( data => setBoxInfo(data))
        .catch( error => console.log(error.message));
    }, [boxesURL])

    return (
        <div>
            <Header />
            <div id="box-container">
                <BoxesList boxInfo={boxInfo} setBoxInfo={setBoxInfo} setBoxesURL={setBoxesURL}/>
            </div>
        </div>
    )
}

export default BoxesPage