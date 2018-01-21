import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsListContainer } from './news-list.container';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollEventModule } from '../shared/scroll';

export const COMPONENTS = [
    NewsListComponent,
    NewsListContainer
];

@NgModule({
    imports: [
        CommonModule,
        InfiniteScrollModule,
        ScrollEventModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class NewsListModule { }
