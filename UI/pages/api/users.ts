import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../db';

interface User {
  id: number;
  name: string;
  image_path: string;
  attempts: boolean;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
  if (req.method === 'GET') {
    
    const result = await client.query<User[]>(`SELECT * FROM users`);
    return res.json(result.rows);

  }

  if (req.method === 'POST') {

    interface NewUser {

        name: string;
  
        image_path: string;
  
      }
    console.log(req.body);
    const { name, image_path } = req.body as NewUser;
    

    const result = await client.query<User>(
      'INSERT INTO users(name, image_path) VALUES($1,$2) RETURNING *',
      [name, image_path]  
    );

    res.status(201).json(result.rows[0]);
  }

  if (req.method === 'DELETE') {

    const { username } = req.body;

    await client.query(
        'DELETE FROM users WHERE name = $1',
        [username]
    );

    res.status(200).json({ message: 'User deleted' });

  }

}
