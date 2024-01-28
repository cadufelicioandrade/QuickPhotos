import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector:'[appDarkenOnHover]'
})
export class DarkenOnHoverDirective{

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ){}

  @HostListener('mouseover')
  darkOn(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'filter','brightness(70%)');
  }

  @HostListener('mouseleave')
  darkOff(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'filter','brightness(100%)');
  }

}
