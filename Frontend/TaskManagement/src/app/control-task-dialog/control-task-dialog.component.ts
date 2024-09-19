import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlTaskService } from '../services/control-task.service';
import { ProductGroup } from '../models/product-group.model';
import { ControlType } from '../models/control-type.model';
import { OrgUnit } from '../models/org-unit.model';
import { TaskFreq } from '../models/task-freq.model';

@Component({
  selector: 'app-control-task-dialog',
  templateUrl: './control-task-dialog.component.html',
  styleUrls: ['./control-task-dialog.component.scss'],
})
export class ControlTaskDialogComponent implements OnInit {
  controlTaskForm: FormGroup;
  controlTypes: ControlType[] = [];
  orgUnits: OrgUnit[] = [];
  productGroups: ProductGroup[] = [];
  taskFreqs: TaskFreq[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ControlTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private controlTaskService: ControlTaskService
  ) {
    this.controlTaskForm = this.fb.group({
      controlType: ['', Validators.required],
      sampleType: ['', Validators.required],
      orgUnit: ['', Validators.required],
      productGroup: ['', Validators.required],
      taskFreq: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isActive: [false],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.controlTaskService.getControlTypes().subscribe({
      next: (types) => {
        this.controlTypes = types;
      },
      error: (err) => {
        console.error('Error fetching control types', err);
      }
    });
  
    this.controlTaskService.getOrgUnits().subscribe({
      next: (units) => {
        this.orgUnits = units;
      },
      error: (err) => {
        console.error('Error fetching org units', err);
      }
    });
  
    this.controlTaskService.getProductGroups().subscribe({
      next: (groups) => {
        this.productGroups = groups;
      },
      error: (err) => {
        console.error('Error fetching product groups', err);
      }
    });
  
    this.controlTaskService.getTaskFreqs().subscribe({
      next: (freqs) => {
        this.taskFreqs = freqs;
      },
      error: (err) => {
        console.error('Error fetching task frequencies', err);
      }
    });
  
    if (this.data.isEdit) {
      this.controlTaskForm.patchValue(this.data.record);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
