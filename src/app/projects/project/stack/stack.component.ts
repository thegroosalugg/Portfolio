import { Component, inject, input } from '@angular/core';
import { Project } from 'app/projects/project.model';
import { IconService } from 'app/shared/icon.service';

@Component({
     selector: 'app-stack',
  templateUrl: './stack.component.html',
     styleUrl: './stack.component.scss'
})
export class StackComponent {
  project = input.required<Project>();
  private icons = inject(IconService);

  getIcon(icon: string) {
    return this.icons.get(icon);
  }

  libraries() {
    return JSON.stringify(this.project().libs, null, 1);
  }
}
