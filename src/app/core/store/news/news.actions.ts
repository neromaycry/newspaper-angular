import { Action } from '@ngrx/store';
import { type } from '../utils';
import { News } from '../../models/news.model';

export const ActionTypes = {
    LOAD_NEWS: type('/news/LOAD_NEWS')
}

export class LoadAction implements Action {
    type = ActionTypes.LOAD_NEWS;
    constructor(public payload: News[]) { }
}

export type Actions = LoadAction;
