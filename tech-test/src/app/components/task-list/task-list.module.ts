import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListRoutingModule } from './task-list.routing.module';

import {MatTableModule} from '@angular/material/table';

import { TaskListComponent } from './task-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class TaskListModule { }
