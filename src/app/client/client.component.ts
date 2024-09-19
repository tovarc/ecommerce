import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {

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
