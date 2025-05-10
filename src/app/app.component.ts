import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ProfileComponent } from "./profile/profile.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
     selector: 'app-root',
      imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SkillsComponent,
    ContactFormComponent
],
  templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
