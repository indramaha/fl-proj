import {Container, Row, Col, Button} from 'react-bootstrap';
import jadiSatu from '../assets/jadi 1.png'
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
                            <p className='hero-col-1-row-co-2-p'>Komunitas trading fun & friendly di Indonesia, yang menyediakan jasa konsultasi trading forex dan akan membimbing Anda untuk bisa trading dengan profit konsisten.</p>
                        </Col>
                        <Col className='hero-col-1-row-co-3 mt-4'>
                            <Button href='#pricing' variant='dark' className='hero-button'>DAFTAR SEKARANG</Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className='hero-col-2'>
                    <div>
                        <img src={jadiSatu} alt='hero-image' className='hero-image-img'>
                        </img>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    
  );
}

export default Hero;