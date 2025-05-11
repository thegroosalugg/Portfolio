import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// @Injectable({ providedIn: 'root' })
// export class FontAwesomeService {
//   constructor(library: FaIconLibrary) {
//     library.addIconPacks(fas, far, fab);
//   }
// }

import {
  faArrowLeft,
  faChevronDown,
  faCodeBranch,
  faEnvelope,
  faFolder,
  faMoon,
  faSun,
  faUser,
  faClone,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

import {
  faUser     as farUser,
  faFolder   as farFolder,
  faClone    as farClone,
  faEnvelope as farEnvelope,
} from '@fortawesome/free-regular-svg-icons';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Injectable({ providedIn: 'root' })
export class FontAwesomeService {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faArrowLeft,
      faChevronDown,
      faCodeBranch,
      faEnvelope,
      faFolder,
      faMoon,
      faSun,
      faUser,
      faClone,
      faGlobe,
      farUser,
      farFolder,
      farClone,
      farEnvelope,
      faGithub,
      faLinkedin
    );
  }
}
