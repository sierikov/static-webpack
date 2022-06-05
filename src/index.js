import $ from 'jquery'
import 'slick-carousel'

import './sass/style.sass'

window.$ = window.jQuery = $; // solve $ problem for jquery

console.log("Loaded libs: ", $)

$(".card_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  dots: true,
});
