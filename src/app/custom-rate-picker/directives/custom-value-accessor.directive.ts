import { Directive, ElementRef, HostListener, Optional, Renderer2, Sanitizer, SecurityContext, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[formControlName][contenteditable],[formControl][contenteditable],[ngModel][contenteditable]',
  standalone: true,
  
})
export class CustomValueAccessorDirective implements ControlValueAccessor {

  constructor(private renderer:Renderer2,
    private elementRef:ElementRef,
    private sanitizer:DomSanitizer,
    @Optional() @Self() public ngControl:NgControl) {
      if(ngControl != null){
        ngControl.valueAccessor = this;
      }
     }


  onChange!:(newValue:string) => void;
  onTouch!:() => void;

  

  @HostListener('input',['$event']) onInput(e:Event){
    this.onChange((e.target as HTMLElement).innerHTML);
  }

  @HostListener('blur') onBlur(){
    this.onTouch();
  }

  writeValue(obj: any): void {
    console.log('writeValue called.',obj);
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      this.sanitizer.sanitize(SecurityContext.HTML,obj)
    )
  }
  registerOnChange(fn: any): void {
    console.log('registerOnChange not implemented.',fn);
    this.onChange = fn;

  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched not implemented.',fn);
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisablesState not implemented.',isDisabled);
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'contentEditable',
      !isDisabled
    )
  }

  

}
