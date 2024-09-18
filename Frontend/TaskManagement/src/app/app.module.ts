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

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { ProductControlComponent } from './product-control/product-control.component';

@NgModule({
  declarations: [AppComponent, TaskCreationComponent, TaskListComponent, ProductControlComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatFormFieldModule,  // Add this
    MatSelectModule,     // Add this
    MatInputModule,      // Add this
    MatButtonModule,     // Add this
    MatTableModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }