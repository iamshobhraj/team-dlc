
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const filePath = path.resolve('.', 'src/app/profile/[id]/playerData.json');
    fs.writeFileSync(filePath, JSON.stringify(req.body));
    res.status(200).json({ status: 'success' });
  } else {
    res.status(405).json({ status: 'fail', message: 'Only POST requests are allowed' });
  }
}