import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { USER } from 'app/user.profile';
import { ICONS } from './icons';
import { heightAnimation } from './skills.animations';

@Component({
     selector: 'app-skills',
      imports: [],
  templateUrl: './skills.component.html',
     styleUrl: './skills.component.scss',
   animations: [heightAnimation],
})
export class SkillsComponent {
  user   = USER;
  icons  = ICONS;
  isRow  = signal(false);
  height = signal(328); // initial CSS values
  width  = signal(450);
  list   = viewChild.required<ElementRef>('list');

  getSrc(icon: string) {
    return `/icons/${icon.toLowerCase()}.svg`;
  }

  getIcon(icon: string) {
    return this.icons[icon as keyof typeof this.icons];
  }

  toggleGrid() {
    const { clientHeight, clientWidth } = this.list().nativeElement;
    this.height.set(clientHeight);
    this.width.set(clientWidth);
    this.isRow.update((v) => !v);
  }
}
