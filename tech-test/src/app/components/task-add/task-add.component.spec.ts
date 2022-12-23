import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ITask } from 'src/app/shared/interface/task.interface';
import { TaskService } from 'src/app/shared/service/task.service';

import { TaskAddComponent } from './task-add.component';

class FakeTaskService {
  deleteTask = () => of();
}

describe('TaskAddComponent', () => {
  let component: TaskAddComponent;
  let fixture: ComponentFixture<TaskAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MatSnackBarModule, FormsModule],
      declarations: [ TaskAddComponent ],
      providers: [{ provide: TaskService, useClass: FakeTaskService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete task by id', () => {
    const spy = spyOn((component as any ).taskService, 'deleteTask').and.returnValue(of());
    component.task = {id : 1} as ITask;
    component.delete();

    expect(spy).toHaveBeenCalledWith(component.task.id);
  });

});
