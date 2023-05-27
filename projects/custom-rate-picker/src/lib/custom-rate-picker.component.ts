import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type RatingOption = 'good' | 'great' | 'normal' | 'bad' | null;

@Component({
  selector: 'rate-picker',
  templateUrl: './custom-rate-picker.component.html',
  styleUrls: ['./custom-rate-picker.component.css'],
  standalone:true,
  imports:[CommonModule],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:CustomRatePickerComponent,
      multi:true
    }
  ]

})
export class CustomRatePickerComponent implements OnInit, ControlValueAccessor, OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['value']){
      this.onChange(changes['value'].currentValue);
    }
  }

  onChange:(newValue:RatingOption) => void = ()=>{};
  onTouch:() => void = ()=>{};

  writeValue(value: RatingOption): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void{
    this.disabled = isDisabled;
  };

  ngOnInit(): void {
  }

  @Input() disabled:boolean = false;

  @Input() value:RatingOption = null;

  @Input()
  @HostBinding('attr.tabIndex') tabIndex = 0;

  @HostListener('blur') onBlur(){
    this.onTouch();
  }

  @Output() onRate = new EventEmitter<RatingOption>();

  setValue(value:RatingOption){
    if(!this.disabled){
      this.value = value;
      this.onTouch();
      this.onChange(value);
      this.onRate.emit(value);
    }
  }



}
