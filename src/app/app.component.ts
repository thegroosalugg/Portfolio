import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProfileComponent } from "./profile/profile.component";

@Component({
     selector: 'app-root',
      imports: [RouterOutlet, HeaderComponent, FooterComponent, ProfileComponent],
  templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
