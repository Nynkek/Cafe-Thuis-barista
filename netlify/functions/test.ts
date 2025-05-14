// netlify/functions/test.js
exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Function is working! test test" })
    };
  }