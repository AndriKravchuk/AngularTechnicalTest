import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITask } from 'src/app/shared/interface/task.interface';
import { TaskService } from 'src/app/shared/service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

 public tasks: ITask[];
 public dataSource;
 public dataSourceFilters;
 public displayedColumns: string[] = ['id', 'label', 'description', 'category', 'done'];

  constructor(private taskService: TaskService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.taskService.getTaskList().subscribe((tasks: ITask[]) => {
      this.tasks = tasks;
      this.dataSource = new MatTableDataSource(tasks);
      this.dataSourceFilters = new MatTableDataSource(tasks);
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getTask(task: ITask) {
    this.router.navigate(['/task', task.id]);
  }

}
