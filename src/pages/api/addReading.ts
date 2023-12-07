// src/pages/api/addReading.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb'; 
import Reading from '@/models/Reading'; 

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Connect to the database
  await dbConnect();

  // Handle POST request
  if (req.method === 'POST') {
    try {
      // Create a new reading from the request body
      const newReading = new Reading(req.body);

      // Save the reading to the database
      const savedReading = await newReading.save();

      // Send back the saved reading
      res.status(201).json(savedReading);
    } catch (error) {
      // Error handling
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  } else {
    // Respond with method not allowed if not a POST request
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export default handler;
