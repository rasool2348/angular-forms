import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appBanWords]',
  standalone: true,
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:BanWordsDirective,
      multi:true
    }
  ]
})
export class BanWordsDirective implements Validator {

  constructor() { }
  private _bannedWords:string[] = [];

  @Input('appBanWords') set appBanWords( value:string | string[] ){
    this._bannedWords = Array.isArray(value) ? value : [value];
    this.onChange();
  }

  private onChange: () => void = () => {};
  
  validate(control: AbstractControl<string>): ValidationErrors|null {
    return this._bannedWords.length > 0 && this._bannedWords.findIndex(word => word?.toLowerCase() === control?.value.toLowerCase()) > -1 
    ? {appBanWords : { banWords : control.value}}
    :null
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }

}
