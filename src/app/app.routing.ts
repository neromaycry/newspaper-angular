import { RouterModule, Routes } from '@angular/router';
import { NewsListRoutes } from './news-list';
import { NewsArticleRoutes } from './news-article';

const routes: Routes = [
    ...NewsListRoutes,
    ...NewsArticleRoutes
];

export const routing = RouterModule.forRoot(routes);
