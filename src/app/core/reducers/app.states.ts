import { News } from '../models/news.model';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';

export interface AppState {
    newsState: NewsState;
    userState: UserState;
}

export interface NewsState {
    newslist: News[];
    currentArticle: Article;
}

export interface UserState {
    currentTime: number;
    user: User;
}
