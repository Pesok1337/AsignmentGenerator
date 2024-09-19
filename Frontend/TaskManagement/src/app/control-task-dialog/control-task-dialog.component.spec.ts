import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTaskDialogComponent } from './control-task-dialog.component';

describe('ControlTaskDialogComponent', () => {
  let component: ControlTaskDialogComponent;
  let fixture: ComponentFixture<ControlTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlTaskDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
