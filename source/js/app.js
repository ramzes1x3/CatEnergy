import * as flsFunction from "./modules/finder_webp.js";

flsFunction.isWebp();
logoChanger();


function logoChanger() {
  var svgLogoHeader = document.querySelector(".page-header__logo");

  const mqt = window.matchMedia("(max-width: 1220px)");
  mqt.addEventListener('change', function(e) {
    if(e.matches){
      document.querySelector(".page-header__logo-desktop").remove();
      svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-tablet" focusable="false" width="202px" height="59px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-tablet"></use> </svg>')
    } else{
      document.querySelector(".page-header__logo-tablet").remove();
      svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-desktop" focusable="false" width="202px" height="59px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-desktop"></use> </svg>')
    }
  });

  const mqb = window.matchMedia("(max-width: 767.98px)");
  mqb.addEventListener('change', function(e) {
    if(e.matches){
      document.querySelector(".page-header__logo-tablet").remove();
      svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-mobile" focusable="false" width="202px" height="59px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-mobile"></use> </svg>')
    } else{
      document.querySelector(".page-header__logo-mobile").remove();
      svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-tablet" focusable="false" width="202px" height="59px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-tablet"></use> </svg>')
    }
  });
}
