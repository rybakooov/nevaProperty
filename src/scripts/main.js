$(document).ready(function(){


  var index = false;
  if($('.header-outer').hasClass('header-outer_index')){
    index = true;
  }
  function closeMenu(){
    $('.header-outer').find('.header-menu-burger').removeClass('header-menu-burger_active');
    $('.header-outer').removeClass('header-outer_active')
    $('.header-outer').next('.header-layout').fadeOut(300);
    $('.header-outer').find('.menu-outer').slideUp(200);
    $('body').removeClass('body-overflow');
  }
  function openMenu(){
    $('.header-outer').find('.header-menu-burger').addClass('header-menu-burger_active');
    $('.header-outer').addClass('header-outer_active')
    $('.header-outer').next('.header-layout').fadeIn(300);
    $('.header-outer').find('.menu-outer').slideDown(300);
    $('body').addClass('body-overflow');
  }
  $(document).on('click', '.header-menu', function(){
    if($('.header-outer').hasClass('header-outer_active')){
      closeMenu();
    } else {
      openMenu();
    }
  })


  $(document).on('click', '.header-layout', function(){
    closeMenu();
  })


  if($('.banner').length){
    $('.banner').owlCarousel({
      items: 1,
      nav: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }

  if($('.about-full-aside-galery').length){
    $('.about-full-aside-galery').owlCarousel({
      items: 1,
      nav: true,
      margin: 0,
      center: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }

  if($('.projects-carousel').length){
    $('.projects-carousel').owlCarousel({
      items: 4,
      loop: true,
      margin: 40,
      nav: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }
  
  if($('.partners-carousel').length){
    $('.partners-carousel').owlCarousel({
      items: 6,
      loop: true,
      margin: 40,
      nav: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }


  if($('.item-similar-slider').length){
    $('.item-similar-slider').owlCarousel({
      items: 3,
      margin: 40,
      nav: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }
  

  if($('.areas-grid').length){
    $('.areas-grid').masonry({
      itemSelector: '.areas-card',
    });
  }


  if($('#contacts-map').length){
    ymaps.ready(init);
    function init(){ 
      var myMap = new ymaps.Map("contacts-map", {
          center: [55.76, 37.64],
          zoom: 7
      });
    }
  }


  if($('#item-map').length){
    ymaps.ready(init);
    function init(){ 
      var myMap = new ymaps.Map("item-map", {
          center: [55.76, 37.64],
          zoom: 7
      });
    }
  }
});




