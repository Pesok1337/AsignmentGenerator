import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

interface Task {
  taskId: string;
  productGroup?: { name: string };
  controlPoint?: { name: string };
  frequency: string;
  timeToExecute: string;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      data => this.tasks = data,
      error => console.error('Error fetching tasks', error)
    );
  }

  updateFrequency(taskId: string, newFrequency: string) {
    this.taskService.updateTaskFrequency(taskId, newFrequency).subscribe(
      response => {
        console.log('Frequency updated successfully', response);
        this.loadTasks(); // Reload tasks to reflect changes
      },
      error => console.error('Error updating frequency', error)
    );
  }
}