import { Component, inject, input } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  Router,
  RouterLink,
  RouterStateSnapshot,
} from '@angular/router';
import { PROJECTS } from '../projects';
import { Project } from '../project.model';

@Component({
     selector: 'app-project',
      imports: [RouterLink],
  templateUrl: './project.component.html',
     styleUrl: './project.component.scss'
})
export class ProjectComponent {
  project = input.required<Project>();
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
