import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

@Component({
  selector: 'app-frequency-tab',
  templateUrl: './frequency-tab.component.html',
  styleUrls: ['./frequency-tab.component.scss']
})
export class FrequencyTabComponent {
  displayedColumns: string[] = ['startDate', 'frequency'];
  dataSource = [];
  datetime24h: Date | null = null;
  ruLocale: any;
  frequencyTabForm: FormGroup;
  descriptions = ['Описание 1', 'Описание 2', 'Описание 3'];
  selectedDate: Date = new Date();  // Инициализация текущей датой
  
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

  

// Пример функции отправки данных на бэкенд
  // submitData() {
  //   const formData = this.frequencyTabForm.value;
  //   const formattedDateTime = moment(formData.startDate).format('YYYY-MM-DDTHH:mm:ss');

  //   const dataToSend = {
  //     ...formData,
  //     startDate: formattedDateTime
  //   };

    // Отправка данных на бэкенд
    // this.yourService.sendData(dataToSend).subscribe(response => {
    //   // Обработка ответа
    // });
  }