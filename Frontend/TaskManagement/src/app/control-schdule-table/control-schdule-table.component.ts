import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlTaskRecord } from '../models/control-task-record.model';
import { ControlTaskDialogComponent } from '../control-task-dialog/control-task-dialog.component';
import { ControlTaskService } from '../services/control-task.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';

// Импортируй необходимые модели

@Component({
  selector: 'app-control-task',
  templateUrl: './control-schdule-table.component.html',
  styleUrls: ['./control-schdule-table.component.scss']
})
export class ControlTaskComponent implements OnInit {
  selectedRecord: ControlTaskRecord | null = null;
  dataSource = new MatTableDataSource<ControlTaskRecord>([]);
  displayedColumns: string[] = ['select', 'controlType', 'sampleType', 'orgUnit', 'productGroup', 'eventFreq', 'startDate', 'endDate', 'isActive', 'description'];
  selection = new SelectionModel<ControlTaskRecord>(true, []);
  constructor(private fb: FormBuilder, private dialog: MatDialog, private controlTaskService: ControlTaskService) {}
 
  ngOnInit(): void {
    this.loadControllSchdeules(); 
  }
  deleteRecord() {
    const selectedIds = this.selection.selected.map(record => record.controlScheduleUid);
    selectedIds.forEach(controlScheduleUid => {console.log("id: ",controlScheduleUid)});
  this.controlTaskService.deleteControllSchedules(selectedIds).subscribe(
    () => {
      this.loadControllSchdeules(); // Reload the table after deletion
      this.selection.clear(); // Clear the selection
    },
    error => console.error('Error deleting control schedules', error)
  );
  }
  openEditDialog(): void {
    const dialogRef = this.dialog.open(ControlTaskDialogComponent, {
      width: '80%',
      data: { isEdit: true, record: this.selectedRecord }  // Передача существующей записи
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadControllSchdeules();
      }
    });
  }
  openAddDialog(): void {
    console.log('openAddDialog called'); // Добавьте это отладочное сообщение
  const dialogRef = this.dialog.open(ControlTaskDialogComponent, {
    //width: '80%',
    width: '600px',
    height: '800px',
    data: { isEdit: false }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Диалоговое окно закрыто', result);
      this.loadControllSchdeules();
    });
  }
  loadControllSchdeules(): void {
    this.controlTaskService.getAllControllSchedules().subscribe(
      (controllSchedules: ControlTaskRecord[]) => {
        this.dataSource = new MatTableDataSource<ControlTaskRecord>(controllSchedules);  // Ensure this is an array
      },
      error => console.error('Error loading control schedules', error)
    );
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.data.forEach(row => this.selection.select(row));
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  





  // addRecord(record: ControlTaskRecord) {
  //   const dialogRef = this.dialog.open(ControlTaskDialogComponent, {
  //     width: '1200px',
  //     data: { isEdit: true, record: record }
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.updateRecord(result);
  //     }
  //   });
  // }

  // editRecord(record: ControlTaskRecord): void {
  //   const dialogRef = this.dialog.open(ControlTaskDialogComponent, {
  //     width: '1200px',
  //     data: { isEdit: true, record: record }
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.updateRecord(result);
  //     }
  //   });
  // }
  
  // // Define the updateRecord() method
  // updateRecord(updatedRecord: ControlTaskRecord): void {
  //   // Call your service to update the record in the backend
  //   this.controlTaskService.updateControllSchedule(updatedRecord).subscribe(
  //     response => {
  //       console.log('Record updated successfully', response);
  //       this.loadControllSchdeules();  // Reload the table to reflect changes
  //     },
  //     error => {
  //       console.error('Error updating the record', error);
  //     }
  //   );
  // }

  // deleteRecord() {
  //   // Логика удаления записи
  // }
}
