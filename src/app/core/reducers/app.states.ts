import { News } from '../models/news.model';
import { Article } from '../models/article.model';

export interface AppState {
    newsState: NewsState;
}

export interface NewsState {
    newslist: News[];
    currentArticle: Article;
}


