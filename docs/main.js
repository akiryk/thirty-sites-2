"use strict";function BlotterAnimations(){this.message="Why, Hello!",this.init()}function Transitions(t){this.blotter=null,t&&(this.blotter=t),this.morph1={start:"M0,0 C46,0 112,0 195,0 C327,0 401,0 505,0 C605,0 638,0 728,0 C818,0 844,0 900.3125,0 C960,0 1001,0 1077,0 C1138,0 1178,0 1200,0 L1200,0 L0,0 L0,0 Z",middle:"M0,16 C47,445 112,659 195,659 C327,659 238,135 505,135 C698,135 596,515 728,515 C859,515 780,221 900,221 C1011,221 925,801 1077,801 C1182,801 1223,541 1200,21 L1200,0 L0,0 L0,16 Z",end:"M0,920 C47,920 112,920 195,920 C327,920 401,920 505,920 C605,920 638,920 728,920 C818,920 844,920 900,920 C960,920 1001,920 1077,920 C1138,920 1178,920 1200,920 L1200,0 L0,0 L0,920 Z"},this.morph2={start:"M0,0 C42,0 96,0 163,0 C255,0 290,0 379,0 C464,0 542,0 655,0 C761,0 800,0 869,0 C935,0 955,0 1040,0 C1096,0 1149,0 1200,0 L1200,920 L0,920 L0,0 Z",middle:"M0,895 C13,716 67,627 163,627 C295,627 254,794 379,794 C534,794 478,340 655,340 C839,340 775,647 869,647 C951,647 927,497 1040,497 C1120,497 1173,629 1200,895 L1200,920 L0,920 L0,895 Z",end:"M0,920 C42,920 96,920 163,920 C255,920 290,920 379,920 C464,920 542,920 655,920 C761,920 800,920 869,920 C935,920 955,920 1040,920 C1096,920 1149,920 1200,920 L1200,920 L0,920 L0,920 Z"}}BlotterAnimations.prototype.init=function(){this.message="Why, Hello!"===this.message?"Okay, Goodbye":"Why, Hello!",this.text=new Blotter.Text(this.message,{family:"'Open Sans', sans-serif",size:220,fill:"#171717",paddingLeft:40,paddingRight:40}),this.initMaterials()},BlotterAnimations.prototype.initMaterials=function(){var t=new Blotter.ChannelSplitMaterial;t.uniforms.uOffset.value=.08,t.uniforms.uRotation.value=40,t.uniforms.uAnimateNoise.value=1.3;var e=this.text,i=new Blotter(t,{texts:e}),n=document.getElementById("menu"),a=i.forText(e);n.innerHTML="",a.appendTo(n);var o=window.innerHeight/2;document.addEventListener("mousemove",function(e){var i=e.clientX/window.innerWidth*180,n=Math.abs(o-e.clientY)/o;t.uniforms.uRotation.value=i,t.uniforms.uOffset.value=.2*n})},Transitions.prototype.animate=function(){var t=document.querySelector(".st0"),e=document.querySelector(".st1"),i=1e3,n="linear",a=document.getElementById("start"),o=this.morph1,s=this.morph2,r=this.displayMenu,l=this.blotter,u=["#390694","#71005e","#072b3c","#196700","#670a00","#020067","#000","#da4800"],d=u[Math.floor(Math.random()*u.length)];t.setAttribute("style","opacity: 1;"),t.setAttribute("d",o.start),e.setAttribute("style","opacity: 0;"),e.setAttribute("d",s.start),a.setAttribute("style","z-index: 0;"),anime({targets:"#morph1 .st0",d:[{value:o.start},{value:o.middle},{value:o.end}],easing:n,duration:i,loop:!1,opacity:{delay:1100,duration:100,value:0},complete:function(){l&&l.init(),r()}}),anime({targets:"body",backgroundColor:d,delay:i,duration:100}),anime({targets:"#morph2 .st1",easing:n,delay:i,duration:i,loop:!1,opacity:{value:1,duration:100},d:[{value:s.start},{value:s.middle},{value:s.end}],complete:function(){a.setAttribute("style","z-index: 3;")}})},Transitions.prototype.displayMenu=function(){document.querySelector(".menu").style.display="flex"};var t=new Transitions(null),btn=document.getElementById("start");btn.addEventListener("click",t.animate.bind(t));
//# sourceMappingURL=main.js.map
