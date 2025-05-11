import { AfterViewInit, Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FontAwesomeService } from 'app/shared/font.awesome.service';
import { ElementRefService } from 'app/shared/element.ref.service';
import { USER } from 'app/profile/user.profile';

@Component({
     selector: 'app-header',
      imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
     styleUrl: './header.component.scss',
         host: { '[class.hidden]': 'isHidden()' }
})
export class HeaderComponent implements AfterViewInit {
  user = USER;
  private     isDarkMode = signal(false);
  private elementService = inject(ElementRefService);
    header = viewChild.required<ElementRef>('header');
  isHidden = signal(false);
   getIcon = computed(() => this.isDarkMode() ? 'moon' : 'sun');
   getName = computed(() => this.isDarkMode() ? 'Dark' : 'Light');
     paths = ['profile', 'skills', 'projects', 'form'] as const;

  constructor() {
    inject(FontAwesomeService);
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      const { isDark } = JSON.parse(savedTheme);
      if (isDark) this.toggleTheme()
    }
  }

  ngAfterViewInit() {
    this.elementService.init('header', this.header());
  }

  toggleTheme() {
    this.isDarkMode.update((v) => !v);
    localStorage.setItem('theme', JSON.stringify({ isDark: this.isDarkMode() }));
    document.body.classList.toggle('dark-theme', this.isDarkMode());
  }

  toggleMenu() {
    this.isHidden.update((v) => !v);
  }

  scrollTo(index: number) {
    this.elementService.scrollTo(this.paths[index]);
  }
}
