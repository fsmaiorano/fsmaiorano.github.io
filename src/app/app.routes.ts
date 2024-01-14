import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    providers: [],
  },
  {
    path: '',
    component: HomeComponent,
    providers: [],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
    providers: [],
  },
];
