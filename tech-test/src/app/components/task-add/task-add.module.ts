import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './task-add.component';
import { TaskAddRoutingModule } from './task-add.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskAddComponent
  ],
  imports: [
    CommonModule,
    TaskAddRoutingModule,
    FormsModule,
  ]
})
export class TaskAddModule { }
