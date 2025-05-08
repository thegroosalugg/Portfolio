import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(), // *bind URL params to input()
      // *pass params automatically to children of the bound route
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withViewTransitions() // *allows Page Transitions
    ),
    provideAnimationsAsync(), // *AngularAnimations enabled
  ],
};
