import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/layout/layout').then(m => m.Layout)
    },
    {
        path: 'digistock',
        loadComponent: () => import('./pages/digistock/digistock').then(m => m.Digistock)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
    }
];
