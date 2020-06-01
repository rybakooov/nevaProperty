$(document).ready(function(){

  //**** FLAGS ****//
  //* Флаг на главную страницу *//
  var index = false;
  if($('.header-outer').hasClass('header-outer_index')){
    index = true;
  }

  //**** FUCTIONS ****//
  //* Функция закрытия меню *//
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
  
  //* Функция открытия меню *//
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

  //* Функция открытия поп-апа *//
  function openPopup(popup){
    if (document.body.offsetHeight > window.innerHeight) {
      $('body').addClass('body-compensate');
      $('.header-outer').addClass('header-compensate');
    }
    $('body').addClass('body-overflow');
    popup.fadeIn().css('display', 'flex');
  }

  //* Функция закрытия поп-апа *//
  function closePopup(popup){
    popup.fadeOut(400, function(){
      $('body').removeClass('body-overflow');
      if($('body').hasClass('body-compensate')){
        $('body').removeClass('body-compensate');
        $('.header-outer').removeClass('header-compensate');
      }
    });
  }

  //* Функция изменяющая скрытый инпут у кастомного-селектора *//
  function changeInputValue(selector){
    let string = '';
    selector.find('.popup-filter-input-selector-options__item_choosen').each(function(){
      string += $(this).html() + '; ';
    })
    selector.find('input').val(string);
  }

  //* Функция переключает статус селектора *//
  function checkItem(__this){
    __this.toggleClass('popup-filter-input-selector-options__item_choosen');
    __this.closest('.popup-filter-input-selector').addClass('popup-filter-input-selector_notEmpty');
    changeInputValue(__this.closest('.popup-filter-input-selector'));
  }





  //**** EVENTS ****//
  //* Бургер *//
  $(document).on('click', '.header-menu', function(){
    if($('.header-outer').hasClass('header-outer_active')){
      closeMenu();
    } else {
      openMenu();
    }
  })

  //* Задний фон меню *//
  $(document).on('click', '.header-layout', function(){
    closeMenu();
  })

  //* Показать еще проекты *//
  $(document).on('click', '.projects__more', function(e){
    e.preventDefault();
    $(this).hide();
    $('.projects-carousel-item:nth-child(n+5)').show();
  })
  
  //* Раскрытие списков в мобильном меню *//
  $(document).on('click', '.menu-col__title', function(){
    if(screen.width < 768){
      $(this).toggleClass('menu-col__title_active');
      $(this).next('.menu-col-links').slideToggle(300);
    }
  })

  //* Открытие поп-апа [data-popup] *//
  $(document).on('click', '[data-popup]', function(e){
    e.preventDefault();
    if($('.header-outer').hasClass('header-outer_active')){
      closeMenu(openPopup($($(this).data('popup'))));
      return false
    }
    openPopup($($(this).data('popup')));
  })

  //* Закрытие поп-апа (клик вне) *//
  $(document).on('click', '.popup', function(e){
    if (this == e.target) {
      closePopup($(this));
    }
  })

  
  //* Закрытие поп-апа (клик вне) *//
  $(document).on('click', '.popup-content__close', function(e){
    closePopup($(this).closest('.popup'));
  })

  //**** INITS ****//
  //* Слайдер-баннер на главной *//
  if($('.banner').length){
    $('.banner').owlCarousel({
      items: 1,
      nav: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }

  //* Слайдер "о компании" типовой *//
  if($('.about-full-aside-galery').length){
    $('.about-full-aside-galery').owlCarousel({
      items: 1,
      nav: true,
      margin: 0,
      center: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }

  //* Слайдер проектов на главной *//
  if($('.projects-carousel').length && screen.width > 1023){
    $('.projects-carousel').owlCarousel({
      items: 4,
      loop: true,
      margin: 24,
      nav: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }
  
  //* Слайдер партнеров на главной *//
  if($('.partners-carousel').length){
    $('.partners-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      margin: 16,
      responsiveClass:true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
      responsive: {
        400 : {
          items: 2,
        },
        767 : {
          margin: 40,
          items: 4,
        },
        1024 : {
          items: 6,
        }
      }
    });
  }

  //* Слайдер с похожими товарами *//
  if($('.item-similar-slider').length && screen.width > 1023){
    $('.item-similar-slider').owlCarousel({
      items: 3,
      margin: 40,
      nav: true,
      navText: ['<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1429 1L1 17L10.1429 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="34" viewBox="0 0 11 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999965 1L10.1428 17L0.999965 33" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    });
  }
  
  //* "Кирпичная кладка" сетки с карточками участков *//
  /*if($('.areas-grid').length){
    $('.areas-grid').masonry({
      itemSelector: '.areas-card',
    });
  }*/

  //* Карта на странице "Контакты" *//
  if($('#contacts-map').length){
    mapboxgl.accessToken = 'pk.eyJ1IjoicnliYWtvb292IiwiYSI6ImNrYXdkN3BsYTE5a2UycXB0YWN5dGkwN3YifQ.OH8c2DpPOXHUSei8v0PXqA';
    let map = new mapboxgl.Map({
      container: 'contacts-map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [30.287984, 59.969304],
      zoom: 13
    });
    let marker = new mapboxgl.Marker()
      .setLngLat([30.287984, 59.969304])
      .addTo(map);
  };

  //* Карта на странице "Участок" *//
  if($('#item-map').length){
  
    mapboxgl.accessToken = 'pk.eyJ1IjoicnliYWtvb292IiwiYSI6ImNrYXdkN3BsYTE5a2UycXB0YWN5dGkwN3YifQ.OH8c2DpPOXHUSei8v0PXqA';
    let map = new mapboxgl.Map({
      container: 'item-map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [30.326082, 59.776781],
      zoom: 13
    });
    let marker = new mapboxgl.Marker()
      .setLngLat([30.326082, 59.776781])
      .addTo(map);
  }

  //* Карта на странице "Каталог (все участки на карте)" *//
  if($('#catalog-map').length){
    mapboxgl.accessToken = 'pk.eyJ1IjoicnliYWtvb292IiwiYSI6ImNrYXdkN3BsYTE5a2UycXB0YWN5dGkwN3YifQ.OH8c2DpPOXHUSei8v0PXqA';
    let map = new mapboxgl.Map({
      container: 'catalog-map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [30.300082, 59.856781],
      zoom: 10
    });
    // disable map zoom when using scroll
    map.scrollZoom.disable();
    var arr = [{
      id: '1',
      center: [30.326082,  59.776781],
      shortAdress: 'Московское ш., выезд из города',
      fullAdress: 'Санкт-Петербург, поселок Шушары, территория предприятия "Ленсоветовское", участок 177',
      purpose: 'АЗС , СТО , Мойки , Рестораны , Склады , Магазины',
      square: '19 500 и 20 000 м2',
    },{
      id: '2',
      center: [30.287984,  59.969304],
      shortAdress: 'Московское ш., выезд из города',
      fullAdress: 'Санкт-Петербург, поселок Шушары, территория предприятия "Ленсоветовское", участок 177',
      purpose: 'АЗС , СТО , Мойки , Рестораны , Склады , Магазины',
      square: '19 500 и 20 000 м2',
    }]



    map.on('load', function() {
      var geojson = {
        'type': 'FeatureCollection',
        'features': []
      };
      
      for(let obj in arr){
        geojson['features'].push({
          'type': 'Feature',
          'properties': {
            'description': `
              <div class="areas-card-desc areas-card-desc_baloon">
                <div class="areas-card-desc-top">
                  <p class="areas-card-desc-top__status">Продается</p>
                  <p class="areas-card-desc-top__status">Коммерческая недвижимость</p>
                </div>
                <div class="areas-card-desc-main">
                  <div class="areas-card-desc-main-top">
                    <p class="areas-card-desc-main-top__title">${arr[obj].shortAdress}</p>
                    <svg class="areas-card-desc-main-top__fav" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 1L16.708 8.89905L25 10.1735L19 16.3186L20.416 25L13 20.8991L5.584 25L7 16.3186L1 10.1735L9.292 8.89905L13 1Z" fill="#FEFEFE" stroke="#6F78E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <p class="areas-card-desc-main__item">
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.28571 18H1.53571V18.75H2.28571V18ZM2.28571 9.85714H3.03571V9.10714H2.28571V9.85714ZM0 9.85714L-0.525531 9.32206C-0.742831 9.53548 -0.809483 9.85912 -0.694195 10.141C-0.578908 10.4229 -0.304577 10.6071 0 10.6071L0 9.85714ZM8 2L8.52553 1.46491L8 0.948767L7.47447 1.46491L8 2ZM16 9.85714V10.6071C16.3046 10.6071 16.5789 10.4229 16.6942 10.141C16.8095 9.85912 16.7428 9.53548 16.5255 9.32206L16 9.85714ZM13.7143 9.85714V9.10714H12.9643V9.85714H13.7143ZM13.7143 18V18.75H14.4643V18H13.7143ZM9.71429 18H8.96429V18.75H9.71429V18ZM9.71429 12.2857H10.4643V11.5357H9.71429V12.2857ZM6.28571 12.2857V11.5357H5.53571V12.2857H6.28571ZM6.28571 18V18.75H7.03571V18H6.28571ZM3.03571 18V9.85714H1.53571V18H3.03571ZM2.28571 9.10714H0V10.6071H2.28571V9.10714ZM0.525531 10.3922L8.52553 2.53509L7.47447 1.46491L-0.525531 9.32206L0.525531 10.3922ZM7.47447 2.53509L15.4745 10.3922L16.5255 9.32206L8.52553 1.46491L7.47447 2.53509ZM16 9.10714H13.7143V10.6071H16V9.10714ZM12.9643 9.85714V18H14.4643V9.85714H12.9643ZM13.7143 17.25H9.71429V18.75H13.7143V17.25ZM10.4643 18V12.2857H8.96429V18H10.4643ZM9.71429 11.5357H6.28571V13.0357H9.71429V11.5357ZM5.53571 12.2857V18H7.03571V12.2857H5.53571ZM6.28571 17.25H2.28571V18.75H6.28571V17.25Z" fill="#6F78E5"></path>
                    </svg>
                    ${arr[obj].purpose}
                  </p>
                  <p class="areas-card-desc-main__item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.2667 2.13333V0M13.8667 3.73333H16M13.8667 12.2667H16M12.2667 13.8667V16M3.73333 13.8667V16M2.13333 12.2667H0M2.13333 3.73333H0M3.73333 2.13333V0M3.73333 3.73333V12.2667H12.2667V3.73333H3.73333Z" stroke="#6F78E5" stroke-width="1.5"></path>
                    </svg>
                    ${arr[obj].square}
                  </p>
                </div>
                <p class="areas-card-desc__where">
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6905 7.00002C14.6905 10.3663 10.1191 16.1429 8.59527 16.9048C7.07146 16.1429 2.50003 10.3663 2.50003 7.00002C2.50003 3.63372 5.22896 0.904785 8.59527 0.904785C11.9616 0.904785 14.6905 3.63372 14.6905 7.00002ZM10.881 7.00002C10.881 8.26239 9.85763 9.28574 8.59527 9.28574C7.3329 9.28574 6.30955 8.26239 6.30955 7.00002C6.30955 5.73766 7.3329 4.71431 8.59527 4.71431C9.85763 4.71431 10.881 5.73766 10.881 7.00002Z" stroke="#6F78E5" stroke-width="1.5"></path>
                  </svg>
                  ${arr[obj].fullAdress}
                </p>
              </div>`,
          },
          'geometry': {
            'type': 'Point',
            'coordinates': arr[obj].center
          }
        })
      }
      geojson.features.forEach(function(marker) {
        var el = document.createElement('div');
        el.className = 'marker';
        new mapboxgl.Marker(el) 
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }) 
            .setHTML(marker.properties.description))
          .addTo(map);
      });
    });

      
  }



  //**** SELECTORS ****//


  //** Клик по Selector-view **//
  $(document).on('click', '.popup-filter-input-selector-view', function(){
    $(this).closest('.popup-filter-input-selector').toggleClass('popup-filter-input-selector_active')
  })


  //** Клик по option **//
  $(document).on('click', '.popup-filter-input-selector-options__item', function(){
    let _this = $(this);

    if(typeof $(this).closest('.popup-filter-input-selector').data('multiple') == 'string'){ 
      //**** MULTIPLE ****//
      checkItem(_this);

      //** Вставляем html в selector-view **//
      let len = $(this).closest('.popup-filter-input-selector').find('.popup-filter-input-selector-options__item_choosen').length;
      $(this).closest('.popup-filter-input-selector').find('.popup-filter-input-selector-view span').html('Выбрано: ' + len);
      
    } else {
      //**** SINGLE ****//
      //**** Удаляем выбранный пункт если он существует ****//
      if($(this).closest('.popup-filter-input-selector-options').find('.popup-filter-input-selector-options__item_choosen').length){
        $(this).closest('.popup-filter-input-selector-options').find('.popup-filter-input-selector-options__item_choosen').removeClass('popup-filter-input-selector-options__item_choosen');
      }

      checkItem(_this);

      //** Вставляем html в selector-view **//
      $(this).closest('.popup-filter-input-selector').find('.popup-filter-input-selector-view span').html($(this).html());
      //** Закрываем селектор **//
      $(this).closest('.popup-filter-input-selector').removeClass('popup-filter-input-selector_active')
    }

    if($(this).closest('.popup-filter-input-selector').find('.popup-filter-input-selector-options__item_choosen').length == 0){
      $(this).closest('.popup-filter-input-selector').removeClass('popup-filter-input-selector_notEmpty');
    }
  })


  //** Клик вне открытого селектора **//
  $(document).mouseup(function (e){ 
    var div = $(".popup-filter-input-selector_active");
    if (!div.is(e.target) && div.has(e.target).length === 0) { 
      div.removeClass('popup-filter-input-selector_active');
    }
  });

});




