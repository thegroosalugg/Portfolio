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
      query(':self', [
        style({ height: '{{startHeight}}px', maxWidth: '{{startWidth}}px' }),
      ]),
      query('li', [style({ opacity: 0 })]),
      group([
        query(':self', [
          animate('0.5s ease', style({ height: '*', maxWidth: '*' })),
        ]),
        query('li', [animate('1s ease', style({ opacity: 1 }))]),
      ]),
    ],
    { params: { startHeight: 0, startWidth: 0 } }
  ),
]);
