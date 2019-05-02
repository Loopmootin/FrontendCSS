$(document).ready(function () {
    $('#inner-circle-1').click(function () {
        $('#inner-circle-1 h2').addClass("disabled");
        $('#inner-circle-1 p').addClass("disabled");

        TweenMax.to('.inner-circle', 0.5, {
            width: "50%",
            ease: Linear.easeNone,
            repeat: 0
        })

        TweenMax.to('.outer-circle', 1, {
            rotation: 270,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 0.5
        })

        TweenMax.to('#inner-circle-1', 0.5, {
            width: "70vw",
            height: "auto",
            ease: Linear.easeNone,
            repeat: 0,
            delay: 1.5,
            onComplete: function () {
                $('#inner-circle-1 h2').removeClass("disabled");
                $('#inner-circle-1 p').removeClass("disabled");
            }
        })

        $('#inner-circle-2 h2').addClass("disabled");
        $('#inner-circle-3 h2').addClass("disabled");
        $('#inner-circle-4 h2').addClass("disabled");
        $('#inner-circle-2 p').addClass("disabled");
        $('#inner-circle-3 p').addClass("disabled");
        $('#inner-circle-4 p').addClass("disabled");
    });

    $('#inner-circle-2').click(function () {
        $('#inner-circle-2 h2').addClass("disabled");
        $('#inner-circle-2 p').addClass("disabled");

        TweenMax.to('.inner-circle', 0.5, {
            width: "50%",
            ease: Linear.easeNone,
            repeat: 0
        })

        TweenMax.to('.outer-circle', 1, {
            rotation: 180,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 0.5
        })

        TweenMax.to('#inner-circle-2', 0.5, {
            width: "70vw",
            ease: Linear.easeNone,
            repeat: 0,
            delay: 1.5,
            onComplete: function () {
                $('#inner-circle-2 h2').removeClass("disabled");
                $('#inner-circle-2 p').removeClass("disabled");
            }
        })

        $('#inner-circle-1 h2').addClass("disabled");
        $('#inner-circle-3 h2').addClass("disabled");
        $('#inner-circle-4 h2').addClass("disabled");
        $('#inner-circle-1 p').addClass("disabled");
        $('#inner-circle-3 p').addClass("disabled");
        $('#inner-circle-4 p').addClass("disabled");
    });

    $('#inner-circle-3').click(function () {
        $('#inner-circle-3 h2').addClass("disabled");
        $('#inner-circle-3 p').addClass("disabled");

        TweenMax.to('.inner-circle', 0.5, {
            width: "50%",
            ease: Linear.easeNone,
            repeat: 0
        })

        TweenMax.to('.outer-circle', 1, {
            rotation: 90,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 0.5
        })

        TweenMax.to('#inner-circle-3', 0.5, {
            width: "70vw",
            ease: Linear.easeNone,
            repeat: 0,
            delay: 1.5,
            onComplete: function () {
                $('#inner-circle-3 h2').removeClass("disabled");
                $('#inner-circle-3 p').removeClass("disabled");
            }
        })

        $('#inner-circle-2 h2').addClass("disabled");
        $('#inner-circle-1 h2').addClass("disabled");
        $('#inner-circle-4 h2').addClass("disabled");
        $('#inner-circle-2 p').addClass("disabled");
        $('#inner-circle-1 p').addClass("disabled");
        $('#inner-circle-4 p').addClass("disabled");
    });

    $('#inner-circle-4').click(function () {
        $('#inner-circle-4 h2').addClass("disabled");
        $('#inner-circle-4 p').addClass("disabled");

        TweenMax.to('.inner-circle', 0.5, {
            width: "50%",
            ease: Linear.easeNone,
            repeat: 0
        })

        TweenMax.to('.outer-circle', 1, {
            rotation: 0,
            ease: Linear.easeNone,
            repeat: 0,
            delay: 0.5
        })

        TweenMax.to('#inner-circle-4', 0.5, {
            width: "70vw",
            ease: Linear.easeNone,
            repeat: 0,
            delay: 1.5,
            onComplete: function () {
                $('#inner-circle-4 h2').removeClass("disabled");
                $('#inner-circle-4 p').removeClass("disabled");
            }
        })

        $('#inner-circle-2 h2').addClass("disabled");
        $('#inner-circle-3 h2').addClass("disabled");
        $('#inner-circle-1 h2').addClass("disabled");
        $('#inner-circle-2 p').addClass("disabled");
        $('#inner-circle-3 p').addClass("disabled");
        $('#inner-circle-1 p').addClass("disabled");
    });
});



