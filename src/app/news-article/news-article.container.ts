import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Article } from '../core/models/article.model';
import { ApiService } from '../core/services/api.service';
import * as fromActions from '../core/actions/news.actions';
import * as newsReducer from '../core/reducers/news.reducer';
import { NewsState } from '../core/reducers/app.states';

@Component({
    selector: 'my-news-article-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <my-news-article
        [article]="article$ | async"
        (GoBack)="goBack()"
        ></my-news-article>
    `
})
export class NewsArticleContainer implements OnInit, OnDestroy {
    article$: Observable<Article>;

    constructor(
        private apiService: ApiService,
        private store: Store<NewsState>,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) {
        let id = this.route.snapshot.paramMap.get('id');
        this.apiService.loadArticleToStore(id);
        this.article$ = this.store.select(newsReducer.getArticle);
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    goBack() {
        this.location.back();
    }
}
