import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css'

function NavBar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand}>
          <Container>
            <Navbar.Brand href="#">
                <img src="https://www.friendlineco.com/wp-content/uploads/2021/05/logo-Friendlineco.com-1.1.png" alt='image-navbar' className='navbar-image-img'>
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
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                    <div>
                        <Button className='me-3' variant='outline-dark'>
                            <div className='navbar-join-tele'>
                                <div className='navbar-telgram-icon'>
                                    <img src='https://uploads-ssl.webflow.com/6359a461a8f2266be08081ca/6359f581e448c9afff95ada9_Telegram_logo.svg-p-500.webp' alt='navbar-telegram-icon' className='navbar-telegram-icon-img'></img>
                                </div>
                                <div>
                                  Join The Free Telegram
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div>
                        <Button className='me-3' variant='dark'>
                            <div className='navbar-applynow'>
                                <div>
                                  Apply Now
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
    </>
  );
}

export default NavBar;