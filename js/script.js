// alert('Hello');

$(document).ready(function () {
    $('.second-button').on('click', function () {
        $('.nav-icon').toggleClass('open');
    });
});

// paper plane animation

var flightPath = {
    curviness: 1.5,
    autoRotate: true,
    values: [
        {x: 50, y: 0},
        {x: 100, y: 100},
        {x: 0, y: 200},
        {x: -100, y: 10},
        {x: 0, y: 0},
        {x: 100, y: 100},
        {x: 80, y: 500},
        // {x: -100, y: -50},
        // {x: , y: },

        // {x: window.innerWidth, y: -250}

        // x: left-right
            // positive x: left
            // negative x: right
        // y: up-down
            // positive y: down
            // negative y: up

    ]
}

var tween = new TimelineMax();

tween.add (
    TweenMax.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.animation', 
    duration: 500,     // 1000 = 1 second
    triggerHook: 0    // 0: top, 1:bottom

})
    .setTween(tween)
    .addIndicators()
    // .setPin('.animation')       // stays in area until animation is over
    .addTo(controller);

// message animation

$('.fade-in').each(function(){

    var tween2 = TweenMax.from($(this), 0.3, {
        // duration: 2000,
        autoAlpha: 0, 
        scale: 0.5, 
        x: -100,
        ease:Linear.easeNone,
    });

    var scene2 = new ScrollMagic.Scene({
        triggerElement: this,
    })
    .setTween(tween2)
    .addTo(controller);
});