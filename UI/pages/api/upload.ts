import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { promisify } from 'util';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });
const writeFile = promisify(fs.writeFile);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  upload.single('photo')(req, res, async (err) => {
    if (err) {
      res.status(500).json({ message: 'Upload failed' });
      return;
    }

    const { username } = req.body;
    const photo = req.file;

    const photoPath = path.join(process.cwd(), 'public/uploads', `${username}.jpg`);

    try {
      await writeFile(photoPath, photo.buffer);
      res.status(200).json(photoPath);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
}
