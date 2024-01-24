

 document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('header__nav_active');
    document.querySelector('.header__nav-close').classList.toggle('header__nav-close_active');
});
       

document.querySelector('.header__nav-close').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.remove('header__nav_active');
    document.querySelector('.header__nav-close').classList.remove('header__nav-close_active');
  });
  



  