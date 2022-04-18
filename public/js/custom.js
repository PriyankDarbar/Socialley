$(document).ready(function() {
    Scrollbar.initAll();
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('input[name=paymentRadios]').change(function() {
        if (this.value == 'credit') {
            $('#slCreditCard').show();
            $('#slDebittCard').hide();
        } else if (this.value == 'debit') {
            $('#slDebittCard').show();
            $('#slCreditCard').hide();
        }
    });
    $('input[name=PayPalpaymentRadios]').change(function() {
        if (this.value == 'credit') {
            $('#slPayPalCreditCard').show();
            $('#slPayPalDebittCard').hide();
        } else if (this.value == 'debit') {
            $('#slPayPalDebittCard').show();
            $('#slPayPalCreditCard').hide();
        }
    });

    var hash = window.location.hash;
    hash && $('.nav-tabs button[data-bs-target="' + hash + '"]').tab('show');

    console.log(hash);

    $('.nav-tabs a').click(function(e) {
        $(this).tab('show');
        var scrollmem = $('body').scrollTop() || $('html').scrollTop();
        window.location.hash = this.hash;
        $('html,body').scrollTop(scrollmem);
    });

    $('.sl-post-rating-item').on('click', function() {
        $('.sl-post-rating-item').removeClass('sl-rated');

        var thisIndex = $(this).index();
        $('.sl-post-rating-item').html('<i class="far fa-star"></i>');
        for (var i = 0; i <= thisIndex; i++) {
            $('.sl-post-rating-item').eq(i).addClass('sl-rated');
            $('.sl-post-rating-item').eq(i).html('<i class="fas fa-star"></i>');
        }
    });

    $('.navbar-toggler').on('click', function() {
        $('body').toggleClass('sl-menu-open');
    });


    $('.sl-add-event-calendar-content .btn').on('click', function() {
        $('.sl-add-event-calendar-text').addClass('d-block');
    });

    $('.sl-join-Community-content .btn').on('click', function() {
        $('.sl-join-Community-text').addClass('d-block');
    });

    $('.sl-our-community-slider').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '350px',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerPadding: '280px',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '180px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 82 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);
});
CKEDITOR.replace('postText');