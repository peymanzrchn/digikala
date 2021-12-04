$(function () {
    $("*").on("click", function (e) {
        e.preventDefault();
    });
});

$("#owl-one").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 4,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 3,
            margin: 7,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 3,
            margin: 7,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1200: {
            items: 4,
            margin: 7,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 4,
            margin: 7,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-two").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 4,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 3,
            margin: 7,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 3,
            margin: 7,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 4,
            margin: 7,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 4,
            margin: 7,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-three").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 4,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 5,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

let autoplay = 5000;
let swiper = new Swiper(".swiper-container", {
    paginationClickable: true,
    watchSlidesProgress: true,
    autoplay: autoplay,
    onProgress: move,
});
function move() {
    let elem = document.getElementById("progress");
    let width = 1;
    let autoplayTime = autoplay / 100;
    let id = setInterval(frame, autoplayTime);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}

move();
console.log(swiper);

$("#owl-four").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 5,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 5,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 5,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 5,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-five").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 6,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-six").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 6,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-seven").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 6,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-eight").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 6,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-nine").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 6,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-ten").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 6,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-eleven").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 6,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-twelve").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 6,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});

$("#owl-thirteen").owlCarousel({
    autoplay: false,
    loop: false,
    responsiveClass: true,
    nav: true,
    rtl: true,
    items: 6,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1100: {
            items: 6,
            margin: 5,
            autoplay: true,
            loop: true,
            nav: true,
        },

        1200: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },

        1300: {
            items: 6,
            margin: 5,
            autoplay: false,
            loop: false,
            nav: true,
        },
    },
});
