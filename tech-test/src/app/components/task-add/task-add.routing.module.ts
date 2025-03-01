import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskAddComponent } from './task-add.component';


const routes: Routes = [
  {
    path: '',
    component: TaskAddComponent
  },
  {
    path: ':id',
    component: TaskAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskAddRoutingModule { }
