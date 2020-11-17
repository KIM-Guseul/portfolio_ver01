window.addEventListener('DOMContentLoaded', function () {
    $('header').load('load.html .header', funNav);

    // === main load ===//
    var conPhoto = document.querySelector('.main_photo');
    var backPhoto = document.querySelector('.back_photo');
    var conIntro = document.querySelector('.introduce');
    var backIntro = document.querySelector('.back_intro');
    var header = document.querySelector('header');

    setTimeout(backLoad, 500);
    setTimeout(conLoad, 1100);
    setTimeout(headLoad, 1800);

    function backLoad() {
        backPhoto.style = "top : 0%;";
        backIntro.style = "bottom : 0%;";
    }

    function conLoad() {
        conPhoto.style = "top : 0%;";
        conIntro.style = "bottom : 0%;";
    }

    function headLoad() {
        header.style = "opacity : 1;";
    }

    function conHide() {
        conPhoto.style = "top : -100%;";
        conIntro.style = "bottom : -100%;";
        backPhoto.style = "top : -100%;";
        backIntro.style = "bottom : -100%;";
    }

    // === mene click ===//

    function funNav() {
        var menu = document.querySelector('.navi');

        menu.addEventListener('click', function (e) {
            e.preventDefault();

            var link = e.target.getAttribute('href');
            var page = e.target.dataset.num;

            if (page == 0 || page == 1) {
                conHide();
                setTimeout(pageMv, 800);

                function pageMv() {
                    localStorage.page = page;
                    location.href = link;
                }
            } else {
                console.log('contact');
            }
        });
        //        var page = localStorage.page;
        //        menu.children[page].classList.add('active');
    }








});
