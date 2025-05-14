import serverless from "serverless-http";
import app from "../../backend/src"; // Adjust the path to point to your Express app file

export const handler = serverless(app);