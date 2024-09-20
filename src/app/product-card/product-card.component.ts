import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  cartService = inject(CartService);

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  products = [
    {
      id: 1,
      name: 'Chuleton de Vaca Rubia',
      price: 72,
      description: 'Chuleton de 1kg',
      image:
        'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYiUyMGNob3BzfGVufDB8fDB8fHww',
      saved: true,
    },
    {
      id: 2,
      name: 'Solomillo de Ternera',
      price: 89,
      description: 'Solomillo premium de 500g',
      image:
        'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlsZXQlMjBtaWdub258ZW58MHx8MHx8fDA%3D',
      saved: true,
    },
    {
      id: 3,
      name: 'Entrecot de Buey',
      price: 65,
      description: 'Entrecot jugoso de 400g',
      image:
        'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmliZXllfGVufDB8fDB8fHww',
      saved: true,
    },
    {
      id: 4,
      name: 'Lomo Bajo de Vaca',
      price: 58,
      description: 'Lomo bajo marmoleado de 300g',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0ZWFrfGVufDB8fDB8fHww',
      saved: true,
    },
    {
      id: 5,
      name: 'Picaña de Ternera',
      price: 55,
      description: 'Picaña tierna de 350g',
      image:
        'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVuYSUyMHN0ZWFrfGVufDB8fDB8fHww',
      saved: true,
    },
    {
      id: 6,
      name: 'Costillas de Cerdo',
      price: 42,
      description: 'Rack de costillas de 800g',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0ZWFrfGVufDB8fDB8fHww',
      saved: true,
    },
    {
      id: 7,
      name: 'Pechuga de Pollo',
      price: 28,
      description: 'Pechuga de pollo de corral 500g',
      image:
        'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D',
      saved: true,
    },
    {
      id: 8,
      name: 'Magret de Pato',
      price: 62,
      description: 'Magret de pato francés 300g',
      image:
        'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVjayUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D',
      saved: true,
    },
    {
      id: 9,
      name: 'Chuletas de Cordero',
      price: 52,
      description: 'Chuletas de cordero lechal 400g',
      image:
        'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYiUyMGNob3BzfGVufDB8fDB8fHww',
      saved: true,
    },
    {
      id: 10,
      name: 'Lomo de Atún',
      price: 75,
      description: 'Lomo de atún rojo 250g',
      image:
        'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVuYSUyMHN0ZWFrfGVufDB8fDB8fHww',
      saved: true,
    },
    {
      id: 11,
      name: 'Salmón Noruego',
      price: 48,
      description: 'Filete de salmón noruego 300g',
      image:
        'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww',
      saved: true,
    },
    {
      id: 12,
      name: 'Codorniz Entera',
      price: 35,
      description: 'Codorniz entera de 200g',
      image:
        'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmliZXllfGVufDB8fDB8fHww',
      saved: true,
    },
  ];

  removeSaved(product: any) {
    product.saved = false;
  }
}
