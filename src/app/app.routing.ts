import { RouterModule, Routes } from '@angular/router';
import { NewsListRoutes } from './news-list';

const routes: Routes = [
    { path: '', redirectTo: '/newslist', pathMatch: 'full' },
    ...NewsListRoutes
];

export const routing = RouterModule.forRoot(routes);
