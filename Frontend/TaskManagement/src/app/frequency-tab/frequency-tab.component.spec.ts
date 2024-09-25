import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyTabComponent } from './frequency-tab.component';

describe('FrequencyTabComponent', () => {
  let component: FrequencyTabComponent;
  let fixture: ComponentFixture<FrequencyTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequencyTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequencyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
