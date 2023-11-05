$(document).ready(function () {
    function initializeSlider(selector) {
        $(selector).slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

    initializeSlider('.slider-myslider-1');

    $('.slider-myslider-1').on('afterChange', function (event, slick, currentSlide) {
        var totalSlides = slick.slideCount;
        var progressWidth = (currentSlide + 1) * (100 / totalSlides) + '%';
        $('.progress-barx').css('width', progressWidth);
    });
});

//left - rightstart - initial colour images names
//lefthover - right - hover images names

$(document).ready(function () {
    $('.navigate img').click(function () {

        $('#leftArrow').attr('src', '../public/left.svg');
        $('#rightArrow').attr('src', '../public/rightstart.png');

        if ($(this).is('#leftArrow')) {

            handleLeftArrowClick();

            $(this).attr('src', '../public/hoverleft.png');
            $(this).css({ 'height': '100px', 'width': '100px' });
        } else if ($(this).is('#rightArrow')) {

            handleRightArrowClick();

            $(this).attr('src', '../public/hoverright.png');
            $(this).css({ 'height': '100px', 'width': '100px' });
        }
    });


    $('#leftArrow').click(handleLeftArrowClick);
    $('#rightArrow').click(handleRightArrowClick);


    var currentSlide = 1;
    var totalSlides = 3;

    function handleLeftArrowClick() {
        currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1;
        // (1 - 2 + 3) % 3 + 1 = 3
        // (2 - 2 + 3) % 3 + 1 = 1
        // (3 - 2 + 3) % 3 + 1 = 2
        $('.slider-myslider-2').slick('slickPrev');

        updateProgressBar();
        updateNumberCount();
    }

    function handleRightArrowClick() {
        $('.slider-myslider-2').slick('slickNext');
        currentSlide = (currentSlide % totalSlides) + 1;
        // (1 % 3) + 1 = 2
        // (2 % 3) + 1 = 3
        // (3 % 3) + 1 = 1

        updateProgressBar();
        updateNumberCount();
    }

    function updateProgressBar() {
        var progress = ((currentSlide - 1) / (totalSlides - 1)) * 100;
        // ((1 - 1) / (3 - 1)) * 100 = 0
        // ((2 - 1) / (3 - 1)) * 100 = 50
        // ((3 - 1) / (3 - 1)) * 100 = 100

        $('.progress-bar').css('width', progress + '%');
    }

    function updateNumberCount() {
        var formattedCount = currentSlide.toString().padStart(2, '0');
        // (0 + 1) * (100 / 3) + '%' = 33.33%
        // (1 + 1) * (100 / 3) + '%' = 33.33%
        // (2 + 1) * (100 / 3) + '%' = 33.33%

        $('.number-count').text(formattedCount + ' / ' + totalSlides);
    }


    function initializeSlider(selector) {
        $(selector).slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }

    initializeSlider('.slider-myslider-2');
});

function changeImage(imageId, imageNumber) {
    var image = document.getElementById('imageToChange');
    var progressBar = document.querySelector('.progress-bar2');

    var newImageSrc;
    var widthPercentage;

    switch (imageId) {
        case 'image1':
            newImageSrc = '../public/Rectangle 17.svg';
            widthPercentage = 20;
            break;
        case 'image2':
            newImageSrc = '../public/image 10.png';
            widthPercentage = 40;
            break;
        case 'image3':
            newImageSrc = '../public/Rectangle 17.svg';
            widthPercentage = 60;
            break;
        case 'image4':
            newImageSrc = '../public/image 10.png';
            widthPercentage = 80;
            break;
        case 'image5':
            newImageSrc = '../public/Rectangle 17.svg';
            widthPercentage = 100;
            break;
        default:
            newImageSrc = '../public/Rectangle 17.svg';
            widthPercentage = 20;
    }

    image.src = newImageSrc;
    progressBar.style.width = widthPercentage + '%';
    document.querySelector('.number-count2').textContent = imageNumber + ' / 05';
}

$(document).ready(function () {


    $('.navigate img').click(function () {
        console.log('Arrow clicked');

        $('#leftArrow1').attr('src', '../public/left.svg');
        $('#rightArrow1').attr('src', '../public/rightstart.png');

        if ($(this).is('#leftArrow1')) {
            console.log('Left arrow clicked');
            handleLeftArrowClick();
            $(this).attr('src', '../public/hoverleft.png');
            $(this).css({ 'height': '53px', 'width': '63px' });
        } else if ($(this).is('#rightArrow1')) {
            console.log('Right arrow clicked');
            handleRightArrowClick();
            $(this).attr('src', '../public/hoverright.png');
            $(this).css({ 'height': '53px', 'width': '63px' });
        }
    });

    $('#leftArrow1').click(LeftArrowClick);
    $('#rightArrow1').click(RightArrowClick);

    function handleLeftArrowClick() {
        console.log('handleLeftArrowClick called');

    }

    function handleRightArrowClick() {
        console.log('handleRightArrowClick called');

    }

    function LeftArrowClick() {
        console.log('LeftArrowClick called');
        var activeCard = $('.slick-active .card');
        $('.slider-myslider-3').slick('slickPrev');
    }

    function RightArrowClick() {
        console.log('RightArrowClick called');
        var activeCard = $('.slick-active .card');
        $('.slider-myslider-3').slick('slickNext');
    }
    function initializeSlider(selector) {
        $(selector).slick({

            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1040,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }
    initializeSlider('.slider-myslider-3');
});

$(document).ready(function () {

    function initializeSlider(selector) {
        $(selector).slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,

            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },



                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }
    initializeSlider('.slider-myslider-4');

});

$(document).ready(function () {

    $('.navigate img').click(function () {
        console.log('Arrow clicked');

        $('#leftArrow2').attr('src', '../public/left.svg');
        $('#rightArrow2').attr('src', '../public/rightstart.png');

        if ($(this).is('#leftArrow2')) {
            console.log('Left arrow clicked');
            handleLeftArrowClick();
            $(this).attr('src', '../public/hoverleft.png');
            $(this).css({ 'height': '53px', 'width': '63px' });
        } else if ($(this).is('#rightArrow2')) {
            console.log('Right arrow clicked');
            handleRightArrowClick();
            $(this).attr('src', '../public/hoverright.png');
            $(this).css({ 'height': '53px', 'width': '63px' });
        }
    });

    $('#leftArrow2').click(LeftArrowClick);
    $('#rightArrow2').click(RightArrowClick);

    function handleLeftArrowClick() {
        console.log('handleLeftArrowClick called');

    }

    function handleRightArrowClick() {
        console.log('handleRightArrowClick called');

    }

    function LeftArrowClick() {
        console.log('LeftArrowClick called');
        var activeCard = $('.slick-active .card');
        $('.slider-myslider-5').slick('slickPrev');
    }

    function RightArrowClick() {
        console.log('RightArrowClick called');
        var activeCard = $('.slick-active .card');
        $('.slider-myslider-5').slick('slickNext');
    }

    function initializeSlider(selector) {
        $(selector).slick({

            infinite: true,
            speed: 300,
            slidesToShow: 3,
            initialSlide: 2,
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },

                {
                    breakpoint: 685,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },

            ]
        });
    }

    initializeSlider('.slider-myslider-5');
});



























