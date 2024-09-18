import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ControlType } from '../models/control-type.model';
import { ProductGroup } from '../models/product-group.model';
import { OrgUnit } from '../models/org-unit.model';

export interface ProductControlRecord {
  date: Date;
  productGroup: string;
  line: string;
  workshop: string;
  controlType: string;
}

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.scss']
})
export class ProductControlComponent implements OnInit {
  productControlForm: FormGroup;
  productGroups: ProductGroup[] = [];
  lines: OrgUnit[] = [];
  workshops: OrgUnit[] = [];
  controlTypes: ControlType[] = [];

  displayedColumns: string[] = ['date', 'productGroup', 'line', 'workshop', 'controlType'];
  dataSource: ProductControlRecord[] = [];

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productControlForm = this.fb.group({
      productGroup: [''],
      line: [''],
      workshop: [''],
      controlType: ['']
    });
  }

  ngOnInit(): void {
    // Получаем группы продуктов
    this.productService.getProductGroups().subscribe(
      (data: ProductGroup[]) => {
        this.productGroups = data;
      },
      (error: any) => {
        console.error('Ошибка при получении групп продуктов', error);
      }
    );

    // Получаем типы контроля
    this.productService.getControlTypes().subscribe(
      (data: ControlType[]) => {
        this.controlTypes = data;
      },
      (error: any) => {
        console.error('Ошибка при получении видов контроля', error);
      }
    );

    // Получаем OrgUnit
    this.productService.getOrgUnits().subscribe(
      (data: OrgUnit[]) => {
        this.lines = data;
      },
      (error: any) => {
        console.error('Ошибка при получении видов контроля', error);
      }
    );

    this.productService.getOrgUnits().subscribe(
      (data: OrgUnit[]) => {
        this.workshops = data;
      },
      (error: any) => {
        console.error('Ошибка при получении видов контроля', error);
      }
    );
  }

  onSubmit() {
    const newRecord: ProductControlRecord = {
      date: new Date(),
      productGroup: this.productControlForm.get('productGroup')?.value,
      line: this.productControlForm.get('line')?.value,
      workshop: this.productControlForm.get('workshop')?.value,
      controlType: this.productControlForm.get('controlType')?.value
    };

    this.dataSource = [...this.dataSource, newRecord]; // Обновляем dataSource
    this.productControlForm.reset();
  }
}
