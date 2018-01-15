import { Component, OnInit, Input } from '@angular/core';
import { News } from '../core/models/news.model';

@Component({
    selector: 'my-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
    @Input() newsList: News[];

    ngOnInit() {

    }

}
