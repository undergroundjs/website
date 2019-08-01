import React from 'react';
import { Styled, css } from 'theme-ui';
import { Container } from 'theme-ui/layout';
import Layout from 'gatsby-theme-conference/src/components/layout';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const {
    dataYaml: { venue },
  } = useStaticQuery(
    graphql`
      {
        dataYaml {
          venue {
            title
            address
            mapURL
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Container>
        <Styled.h1>Frequently Asked Questions</Styled.h1>
        <Styled.h4
          css={css({
            mb: 5,
          })}
        >
          (Well, more like questions we think you have)
        </Styled.h4>
        <Styled.h3>Is there a Code of Conduct (CoC)?</Styled.h3>
        <Styled.p>
          Yes, by attending you are agreeing to the CoC. Details on the CoC can
          be found <Styled.a href="/code-of-conduct">here</Styled.a>.
        </Styled.p>
        <Styled.h3>Who do I contact for CoC violations?</Styled.h3>
        <Styled.p>
          We take these incidents very seriously, contact us via{' '}
          <Styled.a href="mailto:incidents@undergroundjs.com">email</Styled.a>{' '}
          or by phone <Styled.a href="tel:901-295-8011">901-295-8011</Styled.a>.
        </Styled.p>
        <Styled.h3>Where is the event?</Styled.h3>
        <Styled.p>
          UndergroundJS will be help at{' '}
          <Styled.a href={venue.mapURL}>
            {venue.title}, {venue.address}
          </Styled.a>
          . We will be held in the main venue space.
        </Styled.p>
        <Styled.h3>Where do I park?</Styled.h3>
        <Styled.p>
          Parking will be available on a first come first served basis on the
          backside of {venue.title}, near the basketball courts. This area will
          be roped off to help direct you all there.
        </Styled.p>
        <Styled.h3>Where do I enter the event?</Styled.h3>
        <Styled.p>
          Coming from the parking lot, there is a set of double doors on ground
          level to the left of the staircase.
        </Styled.p>

        <Styled.h3>Will food/drinks be served?</Styled.h3>
        <Styled.p>
          For breakfast, we will be serving coffee and light pastries (muffins,
          danishes, and granola & fruit bars).
        </Styled.p>
        <Styled.p>
          For lunch, Sifted will be catering Crunchy Tacos.{' '}
          <Styled.a href="https://www.sifted.co/menus/nashville-menu">
            Full menu here
          </Styled.a>
          .
        </Styled.p>
        <Styled.p>
          Snacks available throughout the day: peanuts, chips, granola & fruit
          bars, fruit snacks, crackers, and ice pops! Along with water to stay
          hydrated!
        </Styled.p>
        <Styled.p>
          Rocketown also, has a cafe that will be open to purchase additional
          refreshments.
        </Styled.p>
        <Styled.h3>What about dietary options?</Styled.h3>
        <Styled.p>
          During ticket purchase process, you can let us know any restrictions
          you have. We will forward that information to Sifted to ensure it is
          accounted.{' '}
        </Styled.p>
        <Styled.h3>Will talks be recorded?</Styled.h3>
        <Styled.p>
          No, unfortunately. It was not within our budget to do it for this
          year's event.
        </Styled.p>
        <Styled.h3>When does registration open?</Styled.h3>
        <Styled.p>Registration begins at 8am.</Styled.p>
        <Styled.h3>What do I need at registration?</Styled.h3>
        <Styled.p>
          Please have you ticket ready, for a smooth check in process.
        </Styled.p>

        <Styled.h3>Have a question you don't see answered?</Styled.h3>
        <Styled.p>
          <Styled.a href="mailto:chair@undergroundjs.com?subject=FAQ">
            Contact us
          </Styled.a>{' '}
          or{' '}
          <Styled.a href="https://github.com/undergroundjs/website">
            submit a pull request
          </Styled.a>
          .
        </Styled.p>
      </Container>
    </Layout>
  );
};
