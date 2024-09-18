import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSchduleTableComponent } from './control-schdule-table.component';

describe('ControlSchduleTableComponent', () => {
  let component: ControlSchduleTableComponent;
  let fixture: ComponentFixture<ControlSchduleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlSchduleTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSchduleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
