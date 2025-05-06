import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';

export const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {
    path: 'projects',
    children: [
      { path:     '',  component: ProjectsComponent },
      { path: ':slug', component: ProjectComponent  },
    ],
  }, // ** catch all other route paths
  { path: '**', component: ProjectsComponent, title: 'Error' },
];
