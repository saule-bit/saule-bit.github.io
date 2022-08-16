$(function () {
  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
  });

  $('.accordion-header').click(function (event) {
    event.preventDefault();
    var dis = $(this);
    var acr_box = dis.closest('.accordion');
    if (!dis.hasClass('active-accordion')) {
      acr_box.find('.accordion-header').removeClass('active-accordion');
      dis.addClass('active-accordion');
      acr_box.find('.accordion-content').slideUp();
      dis.next().stop(true, true).slideToggle();
    } else {
      dis.removeClass('active-accordion');
      dis.next().stop(true, true).slideUp();
    }
  });
});
