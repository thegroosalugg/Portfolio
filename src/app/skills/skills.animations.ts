import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const heightAnimation = trigger('heightChange', [
  transition(
    '* => *',
    [
      query(':self', [style({ height: '{{startHeight}}px' })]),
      query('li',    [style({ opacity: 0 })]),
      group([
        query(':self', [animate('0.5s ease', style({ height: '*' }))]),
        query('li',    [animate('0.5s ease', style({ opacity: 1 }))]),
      ]),
    ],
    { params: { startHeight: 0 } }
  ),
]);
