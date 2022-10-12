import { createClient } from 'redis';
import { LOCALHOST, REDIS_CONN } from '$env/static/private'

var client;


if (LOCALHOST == "TRUE") {
    client = createClient();
}
else {
    client = createClient({
        url: REDIS_CONN
    });;
}

client.on("error", (error) => console.error(`Error : ${error}`));

await client.connect();

export var client;