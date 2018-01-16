import { RouterModule, Routes } from '@angular/router';
import { NewsListRoutes } from './news-list';

const routes: Routes = [
    ...NewsListRoutes
];

export const routing = RouterModule.forRoot(routes);
