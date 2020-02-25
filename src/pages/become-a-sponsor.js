import React from 'react';
import { Container } from 'theme-ui/layout';
import { Styled } from 'theme-ui';
import Layout from 'gatsby-theme-conference/src/components/layout';
import Button from 'gatsby-theme-conference/src/components/button';
import theme from '../gatsby-theme-conference/theme';

const styles = {
  main: {
    padding: '2rem 0',
    fontSize: '1.4rem',
    h2: {
      margin: '2rem auto',
    },
    h3: {
      margin: '2rem auto 1rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '1rem',
      td: {
        padding: '.5rem .2rem',
      },
      thead: {
        td: {
          textAlign: 'center',
          fontStyle: 'italic',
        },
      },
      tbody: {
        tr: {
          '&:nth-child(even)': {
            td: {
              backgroundColor: theme.colors.secondary,
            },
          },
          td: {
            textAlign: 'center',
            '&:first-of-type': {
              textAlign: 'left',
            },
          },
        },
      },
    },
    ul: {
      marginLeft: '3rem',
    },
  },
  highlight: {
    backgroundColor: theme.colors.secondary,
  },
};

export default () => {
  return (
    <Layout>
      <Container>
        <Styled.h2>Sponsoring</Styled.h2>

        <p>
          UndergroundJS will bring together 250 of Nashville's talented
          developer market to share with them some of most amazing things
          happening in our community. From side project and multi-team efforts
          to community involvement and personal growth.
        </p>

        <p>
          We will be hosting multiple session and long breaks during our single
          day event to promote a learning and social environment.
        </p>

        <p>
          Visit our <Styled.a href="/about">about page</Styled.a> to learn more
          about or mission and meet our organizers
        </p>

        <Styled.h3>Here are a list of our sponsorship offerings:</Styled.h3>

        <ul>
          <li>Booth (high-top, 4' or 6')</li>
          <li>Branding on T Shirt</li>
          <li>Branding on Banners</li>
          <li>Branding on Printed Media</li>
          <li>Branding on Website</li>
          <li>Conference Tickets</li>
        </ul>

        <Styled.h3>Exclusive Sponsorship Options:</Styled.h3>
        <ul>
          <li>After party host</li>
          <li>Lunch or Breakfast</li>
          <li>Coffee</li>
          <li>Lanyard</li>
          <li>Badges</li>
          <li>Swag Bag</li>
          <li>VIP Dinner (Speakers and Volunteers)</li>
          <li>Address attendees during opening remarks</li>
        </ul>

        <Styled.h3>Sponsorship Tiers</Styled.h3>
        <table css={styles.main.table}>
          <thead>
            <tr>
              <th>Benefit</th>
              <th css={styles.highlight}>Platinum (Limit 1)</th>
              <th>Gold</th>
              <th>Silver</th>
              <th>Community</th>
            </tr>
            <tr>
              <td />
              <td css={styles.highlight}>$7,000</td>
              <td>$3,000</td>
              <td>$1,000</td>
              <td>$0</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Branding in conference media</td>
              <td css={styles.highlight}>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
            </tr>
            <tr>
              <td>Banner in conference hall</td>
              <td css={styles.highlight}>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td />
            </tr>
            <tr>
              <td>Branding on conference t-shirt</td>
              <td css={styles.highlight}>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td />
              <td />
            </tr>
            <tr>
              <td>Booth in conference hall</td>
              <td css={styles.highlight}>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td />
              <td />
            </tr>
            <tr>
              <td>Small table in conference hall</td>
              <td css={styles.highlight}>
                <span role="img" aria-label="Benefit included">
                  ️️
                </span>
              </td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️
                </span>
              </td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td />
            </tr>
            <tr>
              <td>Banner on stage</td>
              <td css={styles.highlight}>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>Address conference attendees</td>
              <td css={styles.highlight}>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td>Scholarship tickets*</td>
              <td css={styles.highlight}>3</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Conference tickets</td>
              <td css={styles.highlight}>4</td>
              <td>3</td>
              <td>2</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <small>
          * A part of the sponsorship goes to provide free tickets to those in
          need.
        </small>
        <p>
          We want to provide you with the best sponsoring experience custom for
          your business. To find out more email us.
        </p>

        <Button href="mailto:chair@undergroundjs.com?subject=Sponsorship">
          Contact Us
        </Button>
      </Container>
    </Layout>
  );
};
