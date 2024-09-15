import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    ProductCardComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  collapse = signal(false);
  toggleCollapse = () => this.collapse.update((s) => !s);

  menuItems = [
    {
      label: 'Datos Personales',
    },

    {
      label: 'Metodos de Pago',
    },
    {
      label: 'Compras Realizadas',
    },
    {
      label: 'Productos Favoritos',
    },
    {
      label: 'Cerrar Sesion',
    },
  ];
}
