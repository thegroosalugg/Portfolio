import { Component, signal } from '@angular/core';

@Component({
     selector: 'app-header',
      imports: [],
  templateUrl: './header.component.html',
     styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode = signal(false);

  toggleTheme() {
    this.isDarkMode.update((v) => !v);
    document.body.classList.toggle('dark-theme', this.isDarkMode());
  }
}
