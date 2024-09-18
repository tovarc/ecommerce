import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./product-card/product-card.component').then(
        (m) => m.ProductCardComponent,
      ),
  },
];
