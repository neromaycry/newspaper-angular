import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { News } from '../models/news.model';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';
import { SERVICES } from '../constants';
import { Store } from '@ngrx/store';
import * as fromActions from '../actions/news.actions';
import * as newsReducer from '../reducers/news.reducer';
import { NewsState } from '../reducers/app.states';
import * as fromUserActions from '../actions/user.actions';
import * as userReducer from '../reducers/user.reducer';

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
            .subscribe((newslist) => {
                console.log('newslist:', newslist);
                this.store.dispatch(new fromActions.LoadAction(newslist));
            });
    }

    getArticle(id: string): Observable<Article> {
        return this.http
            .get(SERVICES.article)
            .map((res) => {
                return res.json() as Article;
            });
    }

    loadArticleToStore(id: string) {
        this.getArticle(id)
            .subscribe((article) => {
                this.store.dispatch(new fromActions.LoadArticleAction(article));
            });
    }

    getUser() {
        return this.http
            .get(SERVICES.user)
            .map((res) => {
                return res.json() as User;
            });
    }

    loadUserToStore() {
        this.getUser()
            .subscribe((user) => {
                this.store.dispatch(new fromUserActions.LoadAction(user));
            });
    }

    loadSysTime() {
        let now = new Date();
        let hour = now.getHours();
        this.store.dispatch(new fromUserActions.LoadTimeAction(hour));
    }

}
