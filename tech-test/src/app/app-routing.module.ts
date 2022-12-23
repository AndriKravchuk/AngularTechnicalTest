import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./components/task-list/task-list.module').then(m => m.TaskListModule),
  },
  {
    path: 'task', loadChildren: () => import('./components/task-add/task-add.module').then(m => m.TaskAddModule)
  },
  {
    path: 'task\:id', loadChildren: () => import('./components/task-add/task-add.module').then(m => m.TaskAddModule)
  },
  {
      path: '**',
      loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
