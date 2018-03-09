var TCL = TCL ||
    {
        RUNTIME:{
            swiper:'',
        },
        init:function () {
            this.initElement();
            this.initlayout();
            this.initEvent();
        },
        initElement:function () {
            var R = TCL.RUNTIME
        },
        initlayout:function () {
            console.log($(window).height());
            $('.main-container').css('height',$(window).height()) ;
        },
        initEvent:function () {
            this.loadingSwiper();
        },
        loadingSwiper:function () {
            var R = TCL.RUNTIME;
             R.swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                mousewheel: true,
                hashNavigation: {
                    watchState: true,
                },
                on: {
                }
             })
        },
        //获取url的锚节点
        getAnchor:function () {

        },
        //动画
        animationTo: function (idx) {
            switch (idx){
                case '1' :
                    break;
                default:

        }


    };

$(function () {
   TCL.init();
});
//todo: 1.动画2.鼠标3.底部栏4.小icon动画