// alert('Hello');

$(document).ready(function () {
    $('.second-button').on('click', function () {
        $('.nav-icon').toggleClass('open');
    });
});

// paper plane animation

const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x: 300, y: 40},
        {x: 500, y: 100},
        {x: 750, y: -100},
        {x: 400, y: -50},
        {x: 600, y: 50},
        {x: 800, y: 0},
        {x: window.innerWidth, y: -250}
    ]
}

const tween = new TimelineLite();

tween.add (
    TweenLite.to('.paper-plane', 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 1000, // 1000 = 1 second
    triggerHook: 0

})
    .setTween(tween)
    .addIndicators()
    .setPin('.animation')
    .addTo(controller);
