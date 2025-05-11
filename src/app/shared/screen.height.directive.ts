import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[screenHeight]'
})
export class ScreenHeightDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const height = window.screen.height + 'px';
    this.renderer.setStyle(this.el.nativeElement, 'min-height', height);
  }
}
