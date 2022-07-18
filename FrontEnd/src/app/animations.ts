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
      animate('1s 600ms ease-out')
    ])
  ])

export let imgani = trigger('imgani', [

    state('void', style({display:'hidden',transform: 'translateY(550px)'})),
    transition(':enter', [ //void <=> *
      animate('.65s 1000ms ease-out')
    ])
  ])

  export let imgani1 = trigger('imgani1', [

    state('void', style({opacity:1,transform: 'translateY(350px)'})),
    transition(':enter', [ //void <=> *
      animate('.55s 1210ms ease-out')
    ])
  ])

  export let letter1 = trigger('letter1', [

    state('void', style({display:'hidden',transform: 'translateX(-700px)'})),
    transition(':enter', [ //void <=> *
      animate('.65s 1000ms ease-out')
    ])
  ])

  export let letter2 = trigger('letter2', [

    state('void', style({display:'hidden',transform: 'translateX(-600px)'})),
    transition(':enter', [ //void <=> *
      animate('.85s 1000ms ease-out')
    ])
  ])

  export let letter3 = trigger('letter3', [

    state('void', style({display:'hidden',transform: 'translateX(-700px)'})),
    transition(':enter', [ //void <=> *
      animate('1.15s 1000ms ease-out')
    ])
  ])

  export let letter4 = trigger('letter4', [

    state('void', style({display:'hidden',transform: 'translateX(-600px)'})),
    transition(':enter', [ //void <=> *
      animate('.55s 1000ms ease-out')
    ])
  ])