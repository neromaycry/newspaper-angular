import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Article } from '../core/models/article.model';
import { DomSanitizer } from '@angular/platform-browser';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'my-news-article',
    templateUrl: './news-article.component.html',
    styleUrls: ['./news-article.component.scss'],
    // animations: [
    //     trigger('routeAnimation', [
    //         state('*',
    //             style({
    //                 opacity: 1,
    //                 transform: 'translateX(0)'
    //             })
    //         ),
    //         transition(':enter', [
    //             style({
    //                 opacity: 0,
    //                 transform: 'translateX(100%)'
    //             }),
    //             animate('0.2s ease-in')
    //         ]),
    //         transition(':leave', [
    //             animate('0.5s ease-out', style({
    //                 opacity: 0,
    //                 transform: 'translateY(-100%)'
    //             }))
    //         ])
    //     ])
    // ]
})
export class NewsArticleComponent implements OnInit {
    // @HostBinding('@routeAnimation') routeAnimation = true;
    // @HostBinding('style.display') display = 'block';
    // @HostBinding('style.position') position = 'absolute';
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
