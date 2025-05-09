import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  Router,
  ViewTransitionInfo,
  withComponentInputBinding,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

const transitionConfig = ({ transition }: ViewTransitionInfo) => {
  const  router = inject(Router);
  const urlTree = router.parseUrl('/projects');
  const  config = {
           paths: 'exact',
    matrixParams: 'exact',
        fragment: 'ignored',
     queryParams: 'ignored',
  } as const;
  const    navTo = router.getCurrentNavigation()?.finalUrl?.toString();
  const  appPage = document.getElementById('app-router');
  const projPage = document.getElementById('project-router');
  if (navTo === '/projects') {
    appPage?.style.setProperty('view-transition-name', 'zoom-in');
  } else if (router.isActive(urlTree, config)) { // navFrom '/projects'
     appPage?.style.setProperty('view-transition-name', 'zoom-out');
    projPage?.style.setProperty('view-transition-name', '');
  } else {
     appPage?.style.setProperty('view-transition-name', '');
    projPage?.style.setProperty('view-transition-name', 'fade');
  }
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(), // *bind URL params to input()
      // *pass params automatically to children of the bound route
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      // *allows Page Transitions
      withViewTransitions({ onViewTransitionCreated: transitionConfig }),
    ),
    provideAnimationsAsync(), // *AngularAnimations enabled
  ],
};
