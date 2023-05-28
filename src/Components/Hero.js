import { Container, Row, Col, Button } from "react-bootstrap";
import jadiSatu from "../assets/jadi 1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

AOS.init();
function Hero() {
	return (
		<div className="hero-section">
			<Container>
				<Row className="hero-row">
					<Col
						lg={5}
						className="hero-col-1"
						data-aos="fade-right"
						data-aos-anchor="#example-anchor"
						data-aos-offset="800"
						data-aos-duration="1000"
					>
						<Row className="hero-col-1-row">
							<Col className="hero-col-1-row-col-1">
								<h3 className="hero-col-1-row-col-1-h3">
									<b>
										Kami Wujudkan Apa yang Jadi Masalah di Dalam Trading Anda!
									</b>
								</h3>
							</Col>
							<Col className="hero-col-1-row-co-2">
								<p className="hero-col-1-row-co-2-p">
									Komunitas trading fun & friendly di Indonesia, yang
									menyediakan jasa konsultasi trading forex dan akan membimbing
									Anda untuk bisa trading dengan profit konsisten.
								</p>
							</Col>
							<Col className="hero-col-1-row-co-3 mt-4">
								<Button href="#pricing" variant="dark" className="hero-button">
									DAFTAR SEKARANG
								</Button>
							</Col>
						</Row>
					</Col>
					<Col lg={6} className="hero-col-2">
						<div
							data-aos="fade-left"
							data-aos-anchor="#example-anchor"
							data-aos-offset="200"
							data-aos-duration="1000"
						>
							<img src={jadiSatu} alt="hero" className="hero-image-img"></img>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Hero;
