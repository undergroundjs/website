import React from 'react';
import { Link, graphql } from 'gatsby';
import { Card } from 'react-bootstrap'
import { Twitter, GitHub } from 'react-feather';
import Layout from '../components/layout'

import NSSLogo from '../svgs/nss-logo.svg';
import XOILogo from '../svgs/xoi-logo.svg';
import VacoLogo from '../svgs/vaco-logo.svg';
import SmileLogo from '../svgs/smiledirectclub-logo.svg';
import GatsbyLogo from '../svgs/gatsby-logo.svg';
import CypressLogo from '../svgs/cypress-logo2.svg';

export default (props) => {
  return (
    <Layout>
      <div style={{ textAlign: 'center' }}>
        <h1>2019 Archive</h1>
        <p>
          UndergroundJS 2019 took place at{' '}
          <a href="https://www.rocketown.com/" component={Link} to="https://www.rocketown.com/">Rocketown</a> on
          Friday, August 2nd.
        </p>
      </div>
      <div className="sponsors col-lg-12">
        <h2 style={{ textAlign: 'center' }}>Sponsors</h2> 
        <div className="row">
          <a className="col-md-4" href="http://nashvillesoftwareschool.com/">
            <NSSLogo width="350" height="200"/>
          </a>
          <a className="col-md-4" href="http://www.xoi.io/">
            <XOILogo width="350" height="200"/>
          </a>
          <a className="col-md-4" href="https://www.vaco.com/">
            <VacoLogo width="350" height="200"/>
          </a>
          <a className="col-md-4" href="https://smiledirectclub.com/">
            <SmileLogo width="350" height="200"/>
          </a>
          <a className="col-md-4" href="https://www.gatsbyjs.org/">
            <GatsbyLogo width="350" height="200"/>
          </a>
          <a className="col-md-4" href="https://www.cypress.io/">
            <CypressLogo width="350" height="200"/>
          </a>
        </div>
      </div>
      <div className="speakers col-lg-12">
        <h2 style={{ textAlign: 'center' }}>Speakers</h2> 
        <div className="row">
          <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="bd-placeholder-img" variant="top" src="https://via.placeholder.com/400x400.jpeg/55595c/ffffff/?text=Thumbnail" />
            <Card.Body>
              <Card.Title>Stephanie Winn</Card.Title>
              <Card.Text>
                Building a strong developer community for the future
              </Card.Text>
              <div className="row">
                <a style={{color:"black"}} className="col-sm-2" href="https://twitter.com/steph_happens">
                  <Twitter />
                </a>
                <a style={{color:"black"}} className="col-sm-2" href="https://github.com/stephhappens">
                  <GitHub />
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="bd-placeholder-img" variant="top" src="https://pbs.twimg.com/media/D7WdzuUWsAAFbvq?format=jpg&name=small" />
            <Card.Body>
              <Card.Title>Matt Trask</Card.Title>
              <Card.Text>
                Mental Health: you and me!
              </Card.Text>
              <div className="row">
                <a style={{color:"black"}} className="col-sm-2" href="https://twitter.com/matthewtrask">
                  <Twitter />
                </a>
                <a style={{color:"black"}}className="col-sm-2" href="https://github.com/matthewtrask">
                  <GitHub />
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="col-lg-4">
            <Card.Img className="bd-placeholder-img" variant="top" src="https://pbs.twimg.com/profile_images/1010566462782701568/6sDbHiB0_400x400.jpg" />
            <Card.Body>
              <Card.Title>Kara Luton</Card.Title>
              <Card.Text>
                Writing Newbie Friendly Code In Production
              </Card.Text>
              <div className="row">
                <a style={{color:"black"}} className="col-sm-2" href="https://twitter.com/jeromehardaway">
                  <Twitter/>
                </a>
                <a style={{color:"black"}} className="col-sm-2" href="https://github.com/jeromehardaway">
                  <GitHub/>
                </a>
              </div>
            </Card.Body>
          </Card>
        </div>
        <h4 className="spakersCTA" style={{ textAlign: 'center' }}>BE ONE OF OUR SPEAKERS</h4>
      </div>
    </Layout>
  );
};

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "one.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "two.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "three.jpg" }) {
      ...fluidImage
    }
  }
`