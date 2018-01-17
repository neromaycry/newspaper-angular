import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { News } from '../core/models/news.model';

@Component({
    selector: 'my-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, AfterViewInit {
    @Input() newsList: News[];

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    getImg(image) {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    }

    onScrollDown() {
        console.log('scrolled down');
    }

    onScrollUp() {
        console.log('scrolled up:');
    }

}
