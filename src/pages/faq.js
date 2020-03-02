import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <div>
        <h1>Frequently Asked Questions</h1>
        <h4>
          (Well, more like questions we think you have)
        </h4>
        <h3>Is there a Code of Conduct (CoC)?</h3>
        <p>
          Yes, by attending you are agreeing to the CoC. Details on the CoC can
          be found <a href="/code-of-conduct" component={Link} to="/code-of-conduct">here</ a>.
        </p>
        <h3>Who do I contact for CoC violations?</ h3>
        <p>
          We take these incidents very seriously, contact us via{' '}
          <a href="mailto:incidents@undergroundjs.com" component={Link} to="/mailto:incidents@undergroundjs.com">email</a>{' '}
          or by phone <a href="tel:901-295-8011" component={Link} to="tel:901-295-8011">901-295-8011</ a>.
        </p>
        <h3>Where is the event?</h3>
        <p>
          UndergroundJS will be help at{' '}
          <a href="/" component={Link} to="/">
            venue title, venue address
          </a>
          . We will be held in the main venue space.
        </p>
        <h3>Where do I park?</h3>
        <p>
          Parking will be available on a first come first served basis on the
          backside of (venue title), near the basketball courts. This area will
          be roped off to help direct you all there.
        </p>
        <h3>Can I buy tickets at the door?</h3>
        <p>Yes, we will be selling tickets at the door.</p>
        <h3>Where do I enter the event?</h3>
        <p>
          Coming from the parking lot, there is a set of double doors on ground
          level to the left of the staircase.
        </p>

        <h3>Will food/drinks be served?</h3>
        <p>
          For breakfast, we will be serving coffee and light pastries (muffins,
          danishes, and granola & fruit bars).
        </p>
        <p>
          For lunch, Sifted will be catering Crunchy Tacos.{' '}
          <a href="https://www.sifted.co/menus/nashville-menu" component={Link} to="https://www.sifted.co/menus/nashville-menu">
            Full menu here
          </a>
          .
        </p>
        <p>
          Snacks available throughout the day: peanuts, chips, granola & fruit
          bars, fruit snacks, crackers, and ice pops! Along with water to stay
          hydrated!
        </p>
        <p>
          Rocketown also, has a cafe that will be open to purchase additional
          refreshments.
        </p>
        <h3>What about dietary options?</h3>
        <p>
          During ticket purchase process, you can let us know any restrictions
          you have. We will forward that information to Sifted to ensure it is
          accounted.{' '}
        </p>
        <h3>Will talks be recorded?</h3>
        <p>
          No, unfortunately. It was not within our budget to do it for this
          year's event.
        </p>
        <h3>When does registration open?</h3>
        <p>Registration begins at 8am.</p>
        <h3>What do I need at registration?</h3>
        <p>
          Please have you ticket ready, for a smooth check in process.
        </p>
        <h3>Will there be Wifi?</h3>
        <p>Yes, details will be provided at the event.</p>

        <h3>Have a question you don't see answered?</h3>
        <p>
          <a href="mailto:chair@undergroundjs.com?subject=FAQ" component={Link} to="mailto:chair@undergroundjs.com?subject=FAQ">
            Contact us
          </a>{' '}
          or{' '}
          <a href="https://github.com/undergroundjs/website" component={Link} to="https://github.com/undergroundjs/website">
            submit a pull request
          </a>
          .
        </p>
      </div>
    </Layout>
  );
};