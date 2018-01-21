import { Action } from '@ngrx/store';
import { type } from './utils';
import { User } from '../models/user.model';

export const ActionTypes = {
    LOAD_USER: type('/user/LOAD_USER'),
    LOAD_TIME: type('/user/LOAD_TIME')
}

export class LoadAction implements Action {
    readonly type = ActionTypes.LOAD_USER;
    constructor(public payload: User) { }
}

export class LoadTimeAction implements Action {
    readonly type = ActionTypes.LOAD_TIME;
    constructor(public payload: number) { }
}

export type All = LoadAction | LoadTimeAction;
