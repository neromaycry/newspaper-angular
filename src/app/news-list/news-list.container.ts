import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { News } from '../core/models/news.model';
import { ApiService } from '../core/services/api.service';
import * as fromActions from '../core/actions/news.actions';
import * as newsReducer from '../core/reducers/news.reducer';
import { NewsState } from '../core/reducers/app.states';
import { Router } from '@angular/router';

@Component({
    selector: 'my-news-list-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <my-news-list
        [newsList]="newsList$ | async"
        (ToArticle)="toArticle($event)"
        ></my-news-list>
    `
})
export class NewsListContainer implements OnInit {

    newsList$: Observable<News[]>;

    constructor(
        private apiService: ApiService,
        private store: Store<NewsState>,
        private router: Router
    ) {
        this.apiService.loadNewsListToStore();

        this.newsList$ = this.store.select(newsReducer.getNewslist);
    }

    ngOnInit() {
        this.newsList$.subscribe((news) => {
            console.log(news);
        });
    }

    toArticle(id) {
        console.log(id);
        let url = `article/${id}`;
        this.router.navigate([{ outlets: { body: url } }]);
    }
}
