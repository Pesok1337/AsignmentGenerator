import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlTaskRecord } from '../models/control-task-record.model';
import { ControlTaskDialogComponent } from '../control-task-dialog/control-task-dialog.component';
import { ControlTaskService } from '../services/control-task.service';
import { MatDialog } from '@angular/material/dialog';

// Импортируй необходимые модели

@Component({
  selector: 'app-control-task',
  templateUrl: './control-schdule-table.component.html',
  styleUrls: ['./control-schdule-table.component.scss']
})
export class ControlTaskComponent implements OnInit {
selectedRecord: any;
deleteRecord() {
throw new Error('Method not implemented.');
}
editRecord() {
throw new Error('Method not implemented.');
}
openEditDialog() {
throw new Error('Method not implemented.');
}
  dataSource = new MatTableDataSource<ControlTaskRecord>([]);
  displayedColumns: string[] = ['controlType', 'sampleType', 'orgUnit', 'productGroup', 'taskFreq', 'startDate', 'endDate', 'isActive', 'description'];

  constructor(private fb: FormBuilder, private dialog: MatDialog, private controlTaskService: ControlTaskService) {}
  ngOnInit(): void {
    // this.loadTasks();  // Пример метода, который нужно реализовать
    throw new Error('Method not implemented.');
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ControlTaskDialogComponent, {
      width: '1200px',
      data: { isEdit: false, record: {} }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Диалоговое окно закрыто', result);
    });

  // ngOnInit() {
  //   // Логика получения данных
  // }

  // addRecord() {
  //   // Логика добавления записи
  // }

  // editRecord() {
  //   // Логика редактирования записи
  // }

  // deleteRecord() {
  //   // Логика удаления записи
  // }
}
}
