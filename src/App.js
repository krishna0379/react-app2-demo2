import logo from "./logo.svg";
import "./App.css";
import { Carousel } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1 className="bg-primary text-light p-2 m-1 rounded">Carousel Demo</h1>
      <Carousel>
        {[1, 2, 3].map((item, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"https://picsum.photos/100" + index}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
