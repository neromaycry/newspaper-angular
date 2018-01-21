import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, Directive, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { News } from '../core/models/news.model';
import { User } from '../core/models/user.model';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'my-news-list',
    templateUrl: './news-list.component.html',
    animations: [
        trigger('headerState', [
            state('show', style({ transform: 'translateY(0)' })),
            transition('void => *', [
                style({ transform: 'translateY(-100%)' }),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({ transform: 'translateY(-100%)' }))
            ])
        ])
    ],
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, AfterViewInit {
    @Input() newsList: News[];
    @Input() user: User;
    @Input() greetings: string;
    @Output() ToArticle = new EventEmitter<string>();
    headerState = 'show';

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
        // this.headerState = 'hide';
        console.log(this.headerState);
    }

    onScrollUp() {
        console.log('scrolled up');
    }

    onScroll(event) {
        console.log(event);
    }
}
