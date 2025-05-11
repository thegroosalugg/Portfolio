import { Component, inject, input } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';
import { PROJECTS } from '../projects';
import { Project } from '../project.model';
import { FontAwesomeService } from 'app/shared/font.awesome.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
     selector: 'app-project',
      imports: [RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule],
  templateUrl: './project.component.html',
     styleUrl: './project.component.scss'
})
export class ProjectComponent {
  project = input.required<Project>();

  constructor() {
    inject(FontAwesomeService)
  }
}

export const resolveProject: ResolveFn<Project> = (
  activatedRoute: ActivatedRouteSnapshot,
     routerState: RouterStateSnapshot
) => {
  const router = inject(Router);
  const slug = activatedRoute.paramMap.get('slug');
  if (slug) {
    const project = PROJECTS.find(({ name }) => slug === name);
    if (project) return project;
  }
  const root = router.parseUrl('projects');
  return new RedirectCommand(root);
};
