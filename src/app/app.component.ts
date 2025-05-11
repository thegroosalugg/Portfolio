import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ScreenHeightDirective } from './shared/screen.height.directive';
import { ScrollService } from './shared/scroll.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ScreenHeightDirective,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    SkillsComponent,
    ContactFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
  element = viewChild.required<ElementRef>('scrollTo');
  private scrollService = inject(ScrollService);

  ngAfterViewInit() {
    this.scrollService.init('projects', this.element());
  }
}
