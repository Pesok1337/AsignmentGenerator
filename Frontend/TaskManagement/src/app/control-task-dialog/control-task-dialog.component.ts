import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlTaskService } from '../services/control-task.service';
import { ProductGroup } from '../models/product-group.model';
import { ControlType } from '../models/control-type.model';
import { OrgUnit } from '../models/org-unit.model';
import { EventFreq } from '../models/event-freq.model';
import { SampleType } from '../models/sample-type.model';
import { ControlTaskRecord } from '../models/control-task-record.model';

@Component({
  selector: 'app-control-task-dialog',
  templateUrl: './control-task-dialog.component.html',
  styleUrls: ['./control-task-dialog.component.scss']
})
export class ControlTaskDialogComponent implements OnInit {
  form: FormGroup;
  controlTypes: ControlType[] = [];
  orgUnits: OrgUnit[] = [];
  productGroups: ProductGroup[] = [];
  eventFreqs: EventFreq[] = [];
  sampleTypes: SampleType[] = [];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ControlTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private controlTaskService: ControlTaskService
  ) {
    this.form = this.fb.group({
      controlType: ['', Validators.required],
      sampleType: [''],
      orgUnit: [''],
      productGroup: [''],
      eventFreq: [''],
      startDate: [null],
      endDate: [null],
      isActive: [false],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.loadData();
    if (this.data.isEdit) {
      this.form.patchValue(this.data.record);
    }
    console.log('Form status:', this.form.status);
  }

  loadData(): void {
    console.log('loadData called');
    this.controlTaskService.getControlTypes().subscribe(
      types => this.controlTypes = types,
      error => console.error('Error loading control types', error)
    );
    this.controlTaskService.getOrgUnits().subscribe(
      units => this.orgUnits = units,
      error => console.error('Error loading org units', error)
    );
    this.controlTaskService.getProductGroups().subscribe(
      groups => this.productGroups = groups,
      error => console.error('Error loading product groups', error)
    );
    this.controlTaskService.getEventFreqs().subscribe(
      freqs => this.eventFreqs = freqs,
      error => console.error('Error loading task frequencies', error)
    );
    this.controlTaskService.getSampleTypes().subscribe(
      sampleTypes => this.sampleTypes = sampleTypes,
      error => console.error('Error loading task frequencies', error)
    );
  }
  onEventFreqChange(event: any): void {
    const selectedFreq = this.eventFreqs.find(freq => freq.name === event.value);
    if (selectedFreq) {
      this.form.patchValue({ description: selectedFreq.description });
    }
  }
  onSubmit(): void {
    if (this.form.valid) {
      
      const newRecord: ControlTaskRecord = this.form.value;
      // newRecord.description = 
      console.log('newRecord', newRecord);
      this.controlTaskService.addControllSchedule(newRecord).subscribe(
        response => {
          console.log('Record added successfully', response);
          this.dialogRef.close(response);
        },
        error => {
          console.error('Error adding record', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
