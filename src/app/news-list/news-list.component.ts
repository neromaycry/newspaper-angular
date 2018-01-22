import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, Directive, HostListener, HostBinding } from '@angular/core';
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
import { ScrollEvent } from '../shared/scroll';

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

    public handleScroll(event: ScrollEvent) {
        // console.log(event.originalEvent);
        let isScrollUp = event.isScrollUp;
        if (event.scrollTop > 128) {
            // console.log(isScrollUp);
            this.headerState = isScrollUp ? 'show' : 'hide';
        }
    }
}
