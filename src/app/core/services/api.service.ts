import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import { News } from '../models/news.model';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';
import { SERVICES } from '../constants';
import { Store } from '@ngrx/store';
import * as fromActions from '../actions/news.actions';
import * as newsReducer from '../reducers/news.reducer';
import { AppState } from '../reducers/app.states';
import * as fromUserActions from '../actions/user.actions';
import * as userReducer from '../reducers/user.reducer';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class ApiService {

    constructor(
        private http: HttpClient,
        private store: Store<AppState>
    ) {

    }

    loadNewsListToStore(): Subscription {
        return this.http.get(SERVICES.newslist).subscribe((newslist: News[]) => {
            this.store.dispatch(new fromActions.LoadAction(newslist));
        });
    }

    loadArticleToStore(id: string): Subscription {
        return this.http.get(SERVICES.article).subscribe((article: Article) => {
            this.store.dispatch(new fromActions.LoadArticleAction(article));
        });
    }

    loadUserToStore(): Subscription {
        return this.http.get(SERVICES.user).subscribe((user: User) => {
            this.store.dispatch(new fromUserActions.LoadAction(user));
        });
    }

    loadSysTime(): void {
        let now = new Date();
        let hour = now.getHours();
        this.store.dispatch(new fromUserActions.LoadTimeAction(hour));
    }

}
