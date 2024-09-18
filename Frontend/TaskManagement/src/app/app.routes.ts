import { Routes } from '@angular/router';
import { TaskCreationComponent } from './task-creation/task-creation.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
  { path: 'create', component: TaskCreationComponent },
  { path: 'list', component: TaskListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];