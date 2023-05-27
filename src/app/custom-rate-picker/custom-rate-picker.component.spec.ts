import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRatePickerComponent } from './custom-rate-picker.component';

describe('CustomRatePickerComponent', () => {
  let component: CustomRatePickerComponent;
  let fixture: ComponentFixture<CustomRatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRatePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomRatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
