

$(document).ready(function () {
    // console.log("i m working");
    //
    // var slides = document.querySelectorAll('.slider .slide');
    //
    // var currentSlide = 0;
    //
    // var slideInterval = setInterval(nextSlide,1500);
    //
    //
    // function changeSlide(dir){
    //     slides[currentSlide].className = 'slide';
    //     currentSlide = (currentSlide+dir)%slides.length;
    //     if(currentSlide === -1) {
    //         currentSlide = 3;
    //     }
    //     console.log(currentSlide);
    //     index = slides[currentSlide];
    //
    //     slides[currentSlide].className = 'slide slide'+ index  +' vis';
    // }
    //
    //
    // slideInterval;
    // console.log(slideInterval);
    //
    // function clearIterration() {
    //     clearInterval (slideInterval);
    // }
    //
    //
    // function nextSlide() {
    //     changeSlide(1);
    // }
    //
    // function prevSlide() {
    //     changeSlide(-1);
    // }
    //
    //
    // var clearX = 0;
    // $(".arrow-next").click(function () {
    //     nextSlide();
    //     clearX = 1;
    //     if(clearX === 1){
    //         clearIterration();
    //     }
    // });
    // $(".arrow-back").click(function () {
    //     prevSlide();
    //     clearX = 1;
    //     if(clearX === 1){
    //         clearIterration();
    //     }
    // });
    //
    // console.log(clearX);

    $(".m1, .m2, .m3").css({'visibility': 'hidden'});

    $(".img1").mouseover(function () {
        $(".m1").css(
            {'visibility': 'visible'}
        );
    });
    $(".img1").mouseout(function () {
        $(".m1").css(
            {'visibility': 'hidden'}
        );
    });



    $(".img2").mouseover(function () {
        $(".m2").css(
            {'visibility': 'visible'}
        );
    });
    $(".img2").mouseout(function () {
        $(".m2").css(
            {'visibility': 'hidden'}
        );
    });
    $(".img3").mouseover(function () {
        $(".m3").css(
            {'visibility': 'visible'}
        );
    });
    $(".img3").mouseout(function () {
        $(".m3").css(
            {'visibility': 'hidden'}
        );
    });







    var slides = document.querySelectorAll('.slider .slide');
    console.log(slides);

    var currentSlide = 0;

    var slideInterval = setInterval(nextSlide,2500);

    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide vis';
    }



    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [55.61903801, 37.61348509],
            zoom: 16
        });
        myPlacemark = new ymaps.Placemark([55.61903801, 37.61348509], { hintContent: 'GUITAR SCHOOL', balloonContent: 'SM' });

        myMap.geoObjects.add(myPlacemark);

    }
    // var slides2 = document.querySelectorAll('.slider2 .slide2');
    //
    //
    // var currentSlide2 = 0;
    //
    // var slideInterval2 = setInterval(nextSlide,2500);
    //
    // function nextSlide() {
    //     slides2[currentSlide2].className = 'slide2';
    //     currentSlide2 = (currentSlide2+1)%slides.length;
    //     slides2[currentSlide2].className = 'slide2 visi';
    // }
    // slideInterval2;



    //modal WIndow

    function getModal () {


        $(".modal").css({"top": $(window).scrollTop()+150});
        $(".modal").fadeIn();
        $(".modal-overlay").fadeIn();
    }

    function closeModal () {
        $(".modal-overlay").fadeOut();
        $(".modal").fadeOut();
    }
    $(".js-trigger").click(getModal);
    $(".phone-icon").click(getModal);
    $(".block3__button__modal2").click(closeModal);


    $(".button-close").click(closeModal);
    $(".modal-overlay").click(function () {
        $(".modal").fadeOut();
        $(".modal-overlay").fadeOut();
    });
    //modal WIndow

    //IMITATION LOAD

    $(".gif-load").click(function () {
        $(".modal__inp").hide();
        $(".modal__gif").fadeIn();
        setTimeout(function () {
            $(".modal__gif").hide();
            $(".gif-load").hide();
            $(".modal__gif").css({'background-image':'none'});
            $(".modal__gif2").fadeIn();
        }, 2500)
    });

    $(".window-trigger").click(function () {
        $(".window-js").hide();
        $(".window__gif-load").fadeIn();
        $(".window-trigger").hide();
        setTimeout(function () {
            $(".window__gif-load").hide();


            $(".window__gif-load2").fadeIn();
        }, 2500)
    });

    $(".inputs__trigger").click(function () {
        $(".inputs__txt").hide();
        $(".inputs-gif").fadeIn();
        $(".inputs__trigger").hide();
        setTimeout(function () {
            $(".inputs-gif").hide();


            $(".inputs-gif2").fadeIn();
        }, 2500)
    });




    //IMITATION LOAD


    //Scroll------------------------------------------
    $(window).scroll(function () {
        var arrowS = $(window).scrollTop();
        if(arrowS>=632){
            $(".arrow").css("display","block");
        }else {
            $(".arrow").css("display","none");
        }
    });

//Scroll------------------------------------------


    // $(".mb-clear").click(function () {
    //     $('#modal-input').val('');
    //     $('#modal-input1').val('');
    //     $('#modal-input2').val('');
    //     $('#modal-input3').val('');
    // });

});

