import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <Carousel className="img_section">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Hero_Flower_Desk_17apr23.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Desk-Hero-Banner_mothers-Day_29apr.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Desk-Hero-Banner_Cake-Bestsellers_24apr.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;