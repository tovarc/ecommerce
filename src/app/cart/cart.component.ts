import { CommonModule } from '@angular/common';
import { Component, Input, output, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CartService } from './cart.service';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  close = output<boolean>();

  constructor(public cartService: CartService) {}

  incrementQuantity(item: CartItem) {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  decrementQuantity(item: CartItem) {
    this.cartService.updateQuantity(item.id, item.quantity - 1);
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  onSubmit() {
    console.log('Purchase confirmed', this.cartService.items());
  }

  closeCart() {
    this.close.emit(true);
  }
}
