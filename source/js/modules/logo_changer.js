export function logoChanger() {
  var svgLogoHeader = document.querySelector(".page-header__logo");
  var indexPot = document.querySelector(".page-header__can-index");

  if(window.innerWidth > 1220){
    addCanDesktop();
    svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-desktop" focusable="false" width="202px" height="59px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-desktop"></use> </svg>');
  }
  else if (window.innerWidth <= 1220 & window.innerWidth > 767.98){
    addCanTablet();
    svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-tablet" focusable="false" width="174px" height="52px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-tablet"></use> </svg>');
  }
  else {
    addCanMobile();
    svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-mobile" focusable="false" width="190px" height="38px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-mobile"></use> </svg>');
  }

  const mqt = window.matchMedia("(max-width: 1220px)");
  mqt.addEventListener('change', function(e) {
    if(e.matches){
      addCanTablet();
      document.querySelector(".page-header__logo-desktop").remove();
      svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-tablet" focusable="false" width="174px" height="52px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-tablet"></use> </svg>');
    }
    else{
      addCanDesktop();
      document.querySelector(".page-header__logo-tablet").remove();
      svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-desktop" focusable="false" width="202px" height="59px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-desktop"></use> </svg>');
    }
  });

  const mqb = window.matchMedia("(max-width: 767.98px)");
  mqb.addEventListener('change', function(e) {
    if(e.matches){
      addCanMobile();
      document.querySelector(".page-header__logo-tablet").remove();
      svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-mobile" focusable="false" width="190px" height="38px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-mobile"></use> </svg>');
    }
    else{
      addCanTablet();
      document.querySelector(".page-header__logo-mobile").remove();
      svgLogoHeader.insertAdjacentHTML('afterbegin', '<svg role="img" aria-label="Логотип" class="page-header__logo-tablet" focusable="false" width="174px" height="52px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <use xlink:href="sprite/icons.svg#logo-tablet"></use> </svg>');
    }
  });

  function addCanDesktop(){
    indexPot.innerHTML="";
    indexPot.classList.remove('page-header__can--mobile');
    indexPot.classList.remove('page-header__can--tablet');
    indexPot.classList.add('page-header__can--desktop');
    indexPot.insertAdjacentHTML('afterbegin','<picture><source srcset="img/index-can.webp" type="image/webp"><img src="img/index-can.png" alt="Банка кошачье еды с курицей" class="page-header__pot"></picture>');
  }

  function addCanTablet(){
    indexPot.innerHTML="";
    indexPot.classList.remove('page-header__can--mobile');
    indexPot.classList.remove('page-header__can--desktop');
    indexPot.classList.add('page-header__can--tablet');
    indexPot.insertAdjacentHTML('afterbegin','<picture><source srcset="img/index-can-tablet.webp" type="image/webp"><img src="img/index-can-tablet.png" alt="Банка кошачье еды с курицей" class="page-header__pot"></picture>');
  }

  function addCanMobile(){
    indexPot.innerHTML="";
    indexPot.classList.remove('page-header__can--tablet');
    indexPot.classList.remove('page-header__can--desktop');
    indexPot.classList.add('page-header__can--mobile');
    indexPot.insertAdjacentHTML('afterbegin','<picture><source srcset="img/index-can-mobile.webp" type="image/webp"><img src="img/index-can-mobile.png" alt="Банка кошачье еды с курицей" class="page-header__pot"></picture>');
  }
}
