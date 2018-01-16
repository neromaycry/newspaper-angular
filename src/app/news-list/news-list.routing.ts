import { Routes } from '@angular/router';
import { NewsListContainer } from './news-list.container';

export const NewsListRoutes: Routes = [
    { path: 'newslist', component: NewsListContainer, outlet: 'body' }
];
