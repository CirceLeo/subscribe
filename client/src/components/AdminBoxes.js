import React, { useState, useEffect } from "react"
import AdminBoxItem from "./AdminBoxItem";
import AdminEditBox from "./AdminEditBox";
import AdminCreateBox from "./AdminCreateBox";
import Header from "./Header"


function AdminBoxes() {


    const [adminBoxes, setAdminBoxes] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBox, setSelectedBox] = useState(989837);
    const [openCreateBox, setOpenCreateBox] = useState(false);
    // const [editModal, setEditModal] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/boxes")
        .then( res => res.json())
        .then( data => setAdminBoxes(data))
        .catch( error => console.log(error.message));
    },[])

    const renderedBoxes = adminBoxes.map((box) => {
        return <AdminBoxItem key={box.id} box={box} openModal={openModal} closeModal={closeModal}/>
    })


    function openModal(e, boxId) {
        setModalOpen(true)
        setSelectedBox(boxId)
    }
    
    function closeModal(){
        setModalOpen(false)
        setOpenCreateBox(false)
    }

    function handleCreateClick() {
        setModalOpen(true)
        setOpenCreateBox(true)
    }

    return (
        <div>
            <Header/>
            <button onClick={handleCreateClick}>Create a new box</button>
            <div className='flex'>
            {
                modalOpen && (
                    <>
                    <div className="overlay"></div>
                    <div className="modal">
                        
                    {/* <main className="modal__main"> */}
                        {  modalOpen && openCreateBox ? 
                        <AdminCreateBox closeModal={closeModal}/> 
                        :
                        <AdminEditBox closeModal={closeModal} boxId={selectedBox}/>
                        }
                    {/* </main> */}
                    </div>
                    </>
                )
            }
            {renderedBoxes}
        </div>
        </div>
    )
}

export default AdminBoxes