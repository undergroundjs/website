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
      flexDirection: 'column',
      alignItems: 'center',
    },
    organizerImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginRight: '1rem',
      marginBottom: '.25rem'
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

  console.log(organizers);

  return (
    <Layout>
      <SEO title="About" />
      <main css={[container, { padding: '2rem 1rem', fontSize: '1.4rem' }]}>
        <h2>About</h2>
        <p>
          UndergroundJS was founded to highlight and level up our local
          community. By being community focused, our goal is to share different
          amazing projects, companies, and people in the Nashville community.
        </p>
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
