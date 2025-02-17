import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'styling',
        loadComponent: () => import('./views/components/styling/styling.component').then((e) => e.StylingComponent)
    },
    {
        path: "",
        loadComponent: () => import('./views/components/communication/communication.component').then((c) => c.CommunicationComponent)
    }
];
