window.addEventListener('DOMContentLoaded', function () {
    /*=== common area load ===*/
    $('header').load('load.html .header',funNav);
    
    /*=== menu event ===*/
    function funNav(){
    var menu = document.querySelector('.navi');
    
     menu.addEventListener('click',function(e){
         e.preventDefault();
//         
         var link = e.target.getAttribute('href');
         var page = e.target.dataset.num;
         if(page == 0 || page == 1){
//             page = localStorage.page;
//             link = location.href;
             console.log(link);
             console.log(page);
         }else{
             console.log('contact');
         }
     });
    var page = localStorage.page;
//        console.log(menu.children[page]);
       
//menu.children[page].classList.add('active');
    
    }
    
    
    
    
    
    
});