window.addEventListener('DOMContentLoaded', function (){

    /*=== scroll event ===*/
    var conFrame = document.querySelector('.con_info');
    var frameTop = conFrame.offsetTop;
    var page_01 = document.querySelector('.page_01');
    var top_01 = page_01.offsetTop;
    var page_02 = document.querySelector('.page_02');
    var top_02 = page_02.offsetTop;
    
  

 

        function pageUp(){conFrame.scrollTo({top: 0});}
        function pageDown(){conFrame.scrollTo({top : top_02})}
        
 
        
    });
    
    
    
    
    
    
    
});