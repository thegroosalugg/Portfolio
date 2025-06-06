import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { USER } from 'app/profile/user.profile';
import { heightAnimation } from './skills.animations';
import { IconService } from 'app/shared/icon.service';
import { ElementRefService } from 'app/shared/element.ref.service';

@Component({
     selector: 'app-skills',
      imports: [],
  templateUrl: './skills.component.html',
     styleUrl: './skills.component.scss',
   animations: [heightAnimation],
})
export class SkillsComponent implements AfterViewInit {
  user    = USER;
  isRow   = signal(false);
  height  = signal(328); // initial CSS values
  width   = signal(450);
  list    = viewChild.required<ElementRef>('list');
  element = viewChild.required<ElementRef>('scrollTo');
  private    iconService = inject(IconService);
  private elementService = inject(ElementRefService);

  ngAfterViewInit() {
    this.elementService.init('skills', this.element());
  }

  getIcon(icon: string) {
    return this.iconService.get(icon);
  }

  toggleGrid() {
    const { clientHeight, clientWidth } = this.list().nativeElement;
    this.height.set(clientHeight);
    this.width.set(clientWidth);
    this.isRow.update((v) => !v);
  }
}
