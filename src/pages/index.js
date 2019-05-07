import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ExternalLink from '../components/ExternalLink';
import { Link } from 'gatsby';
import { theme, container } from '../lib/styles';
import { SponsorIcon, TwitterIcon, EmailIcon } from '../icons';
import { darken } from 'polished';

export default function HomePage() {
  const styles = {
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    card: {
      margin: '2rem',
      boxShadow: '4px 4px 8px rgba(0,0,0,0.2)',
      minWidth: '300px',
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '250px',
      img: {
        width: '40%',
      },
    },
    cardBody: {
      padding: '2rem',
    },
    ticketsCTA: {
      fontSize: '3rem',
      padding: '1rem',
      margin: '.5rem',
      color: 'white !important',
      backgroundColor: theme.colors.orange,
      textDecoration: 'none !important',
      '&:hover, &:active': {
        backgroundColor: darken('0.01', theme.colors.orange),
        textShadow: '4px 4px 8px rgba(0,0,0,0.1)',
      },
    },
  };

  return (
    <Layout>
      <SEO title="Home" />
      <main css={[container, { fontSize: '1.4rem' }]}>
        <h3 css={{ margin: '2rem 0', textAlign: 'center' }}>
          Date: August 2nd, 2019
        </h3>

        <h3 css={{ margin: '2rem 0', textAlign: 'center' }}>
          Location: Nashville, TN
        </h3>
        <div css={{ display: 'flex', justifyContent: 'center' }}>
          <ExternalLink
            to="https://www.eventbrite.com/e/undergroundjs-tickets-61081666910?aff=website"
            css={styles.ticketsCTA}
          >
            Buy Tickets Now!
          </ExternalLink>
        </div>
        <p>
          Underground JS is a community-driven single day conference in
          Nashville focused on JavaScript and the its ecosystem, but more
          importantly our Nashville community.
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

        <div css={styles.cardContainer}>
          <div css={styles.card}>
            <div
              css={[
                styles.cardHeader,
                { backgroundColor: theme.colors.yellow },
              ]}
            >
              <img src={EmailIcon} alt="" />
            </div>
            <div css={styles.cardBody}>
              <h3>Join our newsletter</h3>
              <ExternalLink
                to="https://mailchi.mp/965a090c40cc/undergroundjs"
                css={styles.cardCTA}
              >
                Subscribe
              </ExternalLink>
            </div>
          </div>
          <div css={styles.card}>
            <div
              css={[
                styles.cardHeader,
                { backgroundColor: theme.colors.orange },
              ]}
            >
              <img src={SponsorIcon} alt="" />
            </div>
            <div css={styles.cardBody}>
              <h3>Become a Sponsor?</h3>
              <Link to="/become-a-sponsor" css={styles.cardCTA}>
                Prospectus
              </Link>
            </div>
          </div>
          <div css={styles.card}>
            <div
              css={[
                styles.cardHeader,
                { backgroundColor: theme.colors.burntOrange },
              ]}
            >
              <img src={TwitterIcon} alt="" />
            </div>
            <div css={styles.cardBody}>
              <h3>Twitter</h3>
              <ExternalLink
                to="https://twitter.com/undergroundjs"
                css={styles.cardCTA}
              >
                Follow
              </ExternalLink>
            </div>
          </div>
        </div>

        <p>
          Underground JS is dedicated to a harassment-free conference experience
          for everyone.
          <br />
          <Link to="/conduct">Code of Conduct</Link>
        </p>
      </main>
    </Layout>
  );
}
