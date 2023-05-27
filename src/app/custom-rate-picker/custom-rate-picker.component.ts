import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import '@polymer/paper-input/paper-textarea';
import { CustomRatePickerComponent, RatingOption } from 'custom-rate-picker';
import { CustomValueAccessorDirective } from './directives/custom-value-accessor.directive';

@Component({
  selector: 'app-custom-rate-picker',
  templateUrl: './custom-rate-picker.component.html',
  styleUrls: ['./custom-rate-picker.component.css'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,CustomValueAccessorDirective,CustomRatePickerComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomRatePicker implements OnInit {

  constructor(private fb:FormBuilder) { }

  form = this.fb.group({
    reviewText:'Your Review...',
    reviewRate: 'great'
  })

  ngOnInit(): void {
    //this.form.controls.reviewText.disable();
     this.form.controls.reviewRate.disable();
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.reset(this.form.value);
  }

}
