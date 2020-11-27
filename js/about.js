window.addEventListener('DOMContentLoaded', function (){
    $('header').load('load.html .header', funNav);

/*=== contents load ===*/
    var insta_st = document.querySelector('.insta_st');
    var con_info = document.querySelector('.con_info');
    var title = document.querySelector('h1');
    var icScroll = document.querySelector('.scroll');
    
    setTimeout(conLoad, 30);
    setTimeout(showTit, 430);
    
    function conLoad() {
        insta_st.style = "top : 0%;";
        con_info.style = "bottom : 0%;";
    }
    function showTit(){
        title.style = "opacity:1;";
        icScroll.style = "opacity:1;";
    }
    function conHide() {
        insta_st.style = "top : -100%;";
        con_info.style = "bottom : -100%;";
    }
    function TitHide(){
        title.style = "opacity:0;";
        icScroll.style = "opacity:0;";
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
                conHide();
                setTimeout(TitHide, 100);
                setTimeout(pageMv, 820);

                function pageMv() {
                    localStorage.page = page;
                    location.href = link;
                }
            }
        };
        //        var page = localStorage.page;
        //        menu.children[page].classList.add('active');
    }

///*=== scroll event ===*/
    var conFrame = document.querySelector('.con_info');
    var conDiv = document.querySelector('.con_info > div');
    var page_02 = document.querySelector('.page_02');
    var top_02 = page_02.offsetTop;
    
    $('.con_info').append("<section style='position:fixed;top:0;z-index:1; width:100%;height:100%; overflow:scroll;'><p style='width:100%;height:200%;'></p></section>");
    
    var prePos = 0;
    var sout;
    
    $(".con_info > section").on('scroll',function(e){
        e.preventDefault();
        e.stopPropagation();
 
        var initPos = $(this).scrollTop();
            
        if(initPos > prePos){
            clearTimeout(sout)
            sout = setTimeout(pageDown,50);
           }else{
                if(initPos < top_02) {
                    clearTimeout(sout)
                    sout = setTimeout(pageUp,50);
                }
           }
        prePos = initPos;

    });
   

    function pageUp(){
        conFrame.scrollTo({top: 0,behavior:"smooth"})
    }
    function pageDown(){
        conFrame.scrollTo({top : top_02,behavior:"smooth"})
    }
        
 
        
    
    
    
    
    
    
    
});