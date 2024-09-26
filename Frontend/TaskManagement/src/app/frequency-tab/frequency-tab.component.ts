import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-frequency-tab',
  templateUrl: './frequency-tab.component.html',
  styleUrls: ['./frequency-tab.component.scss']
})
export class FrequencyTabComponent {
  displayedColumns: string[] = ['startDate', 'frequency'];
  dataSource = [];

  frequencyTabForm: FormGroup;
  descriptions = ['Описание 1', 'Описание 2', 'Описание 3'];

  constructor(private fb: FormBuilder) {
    this.frequencyTabForm = this.fb.group({
      description: [''],
      name: [''],
      startDate: [null],
      repeatPeriod: ['none'],
      repeatTemplate: this.fb.group({
        templateType: ['hourly'],  // Ежечасно по умолчанию
        hourlyInterval: [1]
      })
    });

    // Слушаем изменение периода повторений
    this.frequencyTabForm.get('repeatPeriod')!.valueChanges.subscribe(value => {
      if (value === 'none') {
        this.frequencyTabForm.get('repeatTemplate')!.disable();
      } else {
        this.frequencyTabForm.get('repeatTemplate')!.enable();
      }
    });
  }

  addRow() {
    // Логика для добавления новой строки в таблицу
  }

  copyRow() {
    // Логика для копирования строки
  }

  deleteRow() {
    // Логика для удаления строки
  }
}
