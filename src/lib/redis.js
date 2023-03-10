import { createClient } from 'redis';
import { REDIS_CONN } from '$env/static/private'


export var client;

(async () => {
    client = createClient({
        url: REDIS_CONN
    });
  
    client.on("error", (error) => console.error(`Error : ${error}`));
  
    await client.connect();
  })();



