import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import '@polymer/paper-input/paper-textarea';
import { CustomRatePickerComponent, DomainPickerComponent, RatingOption, Site } from 'custom-rate-picker';
import { CustomValueAccessorDirective } from './directives/custom-value-accessor.directive';

@Component({
  selector: 'app-custom-rate-picker',
  templateUrl: './custom-rate-picker.component.html',
  styleUrls: ['./custom-rate-picker.component.css'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,CustomValueAccessorDirective,CustomRatePickerComponent,DomainPickerComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomRatePicker implements OnInit {

  constructor(private fb:FormBuilder) { }

  website:Site = {
    domain:'.com',
    host:'ladyGoldStone'
  }

  form = this.fb.group({
    reviewText:'Your Review...',
    reviewRate: 'great',
    website:this.website
  })

  ngOnInit(): void {
    //this.form.controls.reviewText.disable();
     //this.form.controls.reviewRate.disable();
     this.form.controls.website.disable()
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.reset(this.form.value);
  }

}
