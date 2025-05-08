import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { USER } from 'app/profile/user.profile';
import { ICONS } from '../icons';

// pure CSS height transition.
// Not as good as Animations - only supported by Chrome/Edge right now
@Component({
     selector: 'app-skills-ex',
      imports: [],
  templateUrl: './skills.ex.component.html',
     styleUrl: './skills.ex.component.scss',
})
export class SkillsExComponent {
  user   = USER;
  icons  = ICONS;
  isRow  = signal(false);
  height = signal(328); // initial CSS values
  list   = viewChild.required<ElementRef>('list');

  getSrc(icon: string) {
    return `/icons/${icon.toLowerCase()}.svg`;
  }

  getIcon(icon: string) {
    return this.icons[icon as keyof typeof this.icons];
  }

  toggleGrid() {
    if (!this.isRow()) {
      const { height } = this.list().nativeElement.getBoundingClientRect();
      this.height.set(height);
    }
    this.isRow.update((v) => !v);
  }
}
