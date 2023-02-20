import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FlLogo from '../assets/friendline-logo.png'
import TeleLogo from '../assets/6359f581e448c9afff95ada9_Telegram_logo.svg-p-500.webp'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar-section'>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} sticky="top" id='FL'>
          <Container>
            <Navbar.Brand href="/">
                <img src={FlLogo} alt='navbar' className='navbar-image-img'>
                </img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="navbar-offcan"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  FriendLine.Co
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='navbar-offcan-body'>
                <Nav className="justify-content-end flex-grow-1 align-items-center navbar-item-isi">
                    <div className='navbar-button-join-tele-bg'>
                        <Button className='navbar-button' variant='outline-dark' href='https://t.me/friendlineco'>
                            <div className='navbar-join-tele'>
                                <div className='navbar-telgram-icon'>
                                    <img src={TeleLogo} alt='navbar-telegram-icon' className='navbar-telegram-icon-img'></img>
                                </div>
                                <div>
                                  Join The Free Telegram
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div className='navbar-button-joinfl'>
                        <Button href='#pricing' className='me-3' variant='dark'>
                            <div className='navbar-applynow'>
                                <div>
                                  Join Friendline Project
                                </div>
                            </div>
                        </Button>
                    </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavBar;