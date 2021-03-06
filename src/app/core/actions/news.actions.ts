import { Action } from '@ngrx/store';
import { type } from './utils';
import { News } from '../models/news.model';
import { Article } from '../models/article.model';

export const ActionTypes = {
    LOAD_NEWSLIST: type('/news/LOAD_NEWSLIST'),
    LOAD_ARTICLE: type('/news/LOAD_ARTICLE'),
    CLEAR_ARTICLE: type('/news/CLEAR_ARTICLE')
}

export class LoadAction implements Action {
    readonly type = ActionTypes.LOAD_NEWSLIST;
    constructor(public payload: News[]) { }
}

export class LoadArticleAction implements Action {
    readonly type = ActionTypes.LOAD_ARTICLE;
    constructor(public payload: Article) { }
}

export class ClearArticleAction implements Action {
    readonly type = ActionTypes.CLEAR_ARTICLE;
    constructor() { }
}

export type All = LoadAction | LoadArticleAction;
