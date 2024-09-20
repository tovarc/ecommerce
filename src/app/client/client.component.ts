import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterModule, CartComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
})
export class ClientComponent {
  cartService = inject(CartService);
  collapse = signal(false);
  toggleCollapse = () => this.collapse.update((s) => !s);

  showCart = false;

  toggleShowCart = () => (this.showCart = !this.showCart);

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
