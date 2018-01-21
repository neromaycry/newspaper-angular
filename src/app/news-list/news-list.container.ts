import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { News } from '../core/models/news.model';
import { User } from '../core/models/user.model';
import { ApiService } from '../core/services/api.service';
import * as fromActions from '../core/actions/news.actions';
import * as newsReducer from '../core/reducers/news.reducer';
import * as userReducer from '../core/reducers/user.reducer';
import { NewsState } from '../core/reducers/app.states';
import { Router } from '@angular/router';

@Component({
    selector: 'my-news-list-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <my-news-list
        [newsList]="newsList$ | async"
        [user]="user$ | async"
        [greetings] = "greetings"
        (ToArticle)="toArticle($event)"
        ></my-news-list>
    `
})
export class NewsListContainer implements OnInit {

    newsList$: Observable<News[]>;
    user$: Observable<User>;
    sysTime$: Observable<number>;
    greetings = 'Good Morning!';

    constructor(
        private apiService: ApiService,
        private store: Store<NewsState>,
        private router: Router
    ) {
        this.apiService.loadNewsListToStore();
        this.apiService.loadUserToStore();
        this.apiService.loadSysTime();

        this.newsList$ = this.store.select(newsReducer.getNewslist);
        this.user$ = this.store.select(userReducer.getUser);
        this.sysTime$ = this.store.select(userReducer.getCurrentTime);
    }

    ngOnInit() {
        this.sysTime$.subscribe((time) => {
            console.log(time);
            if (time <= 11) {
                this.greetings = 'Good Morning!';
            } else if (time > 11 && time <= 13) {
                this.greetings = 'Good Noon!'
            } else if (time > 13 && time <= 19) {
                this.greetings = 'Good Afternoon!'
            } else if (time > 19) {
                this.greetings = 'Good Evening!';
            }
        });
        console.log(this.greetings);
    }

    toArticle(id) {
        console.log(id);
        let url = `article/${id}`;
        this.router.navigate([url]);
    }
}
