import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/news.actions';
import { NewsState } from './app.states';

export const initialState: NewsState = {
    newslist: [],
    currentArticle: null
};

export function reducer(state = initialState, action: fromActions.All): NewsState {
    switch (action.type) {
        case fromActions.ActionTypes.LOAD_NEWSLIST: {
            return Object.assign({}, state, {
                newslist: action.payload
            });
        }
        case fromActions.ActionTypes.LOAD_ARTICLE: {
            return Object.assign({}, state, {
                currentArticle: action.payload
            });
        }
        case fromActions.ActionTypes.CLEAR_ARTICLE: {
            return Object.assign({}, state, {
                currentArticle: null
            });
        }
        default: {
            return state;
        }
    }
}

export const getNewsState = createFeatureSelector<NewsState>('newsState');

export const getNewslist = createSelector(
    getNewsState,
    (state: NewsState) => state.newslist
);

export const getArticle = createSelector(
    getNewsState,
    (state: NewsState) => state.currentArticle
);
