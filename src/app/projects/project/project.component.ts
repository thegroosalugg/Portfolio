import { AfterViewInit, Component, ElementRef, inject, input, viewChild } from '@angular/core';
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
import { ElementRefService } from 'app/shared/element.ref.service';

@Component({
     selector: 'app-project',
      imports: [RouterLink, RouterLinkActive, RouterOutlet, FontAwesomeModule],
  templateUrl: './project.component.html',
     styleUrl: './project.component.scss'
})
export class ProjectComponent implements AfterViewInit {
  project = input.required<Project>();
   header = viewChild.required<ElementRef>('header');
  private elementService = inject(ElementRefService);

  constructor() {
    inject(FontAwesomeService)
  }

  ngAfterViewInit() {
    this.elementService.init('project', this.header())
    setTimeout(() => this.elementService.scrollTo('project'), 500);
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
