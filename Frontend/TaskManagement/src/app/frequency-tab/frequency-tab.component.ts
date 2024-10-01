import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-frequency-tab',
  templateUrl: './frequency-tab.component.html',
  styleUrls: ['./frequency-tab.component.scss']
})
export class FrequencyTabComponent implements OnInit {
  controlData: any[] = []; // Data from backend
  selectedRow: any = null;
  description: string = '';
  repeatType: string = 'Без повторений';
  selectedDate: Date = new Date();
  endDate: Date | null = null;

  // Options for repeat dropdown
  repeatOptions = [
    { label: 'Без повторений', value: 'Без повторений' },
    { label: 'Закончить после...', value: 'Закончить после...' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchControlData();
  }

  fetchControlData() {
    // Example API call to fetch data
    this.http.get<any[]>('http://localhost:5087/api/controls').subscribe(data => {
      this.controlData = data;
    });
  }

  onRowSelect(event: any) {
    this.selectedRow = event.data;
    this.description = this.selectedRow.description;
  }

  addControl() {
    const newControl = {
      description: this.description
    };
    this.controlData.push(newControl);
  }

  copyControl() {
    if (this.selectedRow) {
      const copiedControl = { ...this.selectedRow };
      this.controlData.push(copiedControl);
    }
  }

  deleteControl() {
    if (this.selectedRow) {
      const index = this.controlData.indexOf(this.selectedRow);
      if (index > -1) {
        this.controlData.splice(index, 1);
      }
    }
  }

  submitForm() {
    const formData = {
      description: this.description,
      repeatType: this.repeatType,
      startTime: this.selectedDate,
      endDate: this.endDate || null
    };

    this.http.post('http://localhost:5087/api/controls', formData).subscribe(response => {
      console.log('Form submitted successfully:', response);
    });
  }
  }
