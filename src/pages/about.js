import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { container, theme } from '../lib/styles';

export default function AboutPage(props) {
  const styles = {
    organizerList: {
      margin: '2rem 1rem',
      display: 'flex',
      flex: '1 1 0',
      flexDirection: 'row',
    },
    organizerCard: {
      background: theme.colors.light,
      padding: '1.25rem',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
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
    <Layout>
      <SEO title="About" />
      <main css={[container, { padding: '2rem 0', fontSize: '1.4rem' }]}>
        <h2>About</h2>
        <p>
          UndergroundJS was founded to highlight and level up our local
          community. By being community focused, our goal is to share different
          amazing projects, companies, and people in the Nashville community.
        </p>
        <h2>Organizers</h2>
        <div css={styles.organizerList}>
          <div css={styles.organizerCard}>
            <img
              src="https://pbs.twimg.com/profile_images/964298083126382592/yTIaTPcN_400x400.jpg"
              css={styles.organizerImage}
            />
            <div>
              <span css={styles.organizerName} alt="Kyle Welch's Face">
                Kyle Welch
              </span>
              <p css={styles.organizerBio}>
                Kyle is a Platform Engineer at Eventbrite. He loves to bring
                people together and strives for an inclusive environment for
                all.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
