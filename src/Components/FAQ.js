import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css'

function FAQ() {
  return (
    <div className='faq-section'>
        <Container>
            <Row className='faq-row'>
                <Col lg={5} className='faq-col-1' data-aos="fade-up-right" data-aos-duration="2000">
                    <div>
                        <h3 className='faq-col-1-h3'>Frequently Asked Question</h3>
                        <p className='faq-col-1-p'>Yang Biasanya Ditanyakan Tentang Friendline Project.</p>
                    </div>
                </Col>
                <Col lg={7} data-aos="fade-down-left" data-aos-duration="2000">
                    <div>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='faq-accord'>
                                <Accordion.Header><h6 className='faq-accord-header'>APA ITU FRIENDLINECO PROJECT ?</h6></Accordion.Header>
                                <Accordion.Body>
                                Friendlineco Project merupakan sebuah tempat belajar untuk trader pemula sampai expert , dan dilengkapi oleh komunitas yang sangat friendly & fun didalamnya .
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='faq-accord'>
                                <Accordion.Header><h6 className='faq-accord-header'>APA PLATFORM YANG DIGUNAKAN FRIENDLINECO PROJECT ?</h6></Accordion.Header>
                                <Accordion.Body>
                                Agar lebih terstruktur kita memilih platform "DISCORD" untuk menemani kalian dalam belajar & trading.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='faq-accord'>
                                <Accordion.Header><h6 className='faq-accord-header'>APA YANG MEMBUAT FRIENDLINECO PROJECT BERBEDA DENGAN YANG LAIN ?</h6></Accordion.Header>
                                <Accordion.Body>
                                ONCE TIME PAYMENT Temen2 tidak perlu membayar member bulanan , karena kita menggunakan sistem sekali bayar untuk selamanya.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='faq-accord'>
                                <Accordion.Header><h6 className='faq-accord-header'>BAGAIMANA CARA JOINNYA ?</h6></Accordion.Header>
                                <Accordion.Body>
                                Temen2 bisa click "APPLY NOW" atau "DAFTAR SEKARANG" dan ikuti langkah2 yang tersedia.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='faq-accord'>
                                <Accordion.Header><h6 className='faq-accord-header'>MATERI APA YANG DI BAHAS DI DALAM FRIENDLINECO PROJECT ?</h6></Accordion.Header>
                                <Accordion.Body>
                                SMART MONEY CONCEPT & PRICE ACTION, MONEY MANAGEMENT, FUNDAMENTAL.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
            </Row>
        </Container>
        {/* <img className='faq-banner' src={Banner} /> */}
    </div>
  );
}

export default FAQ;