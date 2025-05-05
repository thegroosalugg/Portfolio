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
  height = signal(328); // temp skip initial render height animation fix
  list   = viewChild.required<ElementRef>('list');

  getSrc(icon: string) {
    return `/icons/${icon.toLowerCase()}.svg`;
  }

  getIcon(icon: string) {
    return this.icons[icon as keyof typeof this.icons];
  }

  toggleGrid() {
    this.height.set(this.list().nativeElement.clientHeight);
    this.isRow.update((v) => !v);
  }
}
