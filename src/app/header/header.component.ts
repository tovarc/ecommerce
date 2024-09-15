import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <button (click)="onToggleSidebar()">☰</button>
      <h1>E-commerce Store</h1>
      <input type="text" placeholder="Search products..." />
      <nav>
        <a href="#">Profile</a>
        <a href="#">Cart</a>
      </nav>
    </header>
  `,
  styles: [
    `
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #333;
        color: white;
      }
      button {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
      }
      input {
        padding: 5px;
        width: 200px;
      }
      nav a {
        color: white;
        text-decoration: none;
        margin-left: 15px;
      }
    `,
  ],
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
