const serverless = require("serverless-http");
const app = require("../../backend/"); // Import your Express app from the backend folder

exports.handler = serverless(app);