import React from 'react';
import { Link } from 'gatsby';
import { Card, Carousel, Button } from 'react-bootstrap'
import Layout from '../components/layout'
import '../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  return (
    <Layout>
      <div class="banner">
          <div class="spacer">
          </div>
          <h1 class="title">
              JavaScript conference hosted in Nashville.
          </h1>
          <div class="cta">
              <a href="https://sessionize.com/ugjs-2020" component={Link} to="https://sessionize.com/ugjs-2020">
                  CFP Now Open
              </a>
              <a href="/code-of-conduct" component={Link} to="/code-of-conduct">
                  Buy Tickets
              </a>
          </div>
      </div>
      <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400.jpeg/?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400.jpeg/?text=Second slide&bg=373940"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400.jpeg/?text=Third slide&bg=373940"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200.jpeg/55595c/ffffff/?text=Thumbnail" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
    </Layout>
  );
};