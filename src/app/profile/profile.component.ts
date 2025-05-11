import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeService } from 'app/shared/font.awesome.service';
import { ScrollService } from 'app/shared/scroll.service';
import { USER } from 'app/profile/user.profile';

@Component({
     selector: 'app-profile',
      imports: [FontAwesomeModule],
  templateUrl: './profile.component.html',
     styleUrl: './profile.component.scss'
})
export class ProfileComponent implements AfterViewInit {
  user = USER;
  element = viewChild.required<ElementRef>('scrollTo');
  private scrollService = inject(ScrollService);

  constructor() {
    inject(FontAwesomeService)
  }

  ngAfterViewInit() {
    this.scrollService.init('profile', this.element());
  }
}
