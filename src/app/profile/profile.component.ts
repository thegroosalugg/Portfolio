import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeService } from 'app/shared/font.awesome.service';
import { USER } from 'app/profile/user.profile';

@Component({
     selector: 'app-profile',
      imports: [FontAwesomeModule],
  templateUrl: './profile.component.html',
     styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = USER;

  constructor() {
    inject(FontAwesomeService)
  }
}
