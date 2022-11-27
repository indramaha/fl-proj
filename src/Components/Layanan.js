import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Buku from '../assets/Buku.png';
import Kartu from '../assets/Card.png';
import Laptop from '../assets/Laptop.png'
import "./Layanan.css"


function Layanan() {
  return (
    <div className='layanan-section'>
            <Container>
                <Row className='layanan-row'>
                    <Col lg='4' className='layanan-row-col-1'>
                            <div>
                                <h3 className='layanan-row-col-1-h31'>OUR SERVICES</h3>
                            </div>
                            <div>
                                <h3 className='layanan-row-col-1-h32'>3 IN 1 MENTORSHIP</h3>
                            </div>
                    </Col>
                    <Col lg='9' className='layanan-row-col-2'>
                        <Row className='layanan-row-col-2-row'>
                            <Col className='layanan-row-col-2-row-col'>
                                <div className='layanan-card'>
                                    <Card.Body>
                                        <Card.Title className='layanan-card-title'>LEARN</Card.Title>
                                        <img src={Buku} alt='buku-card' className='layanan-card-title-gambar'/>
                                        <hr />
                                        <Card.Text>
                                            <ul>
                                                <li className='layanan-list'>BELAJAR TENTANG SUDUT PANDANG RETAIL TERHADAP MARKET (PRICE ACTION)</li>
                                                <li className='layanan-list'>BELAJAR TENTANG SUDUT PANDANG MARKET MAKER TERHADAP MARKET (SMART MONEY CONCEPT)</li>
                                                <li className='layanan-list'>BELAJAR TENTANG MENGGUNAKAN MONEY MANAGEMENT YANG BENAR</li>
                                                <li className='layanan-list'>BELAJAR TENTANG RISK TO REWARDS</li>
                                                <li className='layanan-list'>BELAJAR TENTANG FUNDAMENTAL</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Col>
                            <Col className='layanan-row-col-2-row-col'>
                                <div className='layanan-card'>
                                    <Card.Body>
                                        <Card.Title className='layanan-card-title'>COMMUNITY</Card.Title>
                                        <img src={Laptop} alt='laptop-card' className='layanan-card-title-gambar' />
                                        <hr />
                                        <Card.Text className='layanan-card-text'>
                                            PENGALAMAN DI DALAM TRADING INDUSTRI SANGAT AMAT PENTING DAN ITU SANGAT MAHAL. DI DALAM KOMUNITAS YANG BAGUS KITA BISA SHARING PENGALAMAN YANG TIDAK ADA HARGANYA, BUKAN CUMA SHARING KITA BISA BELAJAR JUGA DI DALAM KOMUNITAS YANG SOLID YA FRIENDS!
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Col>
                            <Col className='layanan-row-col-2-row-col'>
                                <div className='layanan-card'>
                                    <Card.Body>
                                        <Card.Title className='layanan-card-title'>LIFETIME ACCES</Card.Title>
                                        <img src={Kartu} alt='kartu-card' className='layanan-card-title-gambar' />
                                        <hr />
                                        <Card.Text>
                                            <ul>
                                                <li className='layanan-list'>SIGNAL PENDING ORDER YANG KAMI BERIKAN BUAT KALIAN YANG NGGA BISA DI DEPAN MONITOR 24 JAM</li>
                                                <li className='layanan-list'>SIGNAL YANG MEMILIKI RISK TO REWARDS HINGGA 1 : 20 DAN BAHKAN LEBIH</li>
                                                <li className='layanan-list'>GAK CUMAN SIGNAL, KITA JUGA KASI FORECAST DAN MARKET REVIEW BERBASIS VIDEO SETIAP MINGGUNYA</li>
                                                <li className='layanan-list'>SIGNAL INI UNTUK LIFETIME (SELAMANYA) TIDAK ADA BIAYA SETIAP BULAN LAGI YA FRIENDS!</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    </div>
    
  );
}

export default Layanan;