(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},18:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(7),c=t.n(s),o=(t(14),t(8)),l=t.n(o);t(15);var i=function(){return r.a.createElement("div",{id:"home",className:"intro route bg-image background"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}),r.a.createElement("div",{className:"intro-content display-table"},r.a.createElement("div",{className:"table-cell"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Jagmohan Mandre"),r.a.createElement("p",{className:"intro-subtitle"},r.a.createElement("span",{className:"text-slider-items"}),r.a.createElement("strong",{className:"text-slider"},r.a.createElement(l.a,{strings:["Front End Developer","Back End Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),r.a.createElement("p",{className:"pt-3"},r.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#about",role:"button"},"View My Work"))))))},u=t(2),m=t(3),d=t(5),v=t(4),p=t(1),h=t.n(p),f="",b=function(e){Object(d.a)(t,e);var a=Object(v.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).state={logo:f},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=h()("nav").outerHeight();h()(".navbar-toggler").on("click",function(){h()("#mainNav").hasClass("navbar-reduce")||h()("#mainNav").addClass("navbar-reduce")}),h()("body").scrollspy({target:"#mainNav",offset:a}),h()(".js-scroll").on("click",function(){h()(".navbar-collapse").collapse("hide")}),window.addEventListener("scroll",function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:""})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:f}))}),h()('a.js-scroll[href*="#"]:not([href="#"])').on("click",function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=h()(this.hash);if((e=e.length?e:h()("[name="+this.hash.slice(1)+"]")).length)return h()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}}),h()(".js-scroll").on("click",function(){h()(".navbar-collapse").collapse("hide")})}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"navbar-collapse collapse justify-content-center",id:"navbarDefault"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About"))))))}}]),t}(r.a.Component),g=function(e){Object(d.a)(t,e);var a=Object(v.a)(t);function t(){var e;return Object(u.a)(this,t),(e=a.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",percentage:"70%",value:"70"},{id:"CSS3_skill",content:"CSS3",percentage:"70%",value:"70"},{id:"JavaScript_skill",content:"JavaScript",percentage:"90%",value:"90"},{id:"ReactJS_skill",content:"ReactJS",percentage:"80%",value:"80"},{id:"Java_skill",content:"Java",percentage:"75%",value:"75"},{id:"DSALGO_skill",content:"Data Structure and Algorithms",percentage:"75%",value:"75"},{id:"OOPs_skill",content:"OOPS",percentage:"80%",value:"80"}],about_me:[{id:"first-p-about",content:"Software Engineer who loves to transform ideas into reality using code. I am passionate about using Javascript and Animation Libraries to create awesome user experiences."},{id:"second-p-about",content:"With over two years of experience developing web applications using the latest front-end and back-end technologies."},{id:"third-p-about",content:"Motivated designer and developer with experience creating custom websites with ReactJs, JavaScript, HTML5, and CSS3. Strong collaboration skills and proven history of application development. Wordpress and MySQL."}]},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},r.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},r.a.createElement("img",{src:"",className:"img-fluid rounded b-shadow-a",alt:""})))),r.a.createElement("div",{className:"skill-mf"},this.state.skills.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement("span",null,e.content)," ",r.a.createElement("span",{className:"pull-right"},e.percentage),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.percentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})))}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"about-me pt-4 pt-md-0"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map(function(e){return r.a.createElement("p",{className:"lead",key:e.id},e.content)})))))))))}}]),t}(r.a.Component),E=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(b,null),r.a.createElement(i,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(16),t(17),t(18),t(19),t(20);h.a.easing.jswing=h.a.easing.swing,h.a.extend(h.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,r){return h.a.easing[h.a.easing.def](e,a,t,n,r)},easeInQuad:function(e,a,t,n,r){return n*(a/=r)*a+t},easeOutQuad:function(e,a,t,n,r){return-n*(a/=r)*(a-2)+t},easeInOutQuad:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,r){return n*(a/=r)*a*a+t},easeOutCubic:function(e,a,t,n,r){return n*((a=a/r-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,r){return n*(a/=r)*a*a*a+t},easeOutQuart:function(e,a,t,n,r){return-n*((a=a/r-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,r){return n*(a/=r)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,r){return n*((a=a/r-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,r){return-n*Math.cos(a/r*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,r){return n*Math.sin(a/r*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,r){return-n/2*(Math.cos(Math.PI*a/r)-1)+t},easeInExpo:function(e,a,t,n,r){return 0===a?t:n*Math.pow(2,10*(a/r-1))+t},easeOutExpo:function(e,a,t,n,r){return a===r?t+n:n*(1-Math.pow(2,-10*a/r))+t},easeInOutExpo:function(e,a,t,n,r){return 0===a?t:a===r?t+n:(a/=r/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,r){return-n*(Math.sqrt(1-(a/=r)*a)-1)+t},easeOutCirc:function(e,a,t,n,r){return n*Math.sqrt(1-(a=a/r-1)*a)+t},easeInOutCirc:function(e,a,t,n,r){return(a/=r/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,r){var s=1.70158,c=0,o=n;return 0===a?t:1===(a/=r)?t+n:(c||(c=.3*r),o<Math.abs(n)?(o=n,s=c/4):s=c/(2*Math.PI)*Math.asin(n/o),-o*Math.pow(2,10*(a-=1))*Math.sin((a*r-s)*(2*Math.PI)/c)+t)},easeOutElastic:function(e,a,t,n,r){var s=1.70158,c=0,o=n;return 0===a?t:1===(a/=r)?t+n:(c||(c=.3*r),o<Math.abs(n)?(o=n,s=c/4):s=c/(2*Math.PI)*Math.asin(n/o),o*Math.pow(2,-10*a)*Math.sin((a*r-s)*(2*Math.PI)/c)+n+t)},easeInOutElastic:function(e,a,t,n,r){var s=1.70158,c=0,o=n;return 0===a?t:2===(a/=r/2)?t+n:(c||(c=r*(.3*1.5)),o<Math.abs(n)?(o=n,s=c/4):s=c/(2*Math.PI)*Math.asin(n/o),a<1?o*Math.pow(2,10*(a-=1))*Math.sin((a*r-s)*(2*Math.PI)/c)*-.5+t:o*Math.pow(2,-10*(a-=1))*Math.sin((a*r-s)*(2*Math.PI)/c)*.5+n+t)},easeInBack:function(e,a,t,n,r,s){return void 0===s&&(s=1.70158),n*(a/=r)*a*((s+1)*a-s)+t},easeOutBack:function(e,a,t,n,r,s){return void 0===s&&(s=1.70158),n*((a=a/r-1)*a*((s+1)*a+s)+1)+t},easeInOutBack:function(e,a,t,n,r,s){return void 0===s&&(s=1.70158),(a/=r/2)<1?n/2*(a*a*((1+(s*=1.525))*a-s))+t:n/2*((a-=2)*a*((1+(s*=1.525))*a+s)+2)+t},easeInBounce:function(e,a,t,n,r){return n-h.a.easing.easeOutBounce(e,r-a,0,n,r)+t},easeOutBounce:function(e,a,t,n,r){return(a/=r)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,r){return a<r/2?.5*h.a.easing.easeInBounce(e,2*a,0,n,r)+t:.5*h.a.easing.easeOutBounce(e,2*a-r,0,n,r)+.5*n+t}}),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},9:function(e,a,t){e.exports=t(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.dae91cf6.chunk.js.map