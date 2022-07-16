import { animate, state, style, transition, trigger } from '@angular/animations';
export let fadeL = trigger('fadeL', [

    state('void', style({opacity:0,transform: 'translateY(-20px)'})),
    transition(':enter', [ //void <=> *
      animate(1000)
    ])
  ])

export let fadeR = trigger('fadeR', [

    state('void', style({opacity:0,transform: 'translateX(20px)'})),
    transition(':enter', [ //void <=> *
      animate(1000)
    ])
  ])

export let fadeZ = trigger('fadeZ', [

    state('void', style({opacity:0,transform: 'scale(.8)'})),
    transition(':enter', [ //void <=> *
      animate(1000)
    ])
  ])