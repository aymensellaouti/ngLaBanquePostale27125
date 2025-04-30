import { afterNextRender, afterRender, AfterRenderPhase, Directive, HostBinding, HostListener, input, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  in = input('yellow');
  out = input('red');

  // Quellet propriétés je veux gérer
  @HostBinding('style.backgroundColor')
  bgc = this.out();
  constructor() {
    // afterRender(() =>{
    //   console.log('in AfterRender');
    // })
    // afterNextRender(() => {
    //   console.log('in afterNextRender');
    //   this.bgc = this.out;
    // },{ phase: AfterRenderPhase.Read })
  }

  // Quel comportement faire
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = this.in();
  }
  @HostListener('mouseleave')
  // @HostListener('focus')
  onMouseLeave() {
    this.bgc = this.out();
  }
}
