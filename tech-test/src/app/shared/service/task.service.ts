import { Injectable } from '@angular/core';
import { HttpRequests } from '../enums/http-requests';
import { ITask } from '../interface/task.interface';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpService) { }

  getTaskList() {
    return this.http.get<Array<ITask>>(HttpRequests.TASKS);
  }

  getTask(id: number) {
    return this.http.get<ITask>(HttpRequests.TASKS + '/' + id);
  }

  updateTask(task: ITask) {
    const date = new Date();
    task.done === false ? task.done = false : task.done = date.toLocaleDateString();

    return this.http.patch<ITask>(HttpRequests.TASKS + '/' + task.id, task);
  }

  deleteTask(id: number) {
    return this.http.delete<ITask>(HttpRequests.TASKS + '/' + id);
  }

  postTask(task: ITask) {
    return this.http.post(HttpRequests.TASKS, task);
  }
}
