import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { container, theme } from '../lib/styles';
import { useStaticQuery, graphql } from 'gatsby';

const OrganizerCard = ({ name, bio, image }) => {
  const styles = {
    organizerCard: {
      background: theme.colors.light,
      padding: '1.25rem',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: '.25rem',
    },
    organizerImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginRight: '1rem',
    },
    organizerName: { fontWeight: 'bold' },
    organizerBio: { fontSize: '1.2rem' },
  };

  return (
    <div css={styles.organizerCard}>
      <img src={image.src} css={styles.organizerImage} alt={image.alt} />
      <div>
        <span css={styles.organizerName}>{name}</span>
        <p css={styles.organizerBio}>{bio}</p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  const styles = {
    organizerList: {
      margin: '2rem 0',
      display: 'flex',
      flex: '1 1 0',
      flexDirection: 'row',
    },
    contactButton: {
      fontSize: '1.2rem',
      padding: '.5rem',
      color: '#111 !important',
      backgroundColor: theme.colors.orange,
      textDecoration: 'none !important',
    },
  };

  const {
    allOrganizersJson: { nodes: organizers },
  } = useStaticQuery(graphql`
    query OrganizerQuery {
      allOrganizersJson {
        nodes {
          id
          name
          bio
          image {
            src
            alt
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="About" />
      <main css={[container, { padding: '2rem 0', fontSize: '1.4rem' }]}>
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
        <div css={{ textAlign: 'center', margin: '1rem' }}>
          <a href="mailto:chair@undergroundjs.com" css={styles.contactButton}>
            Contact Us
          </a>
        </div>
        <h2>Organizers</h2>
        <div css={styles.organizerList}>
          {organizers.map((organizer, i) => (
            <OrganizerCard key={i} {...organizer} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
