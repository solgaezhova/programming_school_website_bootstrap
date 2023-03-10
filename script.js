$(document).ready(function () {
  
  // Animation for computer image and mission text moving

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 650) {
      $('.computer-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.computer-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });

  // Projects filtering

  $('.gallery-list-item').click(function () {
    let value = $(this).attr('data-filter');
    if (value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  });

  $('.gallery-list-item').click(function () {
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

  // Animation for pricing cards

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 4300) {
      $('.card-1').addClass('moveFromLeft');
      $('.card-2').addClass('moveFromBottom');
      $('.card-3').addClass('moveFromRight');
    } else {
      $('.card-1').removeClass('moveFromLeft');
      $('.card-2').removeClass('moveFromBottom');
      $('.card-3').removeClass('moveFromRight');
    }
  });
});