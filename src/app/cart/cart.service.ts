import { Injectable, computed, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  saved: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  readonly items = this.cartItems.asReadonly();

  readonly totalItems = computed(() =>
    this.items().reduce((total, item) => total + item.quantity, 0),
  );

  readonly totalPrice = computed(() =>
    this.items().reduce((total, item) => total + item.price * item.quantity, 0),
  );

  addToCart(product: Product) {
    this.cartItems.update((items) => {
      const existingItem = items.find((i) => i.id === product.id);
      if (existingItem) {
        return items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      } else {
        return [...items, { ...product, quantity: 1 }];
      }
    });
  }

  removeFromCart(itemId: number) {
    this.cartItems.update((items) =>
      items.filter((item) => item.id !== itemId),
    );
  }

  updateQuantity(itemId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
    } else {
      this.cartItems.update((items) =>
        items.map((item) =>
          item.id === itemId ? { ...item, quantity } : item,
        ),
      );
    }
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
