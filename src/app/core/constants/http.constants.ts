import { environment } from '../../../environments/environment';

export const LOCAL_SERVICE_IP = 'http://127.0.0.1';
export const LOCAL_SERVICE_PORT = '8001';
export const PRD_SERVICE_IP = 'http://47.94.249.154';
export const PRD_SERVICE_PORT = '8282';
export const BASE_URL = environment.production ? `${PRD_SERVICE_IP}:${PRD_SERVICE_PORT}` : `${LOCAL_SERVICE_IP}:${LOCAL_SERVICE_PORT}`;

console.log('base url:', BASE_URL);

let buildServiceUrl = name => `${BASE_URL}${name}`;

const NEWS_LIST = buildServiceUrl('/newslist');
const ARTICLE = buildServiceUrl('/article');
const USER = buildServiceUrl('/user');

export const SERVICES = {
    newslist: NEWS_LIST,
    article: ARTICLE,
    user: USER
};
