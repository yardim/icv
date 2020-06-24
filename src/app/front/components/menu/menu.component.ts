import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() navigate = new EventEmitter<number>();
  isActive = false;
  menuItems = ['Home', 'Skills', 'Experience'];

  onNavigate(event: MouseEvent, menuIndex: number) {
    event.preventDefault();
    this.navigate.next(menuIndex + 1);
    this.isActive = false;
  }
}
