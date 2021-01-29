$(window).on("scroll touchmove", function () {
            if ($(document).scrollTop() >= -0 + $('#img1').position().top && $(document).scrollTop() < $('#img2').position().top) {
                $('body').css('background-image', 'url(img/Michelle_Pattern_1.png)')

                // $('#img1').css('box-shadow','0px 0px 0px 2px black')
                // $('img#backgroundImg').attr('src','./img/Michelle_Pattern_1.jpg');
            };
            
            if ($(document).scrollTop() >= -100 + $('#img2').position().top && $(document).scrollTop() < $('#img3').position().top) {
                $('body').css('background-image', 'url(img/Michelle_Pattern_2.png)')

                // $('#img2').css('box-shadow','0px 0px 0px 2px black')
                // $('#backgroundImg').attr('src','./img/Michelle_Pattern_2.jpg');
            };

            if ($(document).scrollTop() >= -0 + $('#img3').position().top && $(document).scrollTop() < $('#img4').position().top) {
                $('body').css('background-image', 'url(img/Michelle_Pattern_3.png)')

                // $('#backgroundImg').attr('src','./img/Michelle_Pattern_2.jpg');
            };

            if ($(document).scrollTop() >= -00 + $('#img4').position().top && $(document).scrollTop() < $('#img5').position().top) {
                $('body').css('background-image', 'url(img/Michelle_Pattern_4.png)')

                // $('#backgroundImg').attr('src','./img/Michelle_Pattern_2.jpg');
            };

            if ($(document).scrollTop() >= -00 + $('#img5').position().top && $(document).scrollTop() < $('#img6').position().top) {
                $('body').css('background-image', 'url(img/Michelle_Pattern_5.png)')

                // $('#backgroundImg').attr('src','./img/Michelle_Pattern_2.jpg');
            };

            
            
            
            
            
            
            
            
            if ($(document).scrollTop() >= $('#img6').position().top) {

                $('body').css('background-image', 'url(img/Michelle_Pattern_6.jpg)')
            // $('#backgroundImg').attr('src','./img/Michelle_Pattern_3.jpg');
        };
        });






