import { Directive, ElementRef, Renderer2, Sanitizer, SecurityContext } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[formControlName][contenteditable],[formControl][contenteditable],[ngModel][contenteditable]',
  standalone: true,
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:CustomValueAccessorDirective,
    multi:true

  }]
})
export class CustomValueAccessorDirective implements ControlValueAccessor {

  constructor(private renderer:Renderer2,
    private elementRef:ElementRef,
    private sanitizer:DomSanitizer) { }

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
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched not implemented.',fn);
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisablesState not implemented.',isDisabled);
  }

  

}
