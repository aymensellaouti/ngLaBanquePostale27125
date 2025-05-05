import { afterNextRender, afterRender, AfterRenderPhase, Directive, HostBinding, HostListener, input, Input, InputSignal, linkedSignal, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
  host: {
    '[style.backgroundColor]': 'this.color()',
    '(mouseenter)':'this.onMouseEnter()',
    '(mouseleave)':'this.onMouseLeave()',
  }
})
export class HighlightDirective {
  in: InputSignal<string> = input('yellow');
  out = input('red');
  color = linkedSignal(() => this.out());
  // Quellet propriétés je veux gérer
  // @HostBinding('style.backgroundColor')
  // bgc2 = signal('');
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.bgc2.set(this.out());
  // }
  // get bgc() {
  //   return this.color();
  // };
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
  // @HostListener('mouseenter')
  onMouseEnter() {
    // this.bgc2.set(this.in());
    this.color.set(this.in());
  }
  // @HostListener('mouseleave')
  // @HostListener('focus')
  onMouseLeave() {
    // this.bgc2.set(this.out());
    this.color.set(this.out());
  }
}
