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
  const wrapper = document.getElementById('router');
  if (router.isActive(urlTree, config)) {
    wrapper?.style.setProperty('view-transition-name', 'page-back');
  } else {
    wrapper?.style.setProperty('view-transition-name', 'page-forward');
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
