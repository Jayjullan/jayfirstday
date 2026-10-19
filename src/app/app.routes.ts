import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SecondPage } from './second-page/second-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'second-page',
    component: SecondPage,
  },
];
