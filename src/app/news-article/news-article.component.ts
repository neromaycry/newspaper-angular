import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../core/models/article.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'my-news-article',
    templateUrl: './news-article.component.html',
    styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {
    @Input() article: Article;
    @Output() GoBack = new EventEmitter();

    constructor(private sanitizer: DomSanitizer) {
    }

    getImg(image) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    }

    ngOnInit() {
    }
}
