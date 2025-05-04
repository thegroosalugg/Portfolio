import { Component, computed, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeService } from 'app/font.awesome.service';

@Component({
     selector: 'app-header',
      imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
     styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode = signal(false);
  private fonts = inject(FontAwesomeService);
  getIcon = computed(() => this.isDarkMode() ? 'moon' : 'sun')

  constructor() {
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
}
