import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
} from '@angular/core';
import { ElementRefService } from './element.ref.service';

@Directive({
  selector: '[appView]',
})
export class ViewHeightDirective {
         appView = input<'short' | ''>();
      elementRef = inject(ElementRef);
        renderer = inject(Renderer2);
  elementService = inject(ElementRefService);

  constructor() {
    effect(() => {
      let offset = this.elementService.getOffSetHeight('header');
      if (this.appView() === 'short') {
        // offset by additional 140
        offset += this.elementService.getOffSetHeight('footer') + 140;
      }
      const height = window.screen.availHeight - offset + 'px';
      this.renderer.setStyle(this.elementRef.nativeElement, 'min-height', height);
      this.renderer.setStyle(this.elementRef.nativeElement, 'max-height', '100%');
    });
  }
}
