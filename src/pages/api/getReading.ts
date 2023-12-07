import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb'; 
import Reading from '@/models/Reading'; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const readings = await Reading.find({}); // Fetch all readings
      res.status(200).json(readings);
    } catch (error) {
      if (error instanceof Error) {
        // Properly handle the error if it's an instance of Error
        res.status(400).json({ error: error.message });
      } else {
        // Generic error handling for unexpected errors
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  } else {
    // Handle any non-GET requests
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
