export function burgerToggle(){
  const burgerBtn = document.querySelector('.page-header__wrapper-btn');

  if(burgerBtn){
    const mainNav = document.querySelector('.main-nav');
    burgerBtn.addEventListener("click", function(e) {
      document.body.classList.toggle('_lock');
      burgerBtn.classList.toggle('_active');
      mainNav.classList.toggle('_active');
    });
  }
}
