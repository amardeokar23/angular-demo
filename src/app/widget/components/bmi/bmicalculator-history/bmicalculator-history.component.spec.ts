import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICalculatorHistoryComponent } from './bmicalculator-history.component';

describe('BMICalculatorHistoryComponent', () => {
  let component: BMICalculatorHistoryComponent;
  let fixture: ComponentFixture<BMICalculatorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMICalculatorHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMICalculatorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
