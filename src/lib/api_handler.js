import { PL_API_KEY } from '$env/static/private'
import axios from "axios"
import { client } from "$lib/redis.js";



const config = {
    headers: { Authorization: `Bearer ${PL_API_KEY}` }
};

async function cache_stats(stats) {

    const cache = stats;
    // store movie response for 24 hours
    await client.set("stats", JSON.stringify(cache), { EX: 1 });

}

async function get_stats_api() {
    let data, error;
    try {
        var statsResponse = await axios.get('https://plausible.io/api/v1/stats/aggregate?metrics=visits&site_id=jstet.net', config)
    }
    catch (error) {
        console.log("Unable to retrieve from api:", error.response.status)
        return { undefined, error: error.response.status }
    }
    data = statsResponse.data.results
    try {
        await cache_stats(data);

    }
    catch (error) {
        console.log("Unable to cache data:", error);
        return { undefined, error }
    }


    return { data, error }
}

async function get_stats_cache() {
    let data, error;
    try {
        const cached = await client.get("stats");
        if (cached != null) {
            data = JSON.parse(cached);
            console.log(`Found stats in cache`);
            return { data, error };
        }
    } catch (error) {
        console.log("Unable to retrieve data from cache", error);

    }
    return { undefined, error };
}


export async function api_handler() {
    var { data, error } = await get_stats_cache();

    if (data) {
        return {
            data, error
        };
    }
    var { data, error } = await get_stats_api()

    if (data) {
        return { data, error }
    }

    return { undefined, error }


}