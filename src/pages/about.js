import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import { Card } from 'react-bootstrap'

export default () => {
  return (
    <Layout>
      <div>
        <h2>About</h2>
        <p>
          UndergroundJS was founded to highlight and level up our local
          community. By being community focused, our goal is to share different
          amazing projects, companies, and people in the Nashville community.
        </p>
        <p>
          Underground JS is a nonprofit event facilitated by TechFed Nashville,
          a Tennessee nonprofit organization whose mission is to support and
          grow the grassroots tech talent in Middle Tennessee through
          educational events and groups. TechFed provides financial stewardship,
          risk management and volunteer leadership development for
          Nashville-area technology events.
        </p>
        <h4>
          Join us as we celebrate our accomplishments and failures while
          inspiring and empowering our future.
        </h4>
        <a class="btn btn-primary" href="mailto:chair@undergroundjs.com?subject=About"  component={Link} to="mailto:chair@undergroundjs.com?subject=About">
          Contact Us
        </a>
        <h2>Organizers</h2>
        <div className="row">
          <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="bd-placeholder-img" variant="top" src="https://via.placeholder.com/400x400.jpeg/55595c/ffffff/?text=Thumbnail" />
            <Card.Body>
              <Card.Title>Speaker #1 Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="bd-placeholder-img" variant="top" src="https://via.placeholder.com/400x400.jpeg/55595c/ffffff/?text=Thumbnail" />
            <Card.Body>
              <Card.Title>Speaker #2 Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="bd-placeholder-img" variant="top" src="https://via.placeholder.com/400x400.jpeg/55595c/ffffff/?text=Thumbnail" />
            <Card.Body>
              <Card.Title>Speaker #3 Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Layout>
  );
};