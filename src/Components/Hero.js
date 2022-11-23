import {Container, Row, Col, Button} from 'react-bootstrap';
import './Hero.css'


function Hero() {
  return (
    <div className='hero-section'>
        <Container>
            <Row className='hero-row'>
                <Col lg={5} className='hero-col-1'>
                    <Row className='hero-col-1-row'>
                        <Col className='hero-col-1-row-col-1'>
                            <h3 className='hero-col-1-row-col-1-h3'><b>Kami Wujudkan Apa yang Jadi Masalah di Dalam Trading Anda!</b></h3>
                        </Col>
                        <Col className='hero-col-1-row-co-2'>
                            <p className='hero-col-1-row-co-2-p'>Komunitas trading terbesar di Indonesia, yang menyediakan jasa konsultasi trading forex dan akan membimbing Anda secara konkrit untuk bisa trading dengan profit konsisten.</p>
                        </Col>
                        <Col className='hero-col-1-row-co-3'>
                            <Button href='https://t.me/friendlineco' variant='dark' className='hero-button'>DAFTAR SEKARANG</Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className='hero-col-2'>
                    <div>
                        <img src='https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='hero-image' className='hero-image-img'>
                        </img>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    
  );
}

export default Hero;