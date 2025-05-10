import { Component, input } from '@angular/core';
import { Project } from 'app/projects/project.model';

@Component({
  selector: 'app-snapshot',
  styleUrl: './snapshot.component.scss',
  template: `<img
               [src]="'/snapshots/' + project().name + '.jpg'"
               [alt]="project().name"
             />`,
})
export class SnapshotComponent {
  project = input.required<Project>();
}
