window.addEventListener('DOMContentLoaded', function () {
    /*=== common area load ===*/
    $('header').load('load.html .header',funNav);
    
    /*=== menu event ===*/
    function funNav(){
    var menu = document.querySelector('.navi');
    
     menu.addEventListener('click',function(e){
         e.preventDefault();
         
         var link = e.target.getAttribute('href');
         var page = e.target.dataset.num;
         
         if(page == 0 || page == 1){
             localStorage.page = page;
             location.href = link;
         }else{
             console.log('contact');
         }
     });
//        var page = localStorage.page;
//        menu.children[page].classList.add('active');
    }
    
    
});