window.addEventListener('DOMContentLoaded', function () {
    $('header').load('load.html .header', funNav);

// === main load ===//
    var conCont = document.querySelector('.con_cont');
    var infoCont = document.querySelector('.info_cont');
    var title = document.querySelector('h1');
    var contTxt = document.querySelectorAll('.cont_txt p');

    setTimeout(conLoad, 30);
    setTimeout(showTit, 230);
    setTimeout(showTxt, 500);


    function conLoad() {
        conCont.style = "top : 0%;";
        infoCont.style = "bottom : 0%;";
    }
    function showTit() {
            title.style = "opacity:1;";
    }
    function showTxt(){
        contTxt.forEach(function(el,idx){
            setInterval(function(){
              el.style = "transform: translateY(0);";
            },(idx+1)*100);
        });
    }
    function conHide() {
        conCont.style = "top : -100%;";
        infoCont.style = "bottom : -100%;";
    }
        function TitHide() {
            title.style = "opacity:0;";

    }
    function bfMove(){
            conHide();
            setTimeout(TitHide, 50);
    }
    

// === menu click ===//

    function funNav() {
        var menu = document.querySelector('.navi');
        menu.addEventListener('click', funIndex);
        
        var logo = document.querySelector('.logo');
        logo.addEventListener('click', funIndex);
            
            function funIndex(e){
                e.preventDefault();

                var link = e.target.getAttribute('href');
                var page = e.target.dataset.num;

             if(link){
                    bfMove();
                    setTimeout(pageMv, 800);

                    function pageMv() {
                        localStorage.page = page;
                        location.href = link;
                    }
                }
            }
//        
//                var page = localStorage.page;
//                menu.children[page].classList.add('active');
        
    
    }
    
    
/*=============================================*/

});
