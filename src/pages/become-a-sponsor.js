import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <div>
        <h2>Sponsoring</h2>

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
          Visit our <a href="/about" component={Link} to="/about">about page</a> to learn more
          about or mission and meet our organizers
        </p>

        <h3>Here are a list of our sponsorship offerings:</  h3>

        <ul>
          <li>Booth (high-top, 4' or 6')</li>
          <li>Branding on T Shirt</li>
          <li>Branding on Banners</li>
          <li>Branding on Printed Media</li>
          <li>Branding on Website</li>
          <li>Conference Tickets</li>
        </ul>

        <h3>Exclusive Sponsorship Options:</h3>
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

        <h3>Sponsorship Tiers</h3>
        <table className="col-lg-12" style={{ textAlign: 'center' }}>
          <thead> 
            <tr>
              <th>Benefit</th>
              <th className="highlight">Platinum (Limit 1)</th>
              <th>Gold</th>
              <th>Silver</th>
              <th>Community</th>
            </tr>
            <tr>
              <td />
              <td className="highlight">$7,000</td>
              <td>$3,000</td>
              <td>$1,000</td>
              <td>$0</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'left' }}>Branding in conference media</td>
              <td className="highlight">
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
            <tr className="highlight">
              <td style={{ textAlign: 'left' }}>Banner in conference hall</td>
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
              <td />
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Branding on conference t-shirt</td>
              <td className="highlight">
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
            <tr className="highlight">
              <td style={{ textAlign: 'left' }}>Booth in conference hall</td>
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
              <td />
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Small table in conference hall</td>
              <td className="highlight">
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
            <tr className="highlight">
              <td style={{ textAlign: 'left' }}>Banner on stage</td>
              <td>
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Address conference attendees</td>
              <td className="highlight">
                <span role="img" aria-label="Benefit included">
                  ️️✔️
                </span>
              </td>
              <td />
              <td />
              <td />
            </tr>
            <tr className="highlight">
              <td style={{ textAlign: 'left' }}>Scholarship tickets*</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <td style={{ textAlign: 'left' }}>Conference tickets</td>
              <td className="highlight">4</td>
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

        <a className="btn btn-primary" href="mailto:chair@undergroundjs.com?subject=Sponsorship" component={Link} to="/about">
          Contact Us
        </a>
      </div>
    </Layout>
  );
};