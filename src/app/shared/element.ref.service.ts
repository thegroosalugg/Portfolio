import { ElementRef, Injectable, signal } from '@angular/core';

type Components =
  | 'profile'
  | 'skills'
  | 'projects'
  | 'project'
  | 'form'
  | 'header'
  | 'footer';

@Injectable({ providedIn: 'root' })
export class ElementRefService {
  private elements = signal(new Map<Components, ElementRef>());

  init(key: Components, element: ElementRef) {
    this.elements.update((map) => new Map(map).set(key, element));
  }

  getOffSetHeight (key: Components) {
    const element = this.elements().get(key);
    if (!element) return 0;
    return element.nativeElement.offsetHeight;
  }

  scrollTo(key: Components) {
    const targetPosition = this.elements().get(key)?.nativeElement.offsetTop;
    const   headerHeight = this.getOffSetHeight('header');
    window.scrollTo({
           top: targetPosition - headerHeight - 10,
      behavior: 'smooth',
    });
  }
}
