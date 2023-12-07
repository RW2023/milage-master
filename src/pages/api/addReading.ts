// addReading.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Reading from '@/models/Reading';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const newReading = new Reading(req.body);
      const savedReading = await newReading.save();

      res.setHeader('Content-Type', 'application/json');
      res.status(201).json(savedReading);
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

export default handler;
