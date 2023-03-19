import { useState } from 'react';
import Button from 'react-bootstrap/Button';
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
            <a href="https://clicks.pipaffiliates.com/c?m=117459&c=570284" referrerPolicy="no-referrer-when-downgrade">
                    <img src="https://ads.pipaffiliates.com/i/117459?c=570284" width="120" height="600" referrerPolicy="no-referrer-when-downgrade" alt='ads'/>
            </a>
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