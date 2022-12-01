import Carousel from 'react-bootstrap/Carousel';


function Carousels({image, title, desc}) {
  return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
  );
}

export default Carousels;