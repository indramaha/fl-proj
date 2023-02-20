// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Container, Form } from 'react-bootstrap';
import {IoLogoWhatsapp} from 'react-icons/io'
import LogoBCA from '../assets/logo-bca-logo-only-light.svg'
import {FiCheck, FiX} from "react-icons/fi"
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './Form.css'


function ContactForm() {
    const [state, handleSubmit] = useForm("xzbwqrvd");
    const [show, setShow] = useState(false);
    const [cupon, setCupon] = useState("")
    const [isCuponTrue, setIsCuponTrue] = useState(false)
    // console.log(cupon);
    const [packages, setPackages] = useState("-")
    // console.log(packages)

    const handlePackage = (e) => {
        setPackages(e.target.value)
    }

    const handleCupon = (e) => {
        setCupon(e.target.value)
    }

    const handleCheckCopun = () => {
        if(cupon === "UNIONFX" && packages === "FL Project"){
            setIsCuponTrue(true)
            setShow(true)
        }
    }
    if (state.succeeded) {
        return(
            <div>
                <div className='form-success'>
                    <p className='form-success-p'>Selesaikan Pembayaran!</p>
                    <div className='form-norek'>
                        <div className='form-logo-bca-bg'>
                            <img src={LogoBCA} alt=""/>
                        </div>
                        <p className='form-success-p'>Nomor Rekening BCA:</p>
                        <p className='form-success-p'>7725238045</p>
                        <p className='form-success-p'>I Kadek Yudi Puspayoga</p>
                    </div>
                    <p className='form-success-p'>Kontak Admin Untuk Melakukan Konfirmasi</p>
                    <div className='form-success-button-bg'>
                        <Button className='form-success-button' href='https://api.whatsapp.com/send/?phone=6282147054454&text&type=phone_number&app_absent=0'><IoLogoWhatsapp /> Admin</Button>
                    </div>
                </div>
                {/* <div className='detail-order-bg'>
                    <div>
                        <div>
                            <p>Package Name</p>
                            </div>
                                <div>
                            <p>{packages}</p>
                        </div>
                    </div>
                    <div className='detail-order-accord'>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className='detail-order-total-header'>
                                        <div>
                                            <p>Total</p>
                                        </div>
                                        <div>
                                            {(() => {
                                                if(packages === "FL Project"){
                                                    return(
                                                        <p>Rp 3.500.000</p>
                                                    )
                                                } else if(packages === "FL Pro"){
                                                    return(
                                                        <p>Rp 249.000</p>
                                                    )
                                                } else if(packages === "one on one"){
                                                    return(
                                                        <p>Rp. 7.000.000</p>
                                                    )
                                                } else {
                                                    return (
                                                        <p>0</p>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                        {(() => {
                                            if(packages === "FL Project"){
                                                return(
                                                    <div>
                                                        <div>
                                                            <div>
                                                                <p>Price</p>
                                                            </div>
                                                            <div className='detail-order-price-bg'>
                                                                <div>
                                                                    <ul>
                                                                        <li>FL Project - 3500k</li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <p>Rp 3.500.000</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <p>Facility</p>
                                                            </div>
                                                            <div>
                                                                <div className='detail-order-facility-bg'>
                                                                    <div>
                                                                        <ul>
                                                                            <li>Lifetime Access</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div>
                                                                        <FiCheck />
                                                                    </div>
                                                                </div>
                                                                <div className='detail-order-facility-bg'>
                                                                    <div>
                                                                        <ul>
                                                                            <li>Premium Group</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div>
                                                                        <FiCheck />
                                                                    </div>
                                                                </div>
                                                                <div className='detail-order-facility-bg'>
                                                                    <div>
                                                                        <ul>
                                                                            <li>Premium Signal</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div>
                                                                        <FiCheck />
                                                                    </div>
                                                                </div>
                                                                <div className='detail-order-facility-bg'>
                                                                    <div>
                                                                        <ul>
                                                                            <li>coaching & mentoring</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div>
                                                                        <FiCheck />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {(() => {
                                                                if(isCuponTrue === false){
                                                                    return(
                                                                        <div>
                                                                            <div className='detail-order-nocupon'>
                                                                                <div>
                                                                                    <p>Discount</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p>0</p>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                            <div className='detail-order-nocupon-total mb-3'>
                                                                                <div>
                                                                                    <p>Total</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p>Rp 3.500.000</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                } else if(isCuponTrue === true && cupon === "UNIONFX"){
                                                                    return(
                                                                        <div>
                                                                            <div className='detail-order-with-cupon'>
                                                                                <div>
                                                                                    <p>Discount 30%</p>
                                                                                </div>
                                                                                <div className='detail-order-with-cupon-price'>
                                                                                    <p>- Rp 1.050.000</p>
                                                                                </div>
                                                                            </div>
                                                                            <hr/>
                                                                            <div className='detail-order-with-cupon-total mb-3'>
                                                                                <div>
                                                                                    <p>Total</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p>Rp 2.450.000</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            })()}
                                                        </div>
                                                    </div>
                                                )
                                            } else if(packages === "FL Pro"){
                                                return(
                                                    <div>
                                                        
                                                    </div>
                                                )
                                            }
                                        })()}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div> */}
            </div>
            
        );
    }
    return (
        <div className='form-section' id='form'>
            <Container fluid="lg" >
                <ToastContainer position='top-center'>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} bg="warning" autohide>
                        <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Cupon Added</strong>
                        <small className="text-muted">just now</small>
                        </Toast.Header>
                        <Toast.Body>congrats... Discount 30%</Toast.Body>
                    </Toast>
                </ToastContainer>
                <div className='form-background'>
                    <div className='form-form-bg'>
                        <div className='form-title'>
                            <h3 className='form-title-h3'>Registration Form</h3>
                        </div>
                        <Form onSubmit={handleSubmit} className='form-form'>
                            <Form.Group className="mb-3">
                                <Form.Label >Full Name</Form.Label>
                                <Form.Control type='text' name="full-name" placeholder="Your Name"  required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label >Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" required/>
                                <Form.Text className="text-muted text-muted-form form-muted-text">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                            <Form.Group className="mb-3">
                                <Form.Label >City</Form.Label>
                                <Form.Control type='text' name="kota-asal" placeholder='Jakarta'  required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label >Phone Number (Whatsapp)</Form.Label>
                                <Form.Control type='text' name="phone-number" placeholder='+62'  required/>
                            </Form.Group>
                            <Form.Group className="mb-5">
                                <Form.Label>Package Course</Form.Label>
                                <Form.Select name='Package-Course' onClick={handlePackage}>
                                    <option value="">Select Course</option>
                                    <option value="FL Pro">FL Pro - 249k</option>
                                    <option value="FL Project">FL Project - 3500k</option>
                                    <option value="1 on 1 Course">1 on 1 Course - 7000k</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-5 form-cupon">
                                <Form.Label >Code Cupon</Form.Label>
                                <Form.Control type='text' name="Cupon" placeholder='optional' defaultValue={cupon}/>
                            </Form.Group>
                            <Button className='form-button-submit' type="submit" disabled={state.submitting}>
                                Apply Now!
                            </Button>
                        </Form>
                    </div>
                    <div className='detail-order-bg'>
                        <div>
                            <div>
                                <div className='detail-order-title'>
                                    <p>Package Name</p>
                                </div>
                                <div className='detail-order-title-name'>
                                    <p>{packages}</p>
                                </div>
                            </div>
                            <div className='detail-order-accord'>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div className='detail-order-total-header'>
                                                <div className=''>
                                                    <p>Total</p>
                                                </div>
                                                <div>
                                                    {(() => {
                                                        if(packages === "FL Project"){
                                                            return(
                                                                <p>Rp 3.500.000</p>
                                                            )
                                                        } else if(packages === "FL Pro"){
                                                            return(
                                                                <p>Rp 249.000</p>
                                                            )
                                                        } else if(packages === "1 on 1 Course"){
                                                            return(
                                                                <p>Rp 7.000.000</p>
                                                            )
                                                        } else {
                                                            return (
                                                                <p>-</p>
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div>
                                                {(() => {
                                                    if(packages === "FL Project"){
                                                        return(
                                                            <div>
                                                                <div>
                                                                    <div className='detail-order-body-title'>
                                                                        <p>Price</p>
                                                                    </div>
                                                                    <div className='detail-order-price-bg'>
                                                                        <div>
                                                                            <ul>
                                                                                <li>FL Project - 3500k</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p>Rp 3.500.000</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className='detail-order-body-title'>
                                                                        <p>Facility</p>
                                                                    </div>
                                                                    <div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>Lifetime Access</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiCheck />
                                                                            </div>
                                                                        </div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>Premium Group</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiCheck />
                                                                            </div>
                                                                        </div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>Premium Signal</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiCheck />
                                                                            </div>
                                                                        </div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>coaching & mentoring</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiCheck />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label className='code-cupon-title'>Code Cupon</Form.Label>
                                                                    <Form.Control type='text' name="Cupon" placeholder='optional' onChange={handleCupon}/>
                                                                </Form.Group>
                                                                <div className='mb-3'>
                                                                    <button onClick={handleCheckCopun}>Add Cupon</button>
                                                                </div>
                                                                <div>
                                                                    {(() => {
                                                                        if(isCuponTrue === false){
                                                                            return(
                                                                                <div>
                                                                                    <div className='detail-order-nocupon'>
                                                                                        <div className='detail-order-body-title'>
                                                                                            <p>Discount</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p>0</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className='detail-order-nocupon-total mb-3'>
                                                                                        <div>
                                                                                            <p>Total</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p>Rp 3.500.000</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            )
                                                                        } else if(isCuponTrue === true && cupon === "UNIONFX"){
                                                                            return(
                                                                                <div>
                                                                                    <div className='detail-order-with-cupon'>
                                                                                        <div>
                                                                                            <p>Discount 30%</p>
                                                                                        </div>
                                                                                        <div className='detail-order-with-cupon-price'>
                                                                                            <p>- Rp 1.050.000</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr/>
                                                                                    <div className='detail-order-with-cupon-total mb-3'>
                                                                                        <div>
                                                                                            <p>Total</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p>Rp 2.450.000</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            )
                                                                        }
                                                                    })()}
                                                                </div>
                                                            </div>
                                                        )
                                                    } else if(packages === "FL Pro"){
                                                        return(
                                                            <div>
                                                                <div>
                                                                    <div className='detail-order-body-title'>
                                                                        <p>Price</p>
                                                                    </div>
                                                                    <div className='detail-order-price-bg'>
                                                                        <div>
                                                                            <ul>
                                                                                <li>FL Pro - 249k</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p>Rp 249.000</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className='detail-order-body-title'>
                                                                        <p>Facility</p>
                                                                    </div>
                                                                    <div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>Lifetime Access</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiX />
                                                                            </div>
                                                                        </div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>Premium Group</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiX />
                                                                            </div>
                                                                        </div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>Premium Signal</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiCheck />
                                                                            </div>
                                                                        </div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>coaching & mentoring</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiX />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label className='code-cupon-title'>Code Cupon</Form.Label>
                                                                    <Form.Control type='text' name="Cupon" placeholder='optional' onChange={handleCupon}/>
                                                                </Form.Group>
                                                                <div className='mb-3'>
                                                                    <button onClick={handleCheckCopun}>Add Cupon</button>
                                                                </div>
                                                                <div>
                                                                    {(() => {
                                                                        if(isCuponTrue === false){
                                                                            return(
                                                                                <div>
                                                                                    <div className='detail-order-nocupon'>
                                                                                        <div className='detail-order-body-title'>
                                                                                            <p>Discount</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p>0</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className='detail-order-nocupon-total mb-3'>
                                                                                        <div>
                                                                                            <p>Total</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p>Rp 249.000</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            )
                                                                        } else if(isCuponTrue === true && cupon === "!UNIONFX"){
                                                                            return(
                                                                                <div>
                                                                                    <div className='detail-order-with-cupon'>
                                                                                        <div>
                                                                                            <p>Discount 30%</p>
                                                                                        </div>
                                                                                        <div className='detail-order-with-cupon-price'>
                                                                                            <p>- Rp 1.050.000</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr/>
                                                                                    <div className='detail-order-with-cupon-total mb-3'>
                                                                                        <div>
                                                                                            <p>Total</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p>Rp 2.450.000</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            )
                                                                        }
                                                                    })()}
                                                                </div>
                                                            </div>
                                                        )
                                                    } else if(packages === "1 on 1 Course"){
                                                        return(
                                                            <div>
                                                                <div>
                                                                    <div className='detail-order-body-title'>
                                                                        <p>Price</p>
                                                                    </div>
                                                                    <div className='detail-order-price-bg'>
                                                                        <div>
                                                                            <ul>
                                                                                <li>1 on 1 Course - 7000k</li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p>Rp 7.000.000</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className='detail-order-body-title'>
                                                                        <p>Facility</p>
                                                                    </div>
                                                                    <div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>Lifetime Access</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiCheck />
                                                                            </div>
                                                                        </div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>Premium Group</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiCheck />
                                                                            </div>
                                                                        </div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>Premium Signal</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiCheck />
                                                                            </div>
                                                                        </div>
                                                                        <div className='detail-order-facility-bg'>
                                                                            <div>
                                                                                <ul>
                                                                                    <li>coaching & mentoring</li>
                                                                                </ul>
                                                                            </div>
                                                                            <div>
                                                                                <FiCheck />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label className='code-cupon-title'>Code Cupon</Form.Label>
                                                                    <Form.Control type='text' name="Cupon" placeholder='optional' onChange={handleCupon}/>
                                                                </Form.Group>
                                                                <div className='mb-3'>
                                                                    <button onClick={handleCheckCopun}>Add Cupon</button>
                                                                </div>
                                                                <div>
                                                                    {(() => {
                                                                        if(isCuponTrue === false){
                                                                            return(
                                                                                <div>
                                                                                    <div className='detail-order-nocupon'>
                                                                                        <div className='detail-order-body-title'>
                                                                                            <p>Discount</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p>0</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr />
                                                                                    <div className='detail-order-nocupon-total mb-3'>
                                                                                        <div>
                                                                                            <p>Total</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p>Rp 7.000.000</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            )
                                                                        } else if(isCuponTrue === true && cupon === "!UNIONFX"){
                                                                            return(
                                                                                <div>
                                                                                    <div className='detail-order-with-cupon'>
                                                                                        <div>
                                                                                            <p>Discount 30%</p>
                                                                                        </div>
                                                                                        <div className='detail-order-with-cupon-price'>
                                                                                            <p>- Rp 1.050.000</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <hr/>
                                                                                    <div className='detail-order-with-cupon-total mb-3'>
                                                                                        <div>
                                                                                            <p>Total</p>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p>Rp 2.450.000</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                            )
                                                                        }
                                                                    })()}
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })()}
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ContactForm;
// function App() {
//   return (
//     <ContactForm />
//   );
// }
// export default App;
