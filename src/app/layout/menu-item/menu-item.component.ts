import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Menu } from '../menu.moddel';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() menu: Menu = [];
  
  // constructor() { }

  // ngOnInit(): void {
  // }

}
