/*!

*/
!function(){"use strict";const e=(e,t=!1)=>(e=e.trim(),t?[...document.querySelectorAll(e)]:document.querySelector(e));let t=e("#intro-carousel-indicators");e("#introCarousel .carousel-item",!0).forEach(((e,o)=>{t.innerHTML+=0===o?"<li data-bs-target='#introCarousel' data-bs-slide-to='"+o+"' class='active'></li>":"<li data-bs-target='#introCarousel' data-bs-slide-to='"+o+"'></li>"}));const o=(t,o,i,s=!1)=>{let l=e(o,s);l&&(s?l.forEach((e=>e.addEventListener(t,i))):l.addEventListener(t,i))},i=(e,t)=>{e.addEventListener("scroll",t)};let s=e("#navbar .scrollto",!0);const l=()=>{let t=window.scrollY+200;s.forEach((o=>{if(!o.hash)return;let i=e(o.hash);i&&(t>=i.offsetTop&&t<=i.offsetTop+i.offsetHeight?o.classList.add("active"):o.classList.remove("active"))}))};window.addEventListener("load",l),i(document,l);const a=t=>{let o=e("#header"),i=o.offsetHeight;o.classList.contains("header-scrolled")||(i-=16);let s=e(t).offsetTop;window.scrollTo({top:s-i,behavior:"smooth"})};let n=e("#header");if(n){let e=n.offsetTop,t=n.nextElementSibling;const o=()=>{e-window.scrollY<=0?(n.classList.add("fixed-top"),t.classList.add("scrolled-offset")):(n.classList.remove("fixed-top"),t.classList.remove("scrolled-offset"))};window.addEventListener("load",o),i(document,o)}let r=e(".back-to-top");if(r){const e=()=>{window.scrollY>100?r.classList.add("active"):r.classList.remove("active")};window.addEventListener("load",e),i(document,e)}let c=e(".callout");if(c){const e=()=>{window.scrollY>800?c.classList.add("active"):c.classList.remove("active")};window.addEventListener("load",e),i(document,e)}o("click",".mobile-nav-toggle",(function(t){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bx-menu"),this.classList.toggle("bx-x")})),o("click",".navbar .dropdown > a",(function(t){e("#navbar").classList.contains("navbar-mobile")&&(t.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))}),!0),o("click",".scrollto",(function(t){if(e(this.hash)){t.preventDefault();let o=e("#navbar");if(o.classList.contains("navbar-mobile")){o.classList.remove("navbar-mobile");let t=e(".mobile-nav-toggle");t.classList.toggle("bx-menu"),t.classList.toggle("bx-x")}a(this.hash)}}),!0),window.addEventListener("load",(()=>{window.location.hash&&e(window.location.hash)&&a(window.location.hash)}));const d=()=>f.remove();let f=e("#preloader");f&&window.addEventListener("load",(()=>setTimeout(d)));GLightbox({selector:".glightbox"});let v=e(".skills-content");v&&new Waypoint({element:v,offset:"80%",handler:function(t){e(".progress .progress-bar",!0).forEach((e=>{e.style.width=e.getAttribute("aria-valuenow")+"%"}))}}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",(()=>{let t=e(".portfolio-container");if(t){let i=new Isotope(t,{itemSelector:".portfolio-item"}),s=e("#portfolio-flters li",!0);o("click","#portfolio-flters li",(function(e){e.preventDefault(),s.forEach((function(e){e.classList.remove("filter-active")})),this.classList.add("filter-active"),i.arrange({filter:this.getAttribute("data-filter")}),i.on("arrangeComplete",(function(){AOS.refresh()}))}),!0)}}));GLightbox({selector:".portfolio-lightbox"});new Swiper(".portfolio-details-slider",{speed:400,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",(()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})}))}();
// Hide Header on on scroll down
(function(){var doc = document.documentElement;var w = window;var prevScroll = w.scrollY || doc.scrollTop;var curScroll;var direction = 0;var prevDirection = 0;var header = document.getElementById('header');var checkScroll = function() {
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  curScroll = w.scrollY || doc.scrollTop;if (curScroll > prevScroll) {
        //scrolled up
direction = 2;}else if (curScroll < prevScroll) {
        //scrolled down
direction = 1;}if (direction !== prevDirection) {toggleHeader(direction, curScroll);}prevScroll = curScroll;};var toggleHeader = function(direction, curScroll) {if (direction === 2 && curScroll > 126) {        
        //replace 52 with the height of your header in px
header.classList.add('hide');prevDirection = direction;}else if (direction === 1) {header.classList.remove('hide');prevDirection = direction;}};window.addEventListener('scroll', checkScroll);})();

window.addEventListener('beforeinstallprompt', (event) => {
        // Prevent the mini-infobar from appearing on mobile.
        event.preventDefault();
        console.log('👍', 'beforeinstallprompt', event);
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;
        // Remove the 'hidden' class from the install button container.
        divInstall.classList.toggle('hidden', false);
      });


      butInstall.addEventListener('click', async () => {
        console.log('👍', 'butInstall-clicked');
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          // The deferred prompt isn't available.
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log('👍', 'userChoice', result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        divInstall.classList.toggle('hidden', true);
      });



      window.addEventListener('appinstalled', (event) => {
        console.log('👍', 'appinstalled', event);
        // Clear the deferredPrompt so it can be garbage collected
        window.deferredPrompt = null;
      });