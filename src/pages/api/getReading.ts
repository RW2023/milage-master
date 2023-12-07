// getReading.ts
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
      const readings = await Reading.find({}).lean(); // Using .lean() for plain JavaScript objects
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(readings);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
