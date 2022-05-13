import { useState } from "react";
import BoxListItem from './BoxListItem'; 
import BoxDetail from './BoxDetail';
import CheckoutForm from './CheckoutForm';


function BoxesList({ boxInfo, setBoxesURL }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [currentBox, setCurrentBox] = useState(5765764);
    const [modalCheckout, setModalCheckout] = useState(false)

    function openModal(e, boxId) {
        setModalOpen(true)
        setCurrentBox(boxId)
    }
    
    function closeModal(){
        setModalOpen(false)
    }

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }

    function handleSortChange(e) {
        setBoxesURL(`/${e.target.value}`)
    }
    
    const filteredBoxes = boxInfo.filter((box) => {
        return box.title.toLowerCase().includes(searchTerm.toLowerCase()) || box.items.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    })

    const renderedBoxes = filteredBoxes.map((box) => {
        return <BoxListItem key={box.id} box={box} openModal={openModal}/>
    })
    
    return (
        <>
            <div className="boxes-search">
                <form>
                <label className="search-bar-label">Search by name or content: </label>
                    <input className="form-input"
                        name="box-search"
                        type="text"
                        placeholder="search..."
                        onChange={handleSearch}
                    />
                    <br></br>
                    <label className="search-bar-label">Sort Boxes by Price</label>
                    <select onChange={handleSortChange} className="form-input">
                        <option value="low-to-high">Low to High</option>
                        <option value="high-to-low">High to Low</option>
                    </select>
                </form>
            </div>
        <div className='flex'>
            {
                modalOpen && (
                    <>
                    <div className="overlay"></div>
                    <div className="modal">
                        {modalCheckout ? 
                            <CheckoutForm closeModal={closeModal} boxId={currentBox} setModalCheckout={setModalCheckout}/> :
                            <BoxDetail closeModal={closeModal} boxId={currentBox} setModalCheckout={setModalCheckout} /> 
                        }
                    </div>
                    </>
                )
            }
            {renderedBoxes}
        </div>
        </>
    )
}
export default BoxesList