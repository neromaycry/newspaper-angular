import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { News } from '../core/models/news.model';
import { ApiService } from '../core/services/api.service';
import * as fromActions from '../core/actions/news.actions';
import * as newsReducer from '../core/reducers/news.reducer';
import { NewsState } from '../core/reducers/app.states';

@Component({
    selector: 'my-news-list-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <my-news-list
        [newsList]="newsList$ | async"
        ></my-news-list>
    `
})
export class NewsListContainer implements OnInit {

    newsList$: Observable<News[]>;

    constructor(
        private apiService: ApiService,
        private store: Store<NewsState>
    ) {
        this.apiService.loadNewsListToStore();

        this.newsList$ = this.store.select(newsReducer.getNews);
        // console.log(this.newsList$);

    }

    ngOnInit() {
        this.newsList$.subscribe((news)=>{
            console.log(news);
        });
    }
}
