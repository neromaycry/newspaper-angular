import { RouterModule, Routes } from '@angular/router';
import { NewsListRoutes } from './news-list';
import { NewsArticleRoutes } from './news-article';
import { NewsListContainer } from './news-list';

const routes: Routes = [
    { path: '', redirectTo: 'newslist', pathMatch: 'full' },
    ...NewsListRoutes,
    ...NewsArticleRoutes
];

export const routing = RouterModule.forRoot(routes);
