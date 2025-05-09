import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import {
  ProjectComponent,
  resolveProject,
} from './projects/project/project.component';
import { SnapshotComponent } from './projects/project/snapshot/snapshot.component';
import { AboutComponent } from './projects/project/about/about.component';
import { StackComponent } from './projects/project/stack/stack.component';

export const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {
    path: 'projects',
    children: [
      { path: '', component: ProjectsComponent },
      {
        path: ':slug',
        component: ProjectComponent,
        resolve: { project: resolveProject },
        children: [
          { path: '',      component: SnapshotComponent },
          { path: 'about', component: AboutComponent    },
          { path: 'stack', component: StackComponent    },
        ],
      },
    ],
  }, // ** catch all other route paths
  { path: '**', redirectTo: 'projects', pathMatch: 'full' },
];
