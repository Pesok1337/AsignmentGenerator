import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-creation',
  templateUrl: './task-creation.component.html',
  styleUrls: ['./task-creation.component.scss']
})
export class TaskCreationComponent implements OnInit {
  taskForm!: FormGroup;
  productGroups: { productGroupId: number; name: string }[] = [];
controlPoints: any;
  TaskService: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Fetch product groups from your service
    this.TaskService.getProductGroups().subscribe((groups: { productGroupId: number; name: string }[]) => {
      this.productGroups = groups;
    });

    this.taskForm = this.fb.group({
      productGroupId: ['', Validators.required],
      controlPointId: ['', Validators.required],
      frequency: ['', Validators.required],
      timeToExecute: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      // Add logic to submit the form data
    }
  }
}