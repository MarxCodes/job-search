import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
  query,
  animateChild,
} from '@angular/animations';

/**
 * Animations used by the Material drawers.
 * @docs-private
 */
export const drawerTextAnimation = trigger('drawerTextAnimation', [
  transition(':enter', [

    query('.link-removal', style({ transform: 'translateY(-50px)' })),
    query(':animating', style({ transform: 'translateY(-50px)' }), { optional: true }),
    // group([
    //   query('span.h-full', [
    //     animate(1000, keyframes([
    //       style({ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left', offset: 0 }),
    //       style({ opacity: 1, transform: 'scaleX(1)', transformOrigin: 'left', offset: 0.2 }),
    //       style({ opacity: 1, transform: 'scaleX(0)', transformOrigin: 'left', offset: 0.8 }),
    //       style({ opacity: 1, transform: 'scaleX(0)', transformOrigin: 'left', offset: 1 })
    //     ])
    //     )]),
    //   query('.font-header', [
    //     animate(500, keyframes([
    //       style({ opacity: 0, offset: 0.9 }),
    //       style({ opacity: 1, offset: 1 })
    //     ]))
    //   ])
    // ])
  ])
])
export const DrawerAnimations: {
  readonly transformDrawer: AnimationTriggerMetadata;
} = {
  /** Animation that slides a drawer in and out. */
  transformDrawer: trigger('transform', [
    // We remove the `transform` here completely, rather than setting it to zero, because:
    // 1. Having a transform can cause elements with ripples or an animated
    //    transform to shift around in Chrome with an RTL layout (see #10023).
    // 2. 3d transforms causes text to appear blurry on IE and Edge.
    // style({})
    state(
      'open',
      style({
        'transform': 'none'
      }),
    ),
    state('min',
      style({
        'width': '100px',
        'transform': 'none',
        'border': ' 2px solid red'

      })),
    state(
      'void',
      style({
        'width': '0px',
        'transform': 'none'
      }),
    ),

    transition(
      '* => min',
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'),
    ),
    transition(
      '* => open',
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'),
    ),
    transition(
      '* => void',
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    )

  ])

}

// export const DrawerAnimations: {
//   readonly transformDrawer: AnimationTriggerMetadata;
// } = {
//   /** Animation that slides a drawer in and out. */
//   transformDrawer: trigger('transform', [
//     // We remove the `transform` here completely, rather than setting it to zero, because:
//     // 1. Having a transform can cause elements with ripples or an animated
//     //    transform to shift around in Chrome with an RTL layout (see #10023).
//     // 2. 3d transforms causes text to appear blurry on IE and Edge.
//     state(
//       'open',
//       style({
//         'transform': 'none',
//         'visibility': 'visible',
//       }),
//     ),
//     state(
//       'void',
//       style({
//         // Avoids the shadow showing up when closed in SSR.
//         'box-shadow': 'none',
//         'visibility': 'hidden',
//       }),
//     ),
//     // state('min',
//     //   style({
//     //     'width': '150px'
//     //   })
//     // ),
//     // transition('void => open', animate('0ms')),
//     transition(
//       'min <=> open',
//       animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'),
//     ),
//     transition('* => void', [
//       // query('h1', animate(1000, style({ opacity: 1 }))),
//       query(':animating',
//         animate(300,
//           style({ 'transform': 'translateX(-100%)' })
//         ),
//         { optional: true }),

//       query('@*', animateChild(), { optional: true })
//       // query('.link-removal',
//       //   animate(250,
//       //     style({ 'transform': 'translateY(40px)' })))
//     ])

//   ])

//   // ]),
// };
