import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const getData = async()=>{
    const respond = await axios.get(BASE_URL);
    return respond.data;
}

export {getData};