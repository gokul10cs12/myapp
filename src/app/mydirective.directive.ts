import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class MydirectiveDirective {

  constructor(private myElementRef: ElementRef ) {
    this.myElementRef.nativeElement.style.color='blue';
  }


}
