import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticleComponent } from './news-article.component';
import { NewsArticleContainer } from './news-article.container';

export const COMPONENTS = [
    NewsArticleComponent,
    NewsArticleContainer
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class NewsArticleModule { }
