import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNameFormat]'
})
export class NameFormatDirective {
  @Input('appNameFormat') format: string;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    // Get the value of the input field when blur
    let value: string = this.el.nativeElement.value;
    if (this.format === 'upperCase') {
      this.el.nativeElement.value = value.toUpperCase()
    } else {
      this.el.nativeElement.value = value.toLowerCase()
    }
    ;
  }

  @HostListener('focus') onFocus() {
    console.log('On Focus');
  }



}
