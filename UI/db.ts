import { Client } from 'pg';

export let client: Client;

export function connect() {

  client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'unabomber'
  });

  client.connect()
    .then(() => {
      console.log('Connected!');
    })
    .catch(e => {
      console.error('Connection error', e);
    }); 
  
  client.on('end', () => {
    console.log('Disconnected, reconnecting...');
    connect();
  }); 

}

connect();
