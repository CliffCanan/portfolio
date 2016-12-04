$(document).ready(function () {


    particlesJS('home',
      {
          "particles": {
              "number": {
                  "value": 80,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": "#ffffff"
              },
              "shape": {
                  "type": "circle",
                  "stroke": {
                      "width": 0,
                      "color": "#000000"
                  },
                  "polygon": {
                      "nb_sides": 5
                  },
                  "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                  }
              },
              "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 5,
                  "random": true,
                  "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "detect_on": "canvas",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 400,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true,
          "config_demo": {
              "hide_card": false,
              "background_color": "#b61924",
              "background_image": "",
              "background_position": "50% 50%",
              "background_repeat": "no-repeat",
              "background_size": "cover"
          }
      }

    );

    $("#text-scroll").typed({
        strings: [" self-taught coder", " front-end developer", " web/mobile app developer", "n entrepreneur", " fintech entrepreneur", " resilient, scrappy startup vet"],
        typeSpeed: 18,
        backSpeed: 6, // backspacing speed
        backDelay: 2250, // time before backspacing
        loop: true,
        loopCount: 3, // false = infinite
    });

    /*  Navigation Functions */
    if ($(window).scrollTop() === 0)
        $('#main-nav').removeClass('scrolled');
    else
        $('#main-nav').addClass('scrolled');

    $(window).scroll(function () {
        if ($(window).scrollTop() === 0)
            $('#main-nav').removeClass('scrolled');
        else
            $('#main-nav').addClass('scrolled');
    });

    /*  Header Functions  */
    $('.imac-screen').flexslider({
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>',
        animation: 'slide',
        slideshowSpeed: 3000,
        useCSS: true,
        controlNav: false,
        directionNav: false,
        pauseOnAction: false,
        pauseOnHover: false,
        smoothHeight: false
    });

    $("#home .text-col h1").fitText(1, { minFontSize: '38px', maxFontSize: '57px' });
    $("#home .text-col p").fitText(1, { minFontSize: '18px', maxFontSize: '30px' });

    if ($('#home .imac-screen').length)
    {
        $('.imac-screen img').load(function () {
            $('#home .text-col h1, #home .text-col p, #home .imac-frame').addClass('in');
        });
    }
    else
    {
        $('#home .text-col h1, #home .text-col p').addClass('in');
    }

    /* Skills Functions */
    var color = $('#home').css('backgroundColor');
    var defaultColor = color;
    var animateDuration = 1100;

    var percent = 0;

    $('.skills').waypoint(function () {

        $('.chart').each(function () {
            color = $(this).attr('data-color');
            switch (color)
            {
                case 'red':
                    color = '#F05557';
                    break;
                case 'lightred':
                    color = '#f69b9c';
                    break;
                case 'blue':
                    color = '#38A5DB';
                    break;
                case 'lightblue':
                    color = '#79c2e7';
                    break;
                case 'green':
                    color = '#21B799';
                    break;
                case 'lightgreen':
                    color = '#47dec0';
                    break;
                case 'orange':
                    color = '#F78F39';
                    break;
                default:
                    color = defaultColor;
            }

            $(this).easyPieChart({
                size: 136,
                animate: animateDuration,
                scaleColor: false,
                barColor: color,
                trackColor: 'transparent',
                lineWidth: 14
            });

            if (animateDuration < 3600)
                animateDuration += 250;
        });


        $('.skills-percent').each(function () {
            percent = $(this).attr('data-percent');
            $(this).animate({
                width: percent + '%'
            }, 500);
        });

    }, { offset: '80%' });

    $('.highlight').css({ color: defaultColor });

    /* Project thumbs - Masonry */
    $(window).load(function () {

        $('#projects-container').css({ visibility: 'visible' });

        var $portfolio = $('#projects-container').masonry({
            itemSelector: '.project-item:not(.filtered)',
            columnWidth: 310,
            isFitWidth: true,
            isResizable: true,
            isAnimated: !Modernizr.csstransitions,
            gutterWidth: 40,
        });

        scrollSpyRefresh();
        waypointsRefresh();
    });


    /* Awards Carousel */
    $('#carousel').carouFredSel({
        width: '100%',
        items: {
            visible: 'odd+2'
        },
        scroll: {
            pauseOnHover: true,
            onBefore: function () {
                $(this).children().removeClass('hover');
            }
        },
        auto: {
            items: 1,
            easing: 'linear',
            duration: 3500,
            timeoutDuration: 0
        }
    });


    /* Twitter Functions */
    var tweetsLength = $('#twitter-slider').data('tweets-length'),
		widgetID = '804475279586500610';

    var configTweets = {
        "id": widgetID,
        "domId": '',
        "maxTweets": tweetsLength,
        "customCallback": handleTweets,
        "enableLinks": true,
        "dateFunction": '',
        "showUser": true,
        "showTime": true,
        "showRetweet": true,
        "showInteraction": true,
        "showImages": true
    };

    twitterFetcher.fetch(configTweets);

    function handleTweets(tweets) {

        var x = tweets.length,
			n = 0,
			tweetsHtml = '<ul class="slides">';

        while (n < x)
        {
            tweetsHtml += '<li>' + tweets[n] + '</li>';
            n++;
        }

        tweetsHtml += '</ul>';
        $('#twitter-slider').html(tweetsHtml);

        $('.twitter_reply_icon').html("<i class='fa fa-reply'></i>");
        $('.twitter_retweet_icon').html("<i class='fa fa-retweet'></i>");
        $('.twitter_fav_icon').html("<i class='fa fa-heart'></i>");

        $('#twitter-slider').flexslider({
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
            slideshowSpeed: 5000,
            useCSS: true,
            controlNav: false,
            pauseOnAction: false,
            pauseOnHover: true,
            smoothHeight: false
        });
    }


    /* Filter Projects */
    $('#filter-works a').click(function (e) {
        e.preventDefault();

        $('#filter-works li').removeClass('active');
        $(this).parent('li').addClass('active');

        var category = $(this).attr('data-filter');

        $('.project-item').each(function () {
            if ($(this).is(category))
                $(this).removeClass('filtered');
            else
                $(this).addClass('filtered');

            $('#projects-container').masonry('reload');
        });

        scrollSpyRefresh();
        waypointsRefresh();
    });

    /*  Project Preview  */
    $('.project-item').click(function (e) {
        e.preventDefault();

        var elem = $(this),
			title = elem.find('.project-title').text(),
			descr = elem.find('.project-description').html(),
			slidesHtml = '<ul class="slides">',
			elemDataCont = elem.find('.project-description'),
            imgFlag = "";

        if (title == "Nooch Mobile Refactor")
            imgFlag = " class='limit-height'";

        slides = elem.find('.project-description').data('images').split(',');

        for (var i = 0; i < slides.length; ++i)
        {
            slidesHtml = slidesHtml + '<li><img src=' + slides[i] + imgFlag + ' alt=""></li>';
        }

        slidesHtml = slidesHtml + '</ul>';

        $('#project-modal').on('show.bs.modal', function () {
            $(this).find('#hdr-title').text(title);
            $(this).find('#sdbr-title').text(title);
            $(this).find('#project-content').html(descr);
            $(this).find('.screen').addClass('flexslider').html(slidesHtml);

            if (elemDataCont.data('category'))
                $(this).find('#sdbr-category').show().text(elemDataCont.data('category'))
            else
                $(this).find('#sdbr-category').hide();

            if (elemDataCont.data('date'))
                $(this).find('#sdbr-date').show().text(elemDataCont.data('date'))
            else
                $(this).find('#sdbr-date').hide();

            if (elemDataCont.data('tags'))
            {
                var tagsArr = elemDataCont.data('tags').split(',');
                var html = "<div>";
                for (var i = 0; i < tagsArr.length; i++)
                {
                    html += "<div>" + tagsArr[i] + "</div>";
                }
                html += "</div>";
                $(this).find('#sdbr-tags').show().html(html);
            }
            else
                $(this).find('#sdbr-tags').hide();

            if (elemDataCont.data('client'))
                $(this).find('#sdbr-client').show().text(elemDataCont.data('client'))
            else
                $(this).find('#sdbr-client').hide();

            if (elemDataCont.data('link'))
            {
                var extLink = elemDataCont.data('link').split(',');
                $(this).find('#sdbr-link').show().find('a').text(extLink[0]).attr('href', extLink[1]);
            }
            else
                $(this).find('#sdbr-link').hide();

            if (elemDataCont.data('descr'))
                $(this).find('#sdbr-descr').show().text(elemDataCont.data('descr'))
            else
                $(this).find('#sdbr-descr').hide();

            setTimeout(function () {
                $('.screen.flexslider').flexslider({
                    prevText: '<i class="fa fa-angle-left"></i>',
                    nextText: '<i class="fa fa-angle-right"></i>',
                    slideshowSpeed: 4000,
                    animation: 'slide',
                    controlNav: false,
                    pauseOnAction: false,
                    pauseOnHover: true,
                    start: function () {
                        $('#project-modal .screen')
						.addClass('done')
						.prev('.loader').fadeOut();
                    }
                });
            }, 1000);
        }).modal({ backdrop: false });

    });

    $('#project-modal').on('hidden.bs.modal', function () {
        $(this).find('.loader').show();
        $(this).find('.screen')
			.removeClass('flexslider')
			.removeClass('done')
			.html('')
			.flexslider('destroy');
    });


    /* 	ScrollTo Links  */
    $('a.scrollto').click(function (e) {
        $('html,body').scrollTo(this.hash, this.hash, {
            gap: {
                y: -50
            },
            animation: {
                easing: 'easeInOutCubic',
                duration: 1600
            }
        });
        e.preventDefault();

        if ($('.navbar-collapse').hasClass('in'))
            $('.navbar-collapse').removeClass('in').addClass('collapse');
    });

    /*  Contact Form  */
    $(".label_better").label_better({
        easing: "bounce",
        offset: 5
    });

    /*  Tooltips  */
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    /*  Placeholder Detection  */
    if (!Modernizr.input.placeholder)
        $('#contact-form').addClass('no-placeholder');

    /*  Scrolling Animations  */
    $('.scrollimation').waypoint(function () {
        $(this).addClass('in');
    }, {
        offset: function () {
            var h = $(window).height();
            var elemh = $(this).outerHeight();

            if (elemh > h * 0.3)
                return h * 0.7;
            else
                return h - elemh;
        }
    });

    /*  Resize Functions  */
    $(window).resize(function () {
        scrollSpyRefresh();
        waypointsRefresh();
    });

    /*  Refresh scrollSpy function  */
    function scrollSpyRefresh() {
        setTimeout(function () {
            $('body').scrollspy('refresh');
        }, 1000);
    }

    /*  Refresh waypoints function  */
    function waypointsRefresh() {
        setTimeout(function () {
            $.waypoints('refresh');
        }, 1000);
    }

});