import { Col, Container, Row } from 'react-bootstrap'
import {FiInstagram, FiYoutube} from 'react-icons/fi'
import {FaTiktok} from 'react-icons/fa'
import {TbBrandTelegram} from 'react-icons/tb'
import FlLogo from '../assets/TRANSPARENT-05.png'
import XmIcon from '../assets/xm.png'
import ExnessIcon from '../assets/exness.png'
import TradingViewIcon from '../assets/tradinview.png'
import FooterBG from '../assets/wave.svg'
import './Footer.css'

const Footer = () => {
    return(
        <div>
            <div className='footer-section'>
                <Container>
                    <div>
                        <Row className='footer-row'>
                            {/* <Col lg={3} className='footer-col-1'>
                                <div>
                                    <div className='footer-charting'>
                                        <h6 className='footer-charting-h6'>Charting Tool</h6>
                                    </div>
                                    <div>
                                        <a href='https://www.tradingview.com/u/FriendlineCo/' className='footer-charting'>Trading View</a>
                                    </div>
                                </div>
                            </Col> */}
                            <Col lg={4} md={4} className='footer-col-1'>
                                <div className='footer-logo-image'>
                                    <img src={FlLogo} alt='logo-footer' className='footer-logo-image-img'/>
                                </div>
                            </Col>
                            <Col lg={3} md={4} className='footer-col-2'>
                                <div className='footer-links'>
                                    <h6 className='footer-links-h6'>Links</h6>
                                </div>
                                <Col>
                                    <div className='footer-links-col-baru'>
                                        <div className='footer-links-xm-bg'>
                                            <a href='' className='footer-links-xm'><img src={XmIcon} className='footer-links-xm-icon'/></a>
                                        </div>
                                        <div className='footer-links-exness-bg'>
                                            <a href='https://one.exness-track.com/a/c_ikzka8mfh7' className='footer-links-exness'><img src={ExnessIcon} className='footer-links-exness-icon'/></a>
                                        </div>
                                        <div className='footer-charting-bg'>
                                            <a href='https://www.tradingview.com/u/FriendlineCo/' className='footer-charting'><img src={TradingViewIcon} className='footer-charting-icon'/></a>
                                        </div>
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={3} md={4} className='footer-col-3'>
                                <div className='footer-socmed'>
                                    <h6 className='footer-socmed-h6'>Connect with us</h6>
                                </div>
                                <div className='footer-socmed-icons'>
                                    <div className='footer-icons-bg-instagram'>
                                        <a href='https://www.instagram.com/friendline.co/'><FiInstagram size={20} className='footer-icons-icon'/></a>
                                    </div>
                                    <div className='footer-icons-bg-tiktok'>
                                        <a href='https://www.tiktok.com/@friendlineco'><FaTiktok size={20} className='footer-icons-icon'/></a>
                                    </div>
                                    <div className='footer-icons-bg-youtube'>
                                        <a href='https://www.youtube.com/channel/UCx_iMOrtR-h_ptbTnYGpQ9w'><FiYoutube size={20} className='footer-icons-icon'/></a>
                                    </div>
                                    <div className='footer-icons-bg-telegram'>
                                        <a href='https://t.me/friendlineco'><TbBrandTelegram size={20} className='footer-icons-icon'/></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                
            </div>
            <div className='footer-section-bottom'>
                <Container>
                    <Row>
                        <Col className='footer-section-bottom-col'>
                            <p>Copyright© 2022 FriendlinCo</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer;