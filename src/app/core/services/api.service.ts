import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { News } from '../models/news.model';
import { SERVICES } from '../constants';
import { Store } from '@ngrx/store';
import * as fromActions from '../actions/news.actions';
import * as newsReducer from '../reducers/news.reducer';
import { NewsState } from '../reducers/app.states';

@Injectable()
export class ApiService {

    constructor(
        private http: Http,
        private store: Store<NewsState>
    ) {

    }

    getNewsList(): Observable<News[]> {
        return this.http
            .get(SERVICES.newslist)
            .map((res) => {
                // console.log(res);
                return res.json() as News[];
            });
    }

    loadNewsListToStore() {
        this.getNewsList()
            .subscribe((news) => {
                console.log('newslist:', news);
                this.store.dispatch(new fromActions.LoadAction(news));
            });
    }
}
