import { animate, state, style, transition, trigger } from '@angular/animations';
export let fadeL = trigger('fadeL', [

    state('void', style({opacity:0})),
    transition(':enter', [ //void <=> *
      animate(1000)
    ])
  ])

export let fadeR = trigger('fadeR', [

    state('void', style({opacity:0})),
    transition(':enter', [ //void <=> *
      animate('1s 300ms ease-out')
    ])
  ])

export let fadeZ = trigger('fadeZ', [

    state('void', style({opacity:0})),
    transition(':enter', [ //void <=> *
      animate(1000)
    ])
  ])

  export let downA = trigger('downA', [

    state('void', style({opacity:0,transform: 'translateY(80px)'})),
    transition(':enter', [ //void <=> *
      animate('1s 1000ms ease-out')
    ])
  ])

// export let imgani = trigger('imgani', [

//     state('void', style({opacity:0,transform: 'translateY(110px)'})),
//     transition(':landing', [ //void <=> *
//       animate('1s 1000ms ease-out')
//     ])
//   ])