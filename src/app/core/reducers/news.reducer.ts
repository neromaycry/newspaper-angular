import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/news.actions';
import { NewsState } from './app.states';

export const initialState: NewsState = {
    news: []
};

export function reducer(state = initialState, action: fromActions.All): NewsState {
    switch (action.type) {
        case fromActions.ActionTypes.LOAD_NEWS: {
            return Object.assign({}, state, {
                news: action.payload
            });
        }
        default: {
            return state;
        }
    }
}

export const getNewsState = createFeatureSelector<NewsState>('newsState');

export const getNews = createSelector(
    getNewsState,
    (state: NewsState) => state.news
);

