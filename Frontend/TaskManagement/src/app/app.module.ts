import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskCreationComponent } from './task-creation/task-creation.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog'
import { MatDatepickerModule  } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

import { ProductControlComponent } from './product-control/product-control.component';
import { ControlTaskComponent } from './control-schdule-table/control-schdule-table.component';
import { ControlTaskDialogComponent } from './control-task-dialog/control-task-dialog.component';

@NgModule({
  declarations: [AppComponent, TaskCreationComponent, TaskListComponent, ProductControlComponent, ControlTaskComponent, ControlTaskDialogComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,  // Add this
    MatSelectModule,     // Add this
    MatInputModule,      // Add this
    MatButtonModule,     // Add this
    MatTableModule ,
    MatRadioModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }