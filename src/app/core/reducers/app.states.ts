import { News } from '../models/news.model';

export interface AppState {
    newsState: NewsState;
}

export interface NewsState {
    news: News[];
}


