import axios from "axios";

import { getHeaders } from "./utils";

export function createApiurl(path: string, query: { [key: string]: any } = {}) {
    const queryParams = Object.keys(query).map(queryValueName => { if (query[queryValueName]) { return `${queryValueName}=${query[queryValueName]}`; } });

    return `https://accounts.sywapps.com${path}` + (queryParams.length > 0 ? '?' + queryParams.join('&') : '');
}

export async function get(path: string, query = {}, optionalHeaders = {}) {
    return await axios.get(createApiurl(path, query), { headers: { ...getHeaders(), ...optionalHeaders } });
}

export async function post(path: string, data: any, query = {}, optionalHeaders = {}) {
    return await axios.post(createApiurl(path, query), data, { headers: { ...getHeaders(), ...optionalHeaders } });
}