window.addEventListener('DOMContentLoaded',function(){
    
// === load event ===//
    var conPhoto = document.querySelector('.main_photo');
    var backPhoto = document.querySelector('.back_photo');
    var conIntro = document.querySelector('.introduce');
    var backIntro = document.querySelector('.back_intro');
    var header = document.querySelector('header');

    setTimeout(backLoad,500);
    setTimeout(conLoad,1100);
    setTimeout(headLoad,1800);
    
    function backLoad(){
        backPhoto.style = "top : 0%;";
        backIntro.style = "bottom : 0%;";
    }
    function conLoad(){
        conPhoto.style = "top : 0%;";
        conIntro.style = "bottom : 0%;";
    }
    function headLoad(){
        header.style = "opacity : 1;";
    }
    
    
    
    
    
    
    

});