"use strict";

function Transitions() {
  this.morph1 = {
    start: "M0,0 C46,0 112,0 195,0 C327,0 401,0 505,0 C605,0 638,0 728,0 C818,0 844,0 900.3125,0 C960,0 1001,0 1077,0 C1138,0 1178,0 1200,0 L1200,0 L0,0 L0,0 Z",
    middle: 'M0,16 C47,445 112,659 195,659 C327,659 238,135 505,135 C698,135 596,515 728,515 C859,515 780,221 900,221 C1011,221 925,801 1077,801 C1182,801 1223,541 1200,21 L1200,0 L0,0 L0,16 Z',
    end: 'M0,920 C47,920 112,920 195,920 C327,920 401,920 505,920 C605,920 638,920 728,920 C818,920 844,920 900,920 C960,920 1001,920 1077,920 C1138,920 1178,920 1200,920 L1200,0 L0,0 L0,920 Z'
  }

  this.morph2 = {
    start: 'M0,0 C42,0 96,0 163,0 C255,0 290,0 379,0 C464,0 542,0 655,0 C761,0 800,0 869,0 C935,0 955,0 1040,0 C1096,0 1149,0 1200,0 L1200,920 L0,920 L0,0 Z',
    middle: 'M0,895 C13,716 67,627 163,627 C295,627 254,794 379,794 C534,794 478,340 655,340 C839,340 775,647 869,647 C951,647 927,497 1040,497 C1120,497 1173,629 1200,895 L1200,920 L0,920 L0,895 Z',
    end: 'M0,920 C42,920 96,920 163,920 C255,920 290,920 379,920 C464,920 542,920 655,920 C761,920 800,920 869,920 C935,920 955,920 1040,920 C1096,920 1149,920 1200,920 L1200,920 L0,920 L0,920 Z'
  }

}

Transitions.prototype.animate = function() {
  const part1 = document.querySelector('.st0');
  const part2 = document.querySelector('.st1');
  const dur = 1000;
  const easeFunc = 'linear';
  const btn = document.getElementById('start');

  const morph1 = this.morph1;
  const morph2 = this.morph2;
  const displayMenu = this.displayMenu;

  const bgColors = ['#390694', '#71005e', '#072b3c', '#196700', '#670a00', '#020067', '#000', '#da4800']
  let i = Math.floor(Math.random() * bgColors.length);
  let bgColor = bgColors[i];
  part1.setAttribute('style', 'opacity: 1;');
  part1.setAttribute('d', morph1.start);
  part2.setAttribute('style', 'opacity: 0;');
  part2.setAttribute('d', morph2.start);
  btn.setAttribute('style', 'z-index: 0;');

  // animate part 1
  anime({
    targets: '#morph1 .st0',
    d: [
      {
        value: morph1.start
      },
      {
        value: morph1.middle
      },
      {
        value: morph1.end
      }
    ],
    easing: easeFunc,
    duration: dur,
    loop: false,
    opacity: {
      delay: dur + 100,
      duration: 100,
      value: 0.0,
    },
    complete: function() {
      displayMenu();
    },
  });

  anime({
    targets: 'body',
    backgroundColor: bgColor,
    delay: dur,
    duration: 100,
  })

  anime({
    targets: '#morph2 .st1',
    easing: easeFunc,
    delay: dur,
    duration: dur,
    loop: false,
    opacity: {
      value: 1,
      duration: 100,
    },
    d: [
      {
        value: morph2.start
      },
      {
        value: morph2.middle
      },
      {
        value: morph2.end
      }
    ],
    complete: function() {
      btn.setAttribute('style', 'z-index: 3;');
    }
  });
}

Transitions.prototype.displayMenu = function() {
  const menu = document.querySelector('.menu');
  menu.style.display = 'flex';
}

var t = new Transitions();
var btn = document.getElementById('start');
btn.addEventListener('click', t.animate.bind(t));