import { Component, inject } from '@angular/core';
import { PROJECTS } from './projects';
import { Project } from './project.model';
import { RouterLink } from '@angular/router';
import { IconService } from 'app/icon.service';

@Component({
     selector: 'app-projects',
      imports: [RouterLink],
  templateUrl: './projects.component.html',
     styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
  private icons = inject(IconService);

  getStacks({ stack, prod }: Project) {
    return [...stack, ...prod]
  }

  getIcon(icon: string) {
    return this.icons.get(icon);
  }
}
