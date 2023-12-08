// src/pages/api/addReading.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Reading from '@/models/Reading';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { startReading, endReading, startReadingTime, endReadingTime } =
        req.body;
      let readingData: any = {};

      // Add startReading and startReadingTime if provided
      if (startReading !== undefined) {
        readingData.startReading = startReading;
        readingData.startReadingTime = startReadingTime
          ? new Date(startReadingTime)
          : undefined;
      }

      // Add endReading and endReadingTime if provided
      if (endReading !== undefined) {
        readingData.endReading = endReading;
        readingData.endReadingTime = endReadingTime
          ? new Date(endReadingTime)
          : undefined;
      }

      // Calculate distance if both startReading and endReading are provided
      if (
        readingData.startReading !== undefined &&
        readingData.endReading !== undefined
      ) {
        readingData.distance =
          readingData.endReading - readingData.startReading;
      }

      // Check if at least start or end reading data is provided
      if (
        readingData.startReading === undefined &&
        readingData.endReading === undefined
      ) {
        return res.status(400).json({ error: 'No reading data provided.' });
      }

      const newReading = new Reading(readingData);
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
