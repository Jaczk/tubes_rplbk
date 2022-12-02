import { Col, Container, Image, Row } from "react-bootstrap";
import Carousels from "../components/carousel";
import Carousel from "react-bootstrap/Carousel";
import jisoo3 from "../img/jisoo3.jpg";
import jisoo from "../img/jisoo.jpg";
import jisoo2 from "../img/jisoo2.jpg";
import perfume1 from "../img/perfume2.jpg";
import perfume2 from "../img/perfume6.jpg";
import perfume3 from "../img/perfume5.png";
import "./style.css";
import Photo from "../components/photo"

export default function HomePage() {
  return (
    <div className="App">
      {/* <div className="abouts1"> */}
      <Container className="conCarous">
        <Carousel className="carous">
          <Carousel.Item>
            <img className="d-block w-100" src={jisoo3} alt="First slide" />
            <Carousel.Caption>
              <h3>Discover Our Products</h3>
              <p>Cologne, Fragrances, Perfumes, And Many More</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={jisoo} alt="Second slide" />

            <Carousel.Caption>
              <h3>Fragrance And Beauty</h3>
              <p>Our Best Products Just For You</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={jisoo2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Find Your Beauty</h3>
              <p>We Will Guide You to LearnMore About Yourself</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container className="prodYear">
          <p className="fs-3">Our Products Of The Year</p>
          <Row md={3}>
            <Photo
            image={perfume1}
            />
            <Photo
            image={perfume2}
            />
            <Photo
            image={perfume3}
            />
          </Row>
        </Container>
      </Container>
    </div>
    // </div>
  );
}
