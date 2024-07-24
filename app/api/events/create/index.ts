import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import getSession from '@/lib/getSession'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const session = await getSession(); 
      const userId = session?.user?.id;

      if (!userId) {
        return res.status(403).json({ error: 'User not authenticated' });
      }

      const { name, date, location, description, category, imgUrl, price } = req.body;

      // Validate incoming data
      if (!name || !date || !category) {
        return res.status(400).json({ error: 'Name, date, and category are required.' });
      }

      // Validate date format
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({ error: 'Invalid date format.' });
      }

      // Validate price if provided
      const parsedPrice = parseFloat(price);
      if (price && isNaN(parsedPrice)) {
        return res.status(400).json({ error: 'Invalid price format.' });
      }

      const newEvent = await prisma.event.create({
        data: {
          name,
          date: parsedDate,
          location: location || null,
          description: description || null,
          category,
          imgUrl: imgUrl || null,
          price: parsedPrice || null,
          userId 
        },
      });

      res.status(201).json(newEvent);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ error: 'Failed to create event' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}