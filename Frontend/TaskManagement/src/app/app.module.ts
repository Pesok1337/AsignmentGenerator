import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule  } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ControlTaskComponent } from './control-schedule-table/control-schedule-table.component';
import { ControlTaskDialogComponent } from './control-task-dialog/control-task-dialog.component';
import { FrequencyTabComponent } from './frequency-tab/frequency-tab.component';
import  {AssignmentPageComponent} from "./assignment-page/assignment-page.component";
import {AssignmentTableComponent} from "./assignment-table/assignment-table.component";
import  {AssignmentDialogComponent} from "./assignment-dialog/assignment-dialog.component";

// import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { CalendarModule } from 'primeng/calendar';
import { PrimeNGConfig } from 'primeng/api';
import {FloatLabelModule} from "primeng/floatlabel";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";

@NgModule({
  declarations: [
    AppComponent,
    ControlTaskComponent,
    ControlTaskDialogComponent,
    FrequencyTabComponent,
    AssignmentPageComponent,
    AssignmentTableComponent,
    AssignmentDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTabsModule,
    CalendarModule,
    FloatLabelModule,
    TableModule,
    DropdownModule,
    RadioButtonModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private primengConfig: PrimeNGConfig) { // Внедрение PrimeNGConfig через конструктор
    this.configurePrimeNG();
  }

  configurePrimeNG() {
    this.primengConfig.setTranslation({
      firstDayOfWeek: 1,
      dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
      dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
      today: 'Сегодня',
      clear: 'Очистить',
      dateFormat: 'dd.mm.yy',
      weekHeader: 'Нед',
    });
  }
}
