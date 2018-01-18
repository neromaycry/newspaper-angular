import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../core/models/article.model';

@Component({
    selector: 'my-news-article',
    templateUrl: './news-article.component.html',
    styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {
    @Input() article: Article;

    constructor() {
    }

    ngOnInit() {
    }
}
