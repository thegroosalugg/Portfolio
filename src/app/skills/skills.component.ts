import { Component } from '@angular/core';
import { USER } from 'app/user.profile';
import { ICONS } from './icons';

@Component({
     selector: 'app-skills',
      imports: [],
  templateUrl: './skills.component.html',
     styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  user  = USER;
  icons = ICONS;

  getSrc(icon: string) {
    return `/icons/${icon.toLowerCase()}.svg`
  }

  getIcon(icon: string) {
    return this.icons[icon as keyof typeof this.icons]
  }
}
