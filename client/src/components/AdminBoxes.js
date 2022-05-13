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
        fetch("/admin-boxes")
        .then( res => res.json())
        .then( data => setAdminBoxes(data))
        .catch( error => console.log(error.message));
    },[])

    // console.log(adminBoxes)

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

    useEffect(()=> {
        if(modalOpen)
        {document.body.style.overflow = 'hidden';}
        else {
            document.body.style.overflow = 'visible'}
    }, [modalOpen])

    return (
        <div>
            <Header/>
            <button className="modal-button" onClick={handleCreateClick}>Create a new box</button>
            <div className='flex'>
            {
                modalOpen && (
                    <>
                    <div className="overlay"></div>
                    <div className="modal">
                        
                        {  modalOpen && openCreateBox ? 
                        <AdminCreateBox closeModal={closeModal}/> 
                        :
                        <AdminEditBox closeModal={closeModal} boxId={selectedBox}/>
                        }
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