$(window).on("load", function () {
    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',   
            queue: false
        }
    });
})

$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed('.typed', {
        strings: ['Our First Kaggle Competition', 'WPI CS539', 'Machine Learning'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
        loopCount: Infinity
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    // when window is scrolled, this code will be executed
    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            })

            countUpFinished = true;
        }
    })

    // fancy box
    $("[data-fancybox]").fancybox(); // select all elements with the [data-fancybox] attribute


    // isotope

    // $("#filters a").click(function(){
    //     $("#filters .current").removeClass("current");
    //     $(this).addClass("current");

    //     var selector = $(this).attr("data-filter");

    //     $(".items").isotope({
    //         filter: selector,
    //         animationOptions: {
    //             duration: 1500,
    //             easing: 'linear',
    //             queue: false
    //         }
    //     });
    //     return false; //override the default outcome of clicking
    // })


    // isotope

    // init Isotope
    var $grid = $('.items').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    // bind filter button click
    $('.filters-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });



    // make the navbar stick to the top
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        // when we scroll the window, we will call this function
        var body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.addClass("fixedNav");
        } else {
            body.removeClass("fixedNav");
        }
    }
});



