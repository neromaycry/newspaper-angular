import { Routes } from '@angular/router';
import { NewsArticleContainer } from './news-article.container';

export const NewsArticleRoutes: Routes = [
    { path: 'article/:id', component: NewsArticleContainer, data: { state: 'article' } }
];
