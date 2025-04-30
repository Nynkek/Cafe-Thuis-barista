import type { NextApiRequest, NextApiResponse } from "next";

const BACKEND_API = "http://localhost:3001/api/recipes";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch(BACKEND_API);

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
