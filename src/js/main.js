var TCL = TCL ||
    {
        init:function () {
            this.initElement();
            this.initlayout();
            this.initEvent();
        },
        initElement:function () {

        },
        initlayout:function () {
            console.log($(window).height());
            $('.main-container').css('height',$(window).height()) ;
        },
        initEvent:function () {
            this.loadingSwiper();
        },
        loadingSwiper:function () {
            var swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    };
$(function () {
   TCL.init();
});