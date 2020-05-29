$(document).ready(function(){

  var index = false;

  if($('.header-outer').hasClass('header-outer_index')){
    index = true;
  }

  function closeMenu(){
    $('.header-outer').find('.header-menu-burger').removeClass('header-menu-burger_active');
    $('.header-outer').removeClass('header-outer_active');
    $('.header-outer').next('.header-layout').fadeOut(300);
    $('.header-outer').find('.menu-outer').slideUp(200);
    $('.info-outer').slideUp(150);
    if($('body').hasClass('body-compensate')){
      $('body').removeClass('body-compensate')
      $('.header-outer').removeClass('header-compensate');
    }
    if(screen.width < 768){
      $('.menu-col__title_active').each(function(){
        $(this).removeClass('menu-col__title_active');
        $(this).next('.menu-col-links').slideUp(300);
      });
    }
    $('body').removeClass('body-overflow');
  }
  
  function openMenu(){
    $('.header-outer').find('.header-menu-burger').addClass('header-menu-burger_active');
    $('.header-outer').addClass('header-outer_active')
    $('.header-outer').next('.header-layout').fadeIn(300);
    $('.header-outer').find('.menu-outer').slideDown(300);
    if(screen.width < 768){
      $('.info-outer').slideDown(300);
    }

    if (document.body.offsetHeight > window.innerHeight) {
      $('body').addClass('body-compensate');
      $('.header-outer').addClass('header-compensate');
    }
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

  $(document).on('click', '.projects__more', function(e){
    e.preventDefault();
    $(this).hide();
    $('.projects-carousel-item:nth-child(n+5)').show();
  })

  $(document).on('click', '.menu-col__title', function(){
    if(screen.width < 768){
      $(this).toggleClass('menu-col__title_active');
      $(this).next('.menu-col-links').slideToggle(300);
    }
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

  if($('.projects-carousel').length && screen.width > 1023){
    $('.projects-carousel').owlCarousel({
      items: 4,
      loop: true,
      margin: 24,
      nav: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }
  
  if($('.partners-carousel').length && screen.width > 767){
    $('.partners-carousel').owlCarousel({
      items: 4,
      loop: true,
      margin: 40,
      nav: true,
      responsiveClass:true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
      responsive: {
        1024 : {
          items: 6,
        }
      }
    });
  }


  if($('.item-similar-slider').length && screen.width > 1023){
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

  if($('#catalog-map').length){
    ymaps.ready(init);
    function init(){ 
      var myMap = new ymaps.Map("catalog-map", {
          center: [55.76, 37.64],
          zoom: 7,
      });
    }
  }
});




