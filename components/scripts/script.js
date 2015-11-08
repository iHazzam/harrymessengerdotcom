(function() { //code to dynamically launch youtube player for optimisation
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
})();

//pull in youtube thumbnail for image display
function labnolThumb(id) {
    return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}

$(function(){
    var topoffset = 43;
    var wheight = $(window).height(); //grab the height of the window
    $('.fullheight').css('height', wheight);

    $(window).resize(function(){
        var wheight = $(window).height(); //grab the height of the window
        $('.fullheight').css('height', wheight);


    });
    //allow scrolling to target bottom of navbar
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top-topoffset
                    }, 1000);
                    return false;
                }
            }
        });
    $(window).scroll(function(){ //this section highlights the navbar to show where we are
        var windowpos = $(window).scrollTop() + topoffset; //track scroll position of the window (not forgetting we have a top bar)
        $('nav li a').removeClass('active'); //if something is active,remove it
        if (windowpos > $('#aboutme').offset().top){
            $('nav li a').removeClass('active'); // while scrolling, remove the class dynamically
            $('a[href$="#aboutme"]').addClass('active'); //if current anchor has link to this element, make it active
        }
        if (windowpos > $('#mycv').offset().top){
            $('nav li a').removeClass('active'); // while scrolling, remove the class dynamically
            $('a[href$="#mycv"]').addClass('active'); //if current anchor has link to this element, make it active
        }
        if (windowpos > $('#portfolio').offset().top){
            $('nav li a').removeClass('active'); // while scrolling, remove the class dynamically
            $('a[href$="#portfolio"]').addClass('active'); //if current anchor has link to this element, make it active
        }
        if (windowpos > $('#references').offset().top){
            $('nav li a').removeClass('active'); // while scrolling, remove the class dynamically
            $('a[href$="#references"]').addClass('active'); //if current anchor has link to this element, make it active
        }
        if (windowpos > $('#furtherinfo').offset().top){
            $('nav li a').removeClass('active'); // while scrolling, remove the class dynamically
            $('a[href$="#contactme"]').addClass('active'); //if current anchor has link to this element, make it active
        }

    });

    var controller = new ScrollMagic({ //scrollmagic implements tweenmax - controller first!
        globalSceneOptions:{
            triggerHook: "onLeave"
        }
    });



    var pin = new ScrollScene({
      triggerElement: "#nav"
    }).setPin('#nav').addTo(controller);

});