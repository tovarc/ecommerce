import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'client',
    loadComponent: () =>
      import('./client/client.component').then((m) => m.ClientComponent),
    children: [
      {
        path: 'products',
        loadComponent: () =>
          import('./product-card/product-card.component').then(
            (m) => m.ProductCardComponent,
          ),
      },

      {
        path: 'payments',
        loadComponent: () =>
          import('./payments/payments.component').then(
            (m) => m.PaymentsComponent,
          ),
      },
    ],
  },
];
