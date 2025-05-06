import { Component } from '@angular/core';
import { PROJECTS } from './projects';
import { RouterLink } from '@angular/router';

@Component({
     selector: 'app-projects',
      imports: [RouterLink],
  templateUrl: './projects.component.html',
     styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
}
