import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside [class.collapsed]="collapsed">
      <button (click)="onToggle()">
        {{ collapsed ? '>' : '<' }}
      </button>
      <nav>
        <ul>
          <li>
            <a href="#">{{ collapsed ? '' : 'Home' }}</a>
          </li>
          <li>
            <a href="#">{{ collapsed ? '' : 'Products' }}</a>
          </li>
          <li>
            <a href="#">{{ collapsed ? '' : 'Profile' }}</a>
          </li>
          <li>
            <a href="#">{{ collapsed ? '' : 'Cart' }}</a>
          </li>
        </ul>
      </nav>
    </aside>
  `,
  styles: [
    `
      aside {
        width: 200px;
        height: 100%;
        background-color: #f0f0f0;
        transition: width 0.3s ease;
      }
      aside.collapsed {
        width: 50px;
      }
      button {
        width: 100%;
        padding: 10px;
        background: none;
        border: none;
        cursor: pointer;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        padding: 10px;
      }
      a {
        text-decoration: none;
        color: #333;
      }
    `,
  ],
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggle() {
    this.toggleSidebar.emit();
  }
}
