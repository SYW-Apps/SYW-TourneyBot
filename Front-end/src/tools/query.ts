export function generateQuery(query: { [key: string]: any } = {}) {
    const queryParams = Object.keys(query).filter(queryValueName => query[queryValueName]).map(queryValueName => { return `${queryValueName}=${query[queryValueName]}`; });

    return queryParams.length > 0 ? '?' + queryParams.join('&') : '';
}