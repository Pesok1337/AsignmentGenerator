import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlTaskRecord } from '../models/control-task-record.model';

// Импортируй необходимые модели

@Component({
  selector: 'app-control-task',
  templateUrl: './control-schdule-table.component.html',
  styleUrls: ['./control-schdule-table.component.scss']
})
export class ControlTaskComponent implements OnInit {
  dataSource = new MatTableDataSource<ControlTaskRecord>([]);
  displayedColumns: string[] = ['controlType', 'sampleType', 'orgUnit', 'productGroup', 'taskFreq', 'startDate', 'endDate', 'isActive', 'description'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Логика получения данных
  }

  addRecord() {
    // Логика добавления записи
  }

  editRecord() {
    // Логика редактирования записи
  }

  deleteRecord() {
    // Логика удаления записи
  }
}
