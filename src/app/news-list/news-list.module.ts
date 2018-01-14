import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list.component';
import { NewsListContainer } from './news-list.container';

export const COMPONENTS = [
    NewsListComponent,
    NewsListContainer
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class NewsListModule { }
