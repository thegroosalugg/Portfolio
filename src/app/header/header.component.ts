import { Component, computed, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeService } from 'app/font.awesome.service';
import { USER } from 'app/user.profile';

@Component({
     selector: 'app-header',
      imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
     styleUrl: './header.component.scss',
         host: { '[class.hidden]': 'isHidden()' }
})
export class HeaderComponent {
  user = USER;
  private isDarkMode = signal(false);
  isHidden = signal(false);
  getIcon = computed(() => this.isDarkMode() ? 'moon' : 'sun');
  getName = computed(() => this.isDarkMode() ? 'Dark' : 'Light');

  constructor() {
    inject(FontAwesomeService);
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      const { isDark } = JSON.parse(savedTheme);
      if (isDark) this.toggleTheme()
    }
  }

  toggleTheme() {
    this.isDarkMode.update((v) => !v);
    localStorage.setItem('theme', JSON.stringify({ isDark: this.isDarkMode() }));
    document.body.classList.toggle('dark-theme', this.isDarkMode());
  }

  toggleMenu() {
    this.isHidden.update((v) => !v);
  }
}
