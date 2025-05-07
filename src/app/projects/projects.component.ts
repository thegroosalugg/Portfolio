import { Component } from '@angular/core';
import { PROJECTS } from './projects';
import { RouterLink } from '@angular/router';
import { ICONS } from 'app/skills/icons';

@Component({
     selector: 'app-projects',
      imports: [RouterLink],
  templateUrl: './projects.component.html',
     styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
     icons = ICONS;

  getIcon(icon: string) {
    return this.icons[icon as keyof typeof this.icons];
  }
}
