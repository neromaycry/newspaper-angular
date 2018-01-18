export const LOCAL_SERVICE_IP = 'http://127.0.0.1';
export const LOCAL_SERVICE_PORT = '3000';
export const BASE_URL = `${LOCAL_SERVICE_IP}:${LOCAL_SERVICE_PORT}`;

let buildServiceUrl = name => `${BASE_URL}${name}`;

const NEWS_LIST = buildServiceUrl('/newslist');
const ARTICLE = buildServiceUrl('/article');

export const SERVICES = {
    newslist: NEWS_LIST,
    article: ARTICLE
};
