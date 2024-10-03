import { Routes } from '@angular/router';
import { DisplayValComponent } from './components/display-val/display-val.component';
import { ParentProgressComponent } from './components/parent-progress/parent-progress.component';


export const routes: Routes = [
{ path: '', component: DisplayValComponent },
{ path: 'progress', component: ParentProgressComponent },
{ 
    path: 'lazy', 
    loadComponent: () => import('./components/lazy-info-val/lazy-info-val.component').then(m => m.LazyInfoValComponent) },

];
