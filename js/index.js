window.addEventListener('DOMContentLoaded', function () {
    $('header').load('load.html .header', funNav);

// === main load ===//
    var conPhoto = document.querySelector('.main_photo');
    var backPhoto = document.querySelector('.back_photo');
    var conIntro = document.querySelector('.introduce');
    var backIntro = document.querySelector('.back_intro');

    setTimeout(backLoad, 300);
    setTimeout(conLoad, 900);

    function backLoad() {
        backPhoto.style = "top : 0%;";
        backIntro.style = "bottom : 0%;";
    }

    function conLoad() {
        conPhoto.style = "top : 0%;";
        conIntro.style = "bottom : 0%;";
    }

    function conHide() {
        conPhoto.style = "top : -100%;";
        conIntro.style = "bottom : -100%;";
        backPhoto.style = "top : -100%;";
        backIntro.style = "bottom : -100%;";
    }
    
    
// === typing effect ===//
    var n = 0;
    var showText = function (target, message, idx, interval, num) {
      var len = message[num].length; // len : 각 행의 문자.length / num : 행.length
        
      if (idx < len) { 
        $(target).append(message[num][idx++]); //행의 문자수만큼 함수 실행
        setTimeout(function () { showText(target, message, idx, interval, num); }, interval);   
          
      }else{
        n += 1;
        idx = 0; 
          
        if( n < message.length ) { //n이 행의 수(3)보다 작을때
            $(target).append("<br>");
            showText(target, message, idx, interval, n); 
        }
      }
    }

    $(document).ready(function() {

        var text = $('.introduce h3').html().split(','); //.split('<br>') h3을 br 기준으로 배열화

        $('.introduce h3').html('');

        setTimeout(function() {    
        showText(".introduce h3", text, 0, 110, 0); 
        }, 2000);
    });


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
