import { Directive, ElementRef,Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligh]',
  standalone: true
})
export class HighlighDirective {

  addbg(
    color: string,
    
  ) {
    this.elementRef.nativeElement.style.backgroundColor = `${color}`;
  }
  // input to use property from directiv to html
  @Input() set appHighligh(value: number) {
    if (value == 1) {
      this.addbg('orange');
    } else if (value == 2) {
      this.addbg('#59F9F9');
    } else if (value == 0) {
      this.addbg('#FE8E8E');
    } else {
      this.addbg('#58D506');
    }
  }
  @HostListener('mouseover') onMouseOver() {
    
    this.elementRef.nativeElement.style.boxShadow =
      ' rgba(167, 195, 195 , 0.4) 5px 5px, rgba(167, 195, 195 , 0.3) 10px 10px, rgba(167, 195, 195 , 0.2) 15px 15px, rgba(167, 195, 195 , 0.1) 20px 20px, rgba(167, 195, 195 , 0.05) 25px 25px';
  }
  @HostListener('mouseout') onMouseOut() {
    
    this.elementRef.nativeElement.style.boxShadow =
     'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
  }

  constructor(private elementRef: ElementRef ) {

   }

}
