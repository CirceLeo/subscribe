import { useState } from "react";
import BoxListItem from './BoxListItem'; 
import BoxDetail from './BoxDetail';
import CheckoutForm from './CheckoutForm';


function BoxesList({ boxInfo }) {

    const [modalOpen, setModalOpen] = useState(false);
    const [currentBox, setCurrentBox] = useState(5765764);
    const [modalCheckout, setModalCheckout] = useState(false)

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
                        {modalCheckout ? 
                            <CheckoutForm closeModal={closeModal} boxId={currentBox} setModalCheckout={setModalCheckout}/> :
                            <BoxDetail closeModal={closeModal} boxId={currentBox} setModalCheckout={setModalCheckout} /> 
                        }
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