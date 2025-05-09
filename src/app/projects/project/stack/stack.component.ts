import { Component, input } from '@angular/core';
import { Project } from 'app/projects/project.model';
import { ICONS } from 'app/skills/icons';

@Component({
     selector: 'app-stack',
  templateUrl: './stack.component.html',
     styleUrl: './stack.component.scss'
})
export class StackComponent {
    icons = ICONS;
  project = input.required<Project>();

  getIcon(icon: string) {
    return this.icons[icon as keyof typeof this.icons];
  }

  libraries() {
    return JSON.stringify(this.project().libs, null, 1);
  }
}
