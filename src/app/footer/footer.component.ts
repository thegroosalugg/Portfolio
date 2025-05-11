import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { USER } from 'app/profile/user.profile';
import { FontAwesomeService } from 'app/shared/font.awesome.service';
import { IconService } from 'app/shared/icon.service';

@Component({
     selector: 'app-footer',
      imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
     styleUrl: './footer.component.scss'
})
export class FooterComponent {
  user = USER;
  private icons = inject(IconService);

  constructor() {
    inject(FontAwesomeService);
  }

  angularIcon() {
    return this.icons.get('Angular');
  }
}
