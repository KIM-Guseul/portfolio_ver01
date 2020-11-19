window.addEventListener('DOMContentLoaded', function () {
/*=== common area load ===*/
    $('header').load('load.html .header', funNav);
    
/*=== title event ===*/
    var title = document.querySelector('h1');
    
    setTimeout(showTit, 530);
    
    function showTit() {
        title.style = "opacity:1;";
    }

/*=== menu event ===*/
    function funNav() {
        var menu = document.querySelector('.navi');

        menu.addEventListener('click', function (e) {
            e.preventDefault();

            var link = e.target.getAttribute('href');
            var page = e.target.dataset.num;

            if (page == 0 || page == 1) {
                localStorage.page = page;
                location.href = link;
            } else {
                console.log('contact');
            }
        });
        //        var page = localStorage.page;
        //        menu.children[page].classList.add('active');
    }


});
