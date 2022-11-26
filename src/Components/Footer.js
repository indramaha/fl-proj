import { Col, Container, Row } from 'react-bootstrap'
import {FiInstagram, FiYoutube} from 'react-icons/fi'
import {FaTiktok} from 'react-icons/fa'
import {TbBrandTelegram} from 'react-icons/tb'
import FlLogo from '../assets/friendline-logo.png'
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer-section'>
            <Container>
                <div>
                    <Row>
                        <Col lg={3} className='footer-col-1'>
                            <div>
                                <div className='footer-charting'>
                                    <h6 className='footer-charting-h6'>Charting Tool</h6>
                                </div>
                                <div>
                                    <a href='https://www.tradingview.com/u/FriendlineCo/' className='footer-charting'>Trading View</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} className='footer-col-2'>
                            <div className='footer-broker'>
                                <h6 className='footer-broker-h6'>Broker</h6>
                            </div>
                            <div>
                                <div>
                                    <p className='footer-broker-xm'>XM IDN</p>
                                </div>
                                <div>
                                    <a href='https://one.exness-track.com/a/c_ikzka8mfh7' className='footer-broker-exness'>Exness IDN</a>
                                </div>
                            </div>
                            
                        </Col>
                        <Col lg={3} className='footer-col-3'>
                            <div className='footer-socmed'>
                                <h6 className='footer-socmed-h6'>Connect with us</h6>
                            </div>
                            <div className='footer-socmed-icons'>
                                <div className='footer-icons-bg'>
                                    <a href='https://www.instagram.com/friendline.co/'><FiInstagram size={20} className='footer-icons-icon'/></a>
                                </div>
                                <div className='footer-icons-bg'>
                                    <a href='https://www.tiktok.com/@friendlineco'><FaTiktok size={20} className='footer-icons-icon'/></a>
                                </div>
                                <div className='footer-icons-bg'>
                                    <a href='https://www.youtube.com/channel/UCx_iMOrtR-h_ptbTnYGpQ9w'><FiYoutube size={20} className='footer-icons-icon'/></a>
                                </div>
                                <div className='footer-icons-bg'>
                                    <a href='https://t.me/friendlineco'><TbBrandTelegram size={20} className='footer-icons-icon'/></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div>
                                <div className='footer-copyright'>
                                    <h6 className='footer-copyright-h6'>Copyright FriendlineCo 2022</h6>
                                </div>
                                <div className='footer-logo-image'>
                                    <img src={FlLogo} alt='logo-footer' className='footer-logo-image-img'/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Footer;