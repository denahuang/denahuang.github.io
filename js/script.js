// alert('Hello');

$(document).ready(function () {
    $('.second-button').on('click', function () {
        $('.nav-icon').toggleClass('open');
    });
});

// paper plane animation

const flightPath = {
    curviness: 1.5,
    autoRotate: true,
    values: [
        {x: 100, y: 0},
        {x: -100, y: 0},
        {x: 100, y: -250},
        {x: 100, y: 0},


        // {x: window.innerWidth/5, y: 0},                         // positive y: down
        // {x: window.innerWidth/2, y: 20},                        // negative y: up
        // {x: window.innerWidth-window.innerWidth/4, y: 100},
        // {x: window.innerWidth/4, y: 50},
        // {x: window.innerWidth-window.innerWidth/3, y: 0},
        // {x: window.innerWidth-window.innerWidth/4, y: window.innerHeight/2},
        // {x: window.innerWidth-window.innerWidth/4, y: window.innerHeight/2},
        // {x: window.innerWidth/2, y: window.innerHeight-window.innerHeight/3},
        // {x: -100, y: window.innerWidth/2}

        // {x: 100, y: -20},
        // {x: 300, y: 40},
        // {x: 500, y: 100},
        // {x: 750, y: -100},
        // {x: 400, y: -50},
        // {x: 600, y: 50},
        // {x: 800, y: 0},
        // {x: window.innerWidth, y: -250}
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
    duration: 500,     // 1000 = 1 second
    triggerHook: 0    // 0: top, 1:bottom

})
    .setTween(tween)
    .addIndicators()
    .setPin('.animation')       // stays in area until animation is over
    .addTo(controller);
