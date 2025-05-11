import { ElementRef, Injectable, signal } from '@angular/core';

type Components = 'profile' | 'skills' | 'projects' | 'form';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private elements = signal(new Map<Components, ElementRef>());
  private   height = signal(0);

  init(key: Components, element: ElementRef) {
    this.elements.update((map) => new Map(map).set(key, element));
  }

  setHeight(element: ElementRef) {
    this.height.set(element.nativeElement.offsetHeight);
  }

  scrollTo(key: Components) {
    const targetPosition = this.elements().get(key)?.nativeElement.offsetTop;
    window.scrollTo({
           top: targetPosition - this.height() - 10,
      behavior: 'smooth'
    });
  }
}
