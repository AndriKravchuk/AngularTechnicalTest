import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ITask } from 'src/app/shared/interface/task.interface';
import { TaskService } from 'src/app/shared/service/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  public task: ITask  = {
    label: '',
    description: '',
    category: '',
    done: false
  };
  public label: string;
  public description: string;
  public category: string;
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private  snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTask(parseInt(id, 10)).subscribe((task: ITask) => {
        this.task = task;
      });
    }
  }

  public save() {
    if (this.task.id) {
      this.taskService.updateTask(this.task).subscribe(( res ) => {
        this.snackBar.open('Tasks successfully updated', 'ok', {
          panelClass: ['custom-style'],
          duration: 2000,
        }).afterDismissed().subscribe(() => {
          this.router.navigate(['/list']);
        });
      });
    } else {
      this.taskService.postTask(this.task).subscribe(( res ) => {
        this.snackBar.open('Tasks successfully add', 'ok', {
          panelClass: ['custom-style'],
          duration: 2000,
        }).afterDismissed().subscribe(() => {
          this.router.navigate(['/list']);
        });
      });
    }
  }

  public delete() {
    this.taskService.deleteTask(this.task.id).subscribe(( res ) => {
      this.snackBar.open('Tasks successfully Deleted', 'ok', {
        panelClass: ['custom-style'],
        duration: 2000,
      }).afterDismissed().subscribe(() => {
        this.router.navigate(['/list']);
      });
    });
  }



}
