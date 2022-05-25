import $ from 'jquery'
import 'slick-carousel'

// ========== ABOUT-SLIDER ==========

export const aboutSLIDER = $(document).ready(function() {
    $('.about-container__right--slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: true,
        draggable: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        centerMode: true
    })
})

// ========== PARFOLIO-SLIDER ==========

export const portfolioSLIDER = $(document).ready(function() {
    $('.team-container__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: true,
        draggable: false,
        arrows: false,
        fade: true,
        dots: true,
        centerMode: true
    })
})

// ========== NEWS-SLIDER ==========

export const newsSLIDER = $(document).ready(function() {
    $('.news-container__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: true,
        draggable: false,
        arrows: false,
        fade: true,
        dots: true,
        speed: 1000,
        centerMode: true
    })
})

