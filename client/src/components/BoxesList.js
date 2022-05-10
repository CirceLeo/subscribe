import BoxListItem from './BoxListItem'; 
import { useState } from "react";
import BoxDetail from './BoxDetail';


function BoxesList({ boxInfo }) {


    const [modalOpen, setModalOpen] = useState(false);
    const [currentBox, setCurrentBox] = useState(5765764);

    const renderedBoxes = boxInfo.map((box) => {
        return <BoxListItem key={box.id} box={box} openModal={openModal}/>
    })

    function openModal(e, boxId) {
        setModalOpen(true)
        setCurrentBox(boxId)
    }
    
    function closeModal(){
        setModalOpen(false)
    }
    
    return (
        <div className='flex'>
            {
                modalOpen && (
                    <>
                    <div className="overlay"></div>
                    <div className="modal">
                        
                    {/* <main className="modal__main"> */}
                        <BoxDetail closeModal={closeModal} boxId={currentBox}/>
                    {/* </main> */}
                    </div>
                    </>
                )
            }
            {renderedBoxes}
        </div>
    )
}
export default BoxesList