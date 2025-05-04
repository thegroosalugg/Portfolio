import { Component } from '@angular/core';
import { USER } from 'app/user.profile';

@Component({
     selector: 'app-footer',
     imports: [],
  templateUrl: './footer.component.html',
     styleUrl: './footer.component.scss'
})
export class FooterComponent {
  user = USER;
}
