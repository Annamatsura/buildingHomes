'use strict';
// var tz = Math.round( ( 305 / 2 ) /  Math.tan( Math.PI / 6 ) );
// alert(tz)

new WOW({
    animateClass: 'animate__animated',
}).init();


$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    speed: 1000,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow: $('.previous-button'),
    nextArrow:$('.next-button'),

            responsive: [
                {
                  breakpoint: 1360,
                  settings: {
                      arrows: false,
                  }
                },

                {
                    breakpoint: 800,
                    settings: {
                        // infinite: true,
                        // speed: 500,
                        // // fade: true,
                        // cssEase: 'linear',
                        //
                        // slidesToShow: 1,
                        // slidesToScroll: 1,
                        // centerMode: true,
                        // variableWidth: true,
                        // focusOnSelect: true,
                        // arrows: false,
                        settings: 'unslick',
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
});

var imgs = $('.slider img');
imgs.each(function(){
    var item = $(this).closest('.item');
    item.css({
        'background-image': 'url(' + $(this).attr('src') + ')',
        'background-position': 'center',
        '-webkit-background-size': 'cover',
        'background-size': 'cover',
        'max-width': '609px',
        'max-height': '405px',
    });
    item.addClass('center-text');
    $(this).hide();
});

let loader = $('.loader');

function postCheck(name, number, agree, nameMistake,
                   numberMistake, agreeMistake, nameVal, numberVal) {
    let flagOk = 1;
    agree.each(function () {
        if ($(this).prop('checked')) {
            flagOk = 1
        }
        else{
            agreeMistake.show();
            flagOk = 0;
        }
    });
    if (nameVal === ''){
        name.css('border-color', '#963232');
        nameMistake.show();
        flagOk = 0;
    }
    if (numberVal === ''){
        number.css('border-color', '#963232');
        numberMistake.show();
        flagOk = 0;
    }
    return flagOk;
}

(function (){

    var carousel = document.querySelector('.carousel2');
    var cellCount = 6;
    var selectedIndex = 0;

    function rotateCarousel() {
        var angle = selectedIndex / cellCount * -360;
        carousel.style.transform = 'translateZ(-519px) rotateY(' + angle + 'deg)';
    }

    var prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener( 'click', function() {
        selectedIndex--;
        rotateCarousel();
    });

    var nextButton = document.querySelector('.next-button');
    nextButton.addEventListener( 'click', function() {
        selectedIndex++;
        rotateCarousel();
    });

    document.getElementById('menu').onclick = function (){
        document.getElementById('show-menu').style.display = 'block';
    }

    document.querySelectorAll('#show-menu *').forEach((item) => {
        item.onclick = () => {
            document.getElementById('show-menu').style.display = 'none';
        }
    })

    document.getElementById('mapBtn').onclick = function (){
        document.getElementById('popup').style.display = 'block';
    }


    document.getElementById('close-popup').onclick = function (){
        document.getElementById('popup').style.display = 'none';
    }

    $('#need-consultation2').click(function () {

        let name = $('#name2');
        let nameVal = name.val();
        let nameMistake = $('#mName2');
        let number = $('#number2');
        let numberVal = number.val();
        let numberMistake = $('#mNumber2');

        let agree = $('#happy2');
        let agreeMistake = $('#mCheck2')


        name.css('border-color', '#ffffff');
        number.css('border-color', '#ffffff');

        agreeMistake.hide();
        nameMistake.hide();
        numberMistake.hide();

        let flagOk = postCheck(name, number, agree, nameMistake, numberMistake, agreeMistake, nameVal, numberVal);

        if (flagOk === 1){
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { name: nameVal}
            })
                .done(function( msg ) {
                    loader.hide();
                    if (msg && msg.success === 1){
                        $('#popup-text').hide();
                        $('#popup-form').hide();
                        $('#thank2').css('display', 'flex');
                        $('#popup-block').css('align-items', 'center');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                });
        }
    })




    document.getElementById('watch-more').onclick = function (){
        document.getElementById('house3').style.display = 'flex';
        document.getElementById('house4').style.display = 'flex';
        document.getElementById('house5').style.display = 'flex';
        document.getElementById('watch-close').style.display = 'flex';
        document.getElementById('watch-more').style.display = 'none';
    }

    document.getElementById('watch-close').onclick = function (){
        document.getElementById('house3').style.display = 'none';
        document.getElementById('house4').style.display = 'none';
        document.getElementById('house5').style.display = 'none';
        document.getElementById('watch-more').style.display = 'flex';
        document.getElementById('watch-close').style.display = 'none';
    }


    $('#need-consultation').click(function () {

        let name = $('#name');
        let nameVal = name.val();
        let nameMistake = $('#mName');
        let number = $('#number');
        let numberVal = number.val();
        let numberMistake = $('#mNumber');

        let agree = $('#happy');
        let agreeMistake = $('#mCheck')


        name.css('border-color', '#ffffff');
        number.css('border-color', '#ffffff');

        agreeMistake.hide();
        nameMistake.hide();
        numberMistake.hide();

        let flagOk = postCheck(name, number, agree, nameMistake, numberMistake, agreeMistake, nameVal, numberVal);

        if (flagOk === 1){
            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { name: nameVal}
            })
                .done(function( msg ) {
                    loader.hide();
                    if (msg && msg.success === 1){
                        $('#consultation-form-id').hide();
                        $('#thank1').css('display', 'flex');
                        $('#consultation-container').css('align-items', 'center');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                    }
                });
        }
    })

    var houseBtn1 = document.getElementById('circle1');
    houseBtn1.addEventListener( 'click', function() {
        $('#mob-text1').css('display', 'block');
        $('#mob-text2').css('display', 'none');
        $('#mob-text3').css('display', 'none');
        $('#mob-text4').css('display', 'none');
        $('#mob-text5').css('display', 'none');
    });

    var houseBtn2 = document.getElementById('circle2');
    houseBtn2.addEventListener( 'click', function() {
        $('#mob-text1').css('display', 'none');
        $('#mob-text2').css('display', 'block');
        $('#mob-text3').css('display', 'none');
        $('#mob-text4').css('display', 'none');
        $('#mob-text5').css('display', 'none');
    });

    var houseBtn3 = document.getElementById('circle3');
    houseBtn3.addEventListener( 'click', function() {
        $('#mob-text1').css('display', 'none');
        $('#mob-text2').css('display', 'none');
        $('#mob-text3').css('display', 'block');
        $('#mob-text4').css('display', 'none');
        $('#mob-text5').css('display', 'none');
    });

    var houseBtn4 = document.getElementById('circle4');
    houseBtn4.addEventListener( 'click', function() {
        $('#mob-text1').css('display', 'none');
        $('#mob-text2').css('display', 'none');
        $('#mob-text3').css('display', 'none');
        $('#mob-text4').css('display', 'block');
        $('#mob-text5').css('display', 'none');
    });

    var houseBtn5 = document.getElementById('circle5');
    houseBtn5.addEventListener( 'click', function() {
        $('#mob-text1').css('display', 'none');
        $('#mob-text2').css('display', 'none');
        $('#mob-text3').css('display', 'none');
        $('#mob-text4').css('display', 'none');
        $('#mob-text5').css('display', 'block');
    });
})()