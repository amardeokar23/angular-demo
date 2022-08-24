import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICalculationContainerComponent } from './bmicalculation-container.component';

describe('BMICalculationContainerComponent', () => {
  let component: BMICalculationContainerComponent;
  let fixture: ComponentFixture<BMICalculationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMICalculationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMICalculationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
