import Card from 'react-bootstrap/Card';
import { GrDiamond } from 'react-icons/gr'
import {BsCheck, BsExclamationLg} from 'react-icons/bs';
import {AiFillFire} from 'react-icons/ai'
import './Pricing.css';
import { Button, Col, Container, Row } from 'react-bootstrap';



function Pricing() {
  return (
    <div className='pricing-section'>
        <Container>
            <div>
                <h3 className='pricing-title-h3'>Pricing</h3>
            </div>
            <div className='pricing-card-parent'>
                <div className='pricing-hotsale-tag'>
                    <div>
                        <p className='pricing-hotsale-tag-p'>HOT SALE</p>
                    </div>
                    <div>
                        <AiFillFire className='pricing-hotsale-tag-fire-icon' size={25}/>
                    </div>
                </div>
                <Card className='pricing-card'>
                    <div className='pricing-diamond-icon'>
                        <GrDiamond size={40}/>
                    </div>
                    <Card.Body>
                        <Card.Title>
                            <div className='pricing-card-title'>
                                <h3 className='pricing-card-title-h3'>EARLY BIRD</h3>
                                <BsExclamationLg className='exclamation' size={27}/>
                                <BsExclamationLg className='exclamation' size={27}/>
                                <BsExclamationLg className='exclamation' size={27}/>
                            </div>
                        </Card.Title>
                        <Card.Subtitle className="mb-5 text-muted"><s>NORMAL PRICE IDR.3.500.000,00</s></Card.Subtitle>
                        <Card.Text>
                            <Row className='pricing-row'>
                                <Col>
                                    <div className='pricing-desc'>
                                        <div className='pricing-desc-icon'>
                                            <BsCheck size={24} className='pricing-desc-icon-check'/>
                                        </div>
                                        <div>
                                            <p>PRICE ACTION</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='pricing-desc'>
                                        <div className='pricing-desc-icon'>
                                            <BsCheck size={24} className='pricing-desc-icon-check'/>
                                        </div>
                                        <div>
                                            <p>SMART MONEY CONCEPT</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='pricing-desc'>
                                        <div className='pricing-desc-icon'>
                                            <BsCheck size={24} className='pricing-desc-icon-check'/>
                                        </div>
                                        <div>
                                            <p>LIFETIME SIGNAL</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Col>
                                <div className='pricing-desc'>
                                    <div className='pricing-desc-icon'>
                                        <BsCheck size={24} className='pricing-desc-icon-check'/>
                                    </div>
                                    <div>
                                        <p>FUNDAMENTAL ANALYSIS</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='pricing-desc'>
                                    <div className='pricing-desc-icon'>
                                        <BsCheck size={24} className='pricing-desc-icon-check'/>
                                    </div>
                                    <div>
                                        <p>MONEY MANAGEMENT</p>
                                    </div>
                                </div>
                            </Col>
                        </Card.Text>
                    </Card.Body>
                    <Button variant='primary' size='lg' className='pricing-button'>IDR.1.899K</Button>
                </Card>
            </div>
            </Container>
            
        </div>
    
  );
}

export default Pricing;