$(function () {


    const SLIDE_WRAP = new Swiper('.Slide_wrap', {
        loop: true,
        parallax: true,
        speed: 800,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        slideActiveClass: 'on',
    });

    // let GH = $('.grid_wrap').height();
    // $('.grid_wrap').height(GH / 2);

    // $('.Tab_Menu .fade').on('click', function () {
    //     $('.grid_wrap').height(GH);
    // })





})

