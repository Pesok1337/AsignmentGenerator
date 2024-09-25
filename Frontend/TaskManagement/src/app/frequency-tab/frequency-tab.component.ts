import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-frequency-tab',
  templateUrl: './frequency-tab.component.html',
  styleUrls: ['./frequency-tab.component.scss']
})
export class FrequencyTabComponent implements OnInit {
  frequencyForm!: FormGroup;
  schedules = [
    { name: 'Схема контроля качества', id: 1 },
    { name: 'Производственный контроль', id: 2 }
  ];
  controlPoints = [
    { name: 'ДСФ-4. Технологический', id: 1 },
    { name: 'ДСФ-5. Контрольный', id: 2 }
  ];

  constructor(private fb: FormBuilder) {
    this.frequencyForm = this.fb.group({
      indicatorType: ['current', Validators.required],
      controlSchedule: ['', Validators.required],
      controlPoint: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isActive: [true]
    });
  }

  ngOnInit(): void {
    this.frequencyForm = this.fb.group({
      indicatorType: ['current', Validators.required],
      controlSchedule: ['', Validators.required],
      controlPoint: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isActive: [true]
    });
  }

  onScheduleSelect(event: MatSelectChange): void {
    const selectedSchedule = event.value;
    if (selectedSchedule.name === 'Схема контроля качества') {
      this.frequencyForm.patchValue({
        controlPoint: this.controlPoints[0].name,
        description: 'раз в час'
      });
    }
  }

  onSave(): void {
    if (this.frequencyForm.valid) {
      const formData = this.frequencyForm.value;
      // Логика отправки данных в БД через сервис
      console.log('Form Data:', formData);
    }
  }
}
