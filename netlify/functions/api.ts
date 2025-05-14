import serverless from "serverless-http";
import { app } from "../../backend/src"; 

export const handler = serverless(app);