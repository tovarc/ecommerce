import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterModule, CartComponent],
  templateUrl: './vendor.component.html',
})
export class VendorComponent {
  collapse = signal(false);
  toggleCollapse = () => this.collapse.update((s) => !s);
}
