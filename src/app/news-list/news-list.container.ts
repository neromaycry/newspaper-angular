import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-news-list-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <my-news-list></my-news-list>
    `
})
export class NewsListContainer implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }
}
