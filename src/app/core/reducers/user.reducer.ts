import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/user.actions';
import { UserState } from './app.states';

export const initialState: UserState = {
    currentTime: 0,
    user: null
};

export function reducer(state = initialState, action: fromActions.All): UserState {
    switch (action.type) {
        case fromActions.ActionTypes.LOAD_USER: {
            return Object.assign({}, state, {
                user: action.payload
            });
        }
        case fromActions.ActionTypes.LOAD_TIME: {
            return Object.assign({}, state, {
                currentTime: action.payload
            });
        }
        default: {
            return state;
        }
    }
}

export const getUserState = createFeatureSelector<UserState>('userState');

export const getUser = createSelector(
    getUserState,
    (state: UserState) => state.user
);

export const getCurrentTime = createSelector(
    getUserState,
    (state: UserState) => state.currentTime
);
