'use strict';

module.exports.hello = async event => {
  let userName = 'World';
  if (event.queryStringParameters && event.queryStringParameters.name) {
    userName = event.queryStringParameters.name
  }
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(
      {
        message: `Hello ${userName}! :poop:`,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.shazbot = async event => {
  let userName = 'World';
  if (event.pathParameters && event.pathParameters.drunkle) {
    userName = event.pathParameters.drunkle
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Fek ahf, ${userName}!`,
        input: event,
      },
      null,
      2
    ),
  };
};
