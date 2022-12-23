import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpClientTestingModule  } from '@angular/common/http/testing';

import { TaskService } from './task.service';
import { HttpRequests } from '../enums/http-requests';
import { ITask } from '../interface/task.interface';

describe('TaskService', () => {
  let service: TaskService;
  const mockId = 1;
  const task: ITask = {
    id: 1,
    label: 'Kitchen Cleanup',
    description:  'Clean my dirty kitchen',
    category: 'house',
    done: false
  };

  const taskCreate: ITask = {
    label: 'Kitchen Cleanup',
    description:  'Clean my dirty kitchen',
    category: 'house',
    done: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [HttpService]
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get task by id', () => {
    const spy = spyOn((service as any ).http, 'get');
    service.getTask(mockId);

    expect(spy).toHaveBeenCalledWith(HttpRequests.TASKS + '/' + mockId);
  });

  it('should get task by id', () => {
    const spy = spyOn((service as any ).http, 'get');
    service.getTask(mockId);

    expect(spy).toHaveBeenCalledWith(HttpRequests.TASKS + '/' + mockId);
  });

  it('should get task List ', () => {
    const spy = spyOn((service as any ).http, 'get');
    service.getTaskList();

    expect(spy).toHaveBeenCalledWith(HttpRequests.TASKS);
  });

  it('should update Task by id', () => {
    const spy = spyOn((service as any ).http, 'patch');
    service.updateTask(task);

    expect(spy).toHaveBeenCalledWith(HttpRequests.TASKS + '/' + mockId, task);
  });

  it('should delete task by id ', () => {
    const spy = spyOn((service as any ).http, 'delete');
    service.deleteTask(mockId);

    expect(spy).toHaveBeenCalledWith(HttpRequests.TASKS + '/' + mockId);
  });

  it('should create task', () => {
    const spy = spyOn((service as any ).http, 'post');
    service.postTask(taskCreate);

    expect(spy).toHaveBeenCalledWith(HttpRequests.TASKS, taskCreate);
  });
});
