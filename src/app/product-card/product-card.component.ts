import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <img [src]="product.image" [alt]="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p class="price">{{ product.price | currency: 'EUR' }}</p>
      <button>Add to Cart</button>
    </div>
  `,
  styles: [
    `
      .product-card {
        border: 1px solid #ddd;
        padding: 15px;
        text-align: center;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      .price {
        font-weight: bold;
        color: #007bff;
      }
      button {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
      }
    `,
  ],
})
export class ProductCardComponent {
  @Input() product: any;
}
