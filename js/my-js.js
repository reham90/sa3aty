$(document).ready(function() {


    // start js for navbar //

    (function($) { // Begin jQuery36.
        $(function() { // DOM ready
            // If a link has a dropdown, add sub menu toggle.
            $('nav ul li a').click(function(e) {
                this.classList.toggle("active");
                $(this).siblings('.nav-dropdown').slideToggle(200);
                $(this).children('i').toggle();

                // Close one dropdown when selecting another
                $('.nav-dropdown').not($(this).siblings()).hide();

                 
                e.stopPropagation();
            });
            // Clicking away from dropdown will remove the dropdown class

            
         

            $('.re-dropdown').click(function(e) {
                $('.drop-mobile').toggle();
               $('.nav-dropdown').hide();
              
                


                // Close one dropdown when selecting another
            });


            // Toggle open and close nav styles on click
            $('.nav-toggle').click(function() {
                $(".re-show").toggle();
                $(".re-hide").css("display", "block");
                $(".cover").toggle();
            });
            $('.re-show').click(function(event) {
                if (document.dir == "rtl") {
                    $('nav ').css("right", "0");
                } else {
                    $('nav ').css("left", "0");

                }
                $("body").css("overflow", "hidden");
                $(".navv").toggle();
                if ($('.nav-list').hasClass('dismiss')) {
                    $('.nav-list').removeClass('dismiss').addClass('selected').show();
                }
                event.preventDefault();
            });
            $('.re-hide').click(function(event) {
                if ($('.nav-list').hasClass('selected')) {
                    $('.nav-list').removeClass('selected').addClass('dismiss');
                }
                event.preventDefault();
                $("body").css("overflow", "auto");
                $(".cover").toggle();
                $(".re-show").toggle();
            });
            $('.cover').on('click', function() {
                $(".re-hide").click();
            });

        }); // end DOM ready
    })(jQuery); // end jQuery83"9?"

    // end  js for navbar //


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // start footer accordion  //
    if ($(window).width() < 991) {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function myFunction(y) {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;

                $(this).siblings(".panel").slideToggle(200);



            });
        }
        $(".accordion").click(function() {
            $(this).children('i').toggle();

        });
    }
    //end footer accordion //

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // start slider carousel //
    var owl = $('.slider');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-right right-arrow'></i>", "<i class='fas fa-angle-left left-arrow'></i>"],
        responsive: {
            0: {

                items: 1
            },
            600: {

                items: 1
            },
            1200: {

                items: 1
            }

        }
    })


    // end slider carousel //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // product carousel //

    var owl = $('.product');
    owl.owlCarousel({

        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-right right-arrow'></i>", "<i class='fas fa-angle-left left-arrow'></i>"],
        responsive: {
            0: {
                margin: 15,
                items: 2
            },
            600: {
                margin: 30,
                items: 2
            },
            1200: {
                margin: 30,
                items: 4
            }

        }
    })

    // end product carousel //



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // last-arrivals carousel //

    var owl = $('.last-arrivals');
    owl.owlCarousel({

        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,

        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-right right-arrow'></i>", "<i class='fas fa-angle-left left-arrow'></i>"],
        responsive: {
            0: {
                autoplay: true,
                margin: 15,
                items: 2
            },
            600: {
                autoplay: false,
                margin: 30,
                items: 2
            },
            1200: {
                autoplay: false,
                margin: 30,
                items: 4
            }

        }
    })

    // end last-arrivals carousel //
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // last-arrivals carousel //

    var owl = $('.features');
    owl.owlCarousel({

        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,

        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-angle-right right-arrow'></i>", "<i class='fas fa-angle-left left-arrow'></i>"],
        responsive: {
            0: {
                autoplay: true,
                margin: 15,
                items: 1
            },
            600: {
                autoplay: false,
                margin: 30,
                items: 1
            },
            1200: {
                autoplay: false,
                margin: 108,
                items: 4
            }

        }
    })

    // end last-arrivals carousel //
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // testimonial carousel //


    var owl = $('.testimonial');
    owl.owlCarousel({

        nav: false,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                margin: 15,
                items: 1
            },
            600: {
                margin: 30,
                items: 1
            },
            1200: {
                margin: 33,
                items: 2
            }

        }
    })

    // end testimonial carousel //

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /// wow js ///
    new WOW().init();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
