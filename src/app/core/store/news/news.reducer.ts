import { Actions, ActionTypes } from './news.actions';
import { News } from '../../models/news.model';

export interface State {
    news: Array<News>;
}

export const initialState: State = {
    news: []
}

export function NewsReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.LOAD_NEWS:
            return Object.assign({}, state, {
                news: action.payload
            });
        default:
            return state;
    }
}

export const getNews = (state: State) => state.news;
