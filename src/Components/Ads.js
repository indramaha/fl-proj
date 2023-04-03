import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {FiX} from "react-icons/fi"
import "./Ads.css"

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <FiX size={24} onClick={props.onHide}/>
            <button className='popup'>
                <a href="https://clicks.pipaffiliates.com/c?m=118092&c=570284" 
                    referrerpolicy="no-referrer-when-downgrade">
                    <img src="https://ads.pipaffiliates.com/i/118092?c=570284" width="728" height="90" referrerpolicy="no-referrer-when-downgrade" alt='ads'/>
                </a>
            </button>
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
            </Modal.Body> */}
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

const Ads = () => {
    const [modalShow, setModalShow] = useState(true);
    return (  
        <>
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button> */}

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
 
export default Ads;