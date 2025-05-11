import { Injectable } from '@angular/core';
import { ICONS } from './icons';

@Injectable({ providedIn: 'root' })
export class IconService {
  private icons = ICONS;

  get(icon: string) {
    return this.icons[icon as keyof typeof this.icons];
  }
}
