import { Component, input } from '@angular/core';
import { Project } from 'app/projects/project.model';

@Component({
     selector: 'app-about',
  templateUrl: './about.component.html',
     styleUrl: './about.component.scss'
})
export class AboutComponent {
  project = input.required<Project>();
}
