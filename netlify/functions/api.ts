import serverless from 'serverless-http';
import { app } from '../../backend/src/index.ts';

export const handler = serverless(app);