import fetch from 'node-fetch';
import eventbrite from 'eventbrite';
import { getAttendeeTicketCount } from './utils';
require('dotenv').config();

const sdk = eventbrite({
  baseUrl: '',
  token: process.env.EB_OAUTH_TOKEN,
});

const actionHandlerList = {
  test: {
    getMessage: () => `Hello :wave:, the ticketbot is working!`,
  },
  'order.placed': {
    getData: async (url) => sdk.request(`${url}?expand=attendees`),
    getMessage: (data) =>
      `:tada::tada::tada:Order placed (${
        data.promo_code
      })! ${getAttendeeTicketCount(data).join(', ')}`,
  },
};

const returnJson = (obj, overrides) => ({
  headers: {
    'content-type': 'application/json',
  },
  statusCode: 200,
  body: JSON.stringify(obj, null, 4),
  ...overrides,
});

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST' && !process.env.OVERRIDE_POST_ONLY) {
    return returnJson(
      {
        message: 'Method Not Allowed',
      },
      { statusCode: 405 }
    );
  }

  const {
    api_url: apiURL,
    config: { action },
  } = JSON.parse(event.body);

  const handler = actionHandlerList[action];

  if (!handler) {
    return returnJson({
      message: 'No handler defined for this action.',
    });
  }

  let data;
  let message;

  try {
    data = handler.getData ? await handler.getData(apiURL) : null;
    message = handler.getMessage(data);
  } catch (ex) {
    return returnJson(ex.parsedError || ex, { statusCode: 500 });
  }

  // Send greeting to Slack
  return fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ text: message }),
  })
    .then(() => returnJson({ message: `Message sent` }))
    .catch((error) =>
      returnJson(
        { message: `Oops! Something went wrong. ${error}` },
        { statusCode: 422 }
      )
    );
};
