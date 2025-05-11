import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { USER } from 'app/profile/user.profile';
import { FontAwesomeService } from 'app/shared/font.awesome.service';
import { IconService } from 'app/shared/icon.service';
import { ElementRefService } from 'app/shared/element.ref.service';

@Component({
     selector: 'app-footer',
      imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
     styleUrl: './footer.component.scss'
})
export class FooterComponent {
    user = USER;
  footer = viewChild.required<ElementRef>('footer');
  private    iconService = inject(IconService);
  private elementService = inject(ElementRefService);

  constructor() {
    inject(FontAwesomeService);
  }

  ngAfterViewInit() {
    this.elementService.init('footer', this.footer());
  }

  angularIcon() {
    return this.iconService.get('Angular');
  }
}
