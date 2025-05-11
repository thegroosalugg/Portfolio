import { Directive, ElementRef, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[screenHeight]'
})
export class ScreenHeightDirective implements OnInit {
  pixels = input<string | number>(0, { alias: 'screenHeight' });
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    let deduction = 0;
    const inputVal = +this.pixels();
    if (!isNaN(inputVal)) deduction = inputVal;
    const height = (window.outerHeight - deduction) + 'px';
    this.renderer.setStyle(this.el.nativeElement, 'min-height', height);
    this.renderer.setStyle(this.el.nativeElement, 'max-height', '100%');
  }
}
