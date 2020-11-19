window.addEventListener('DOMContentLoaded', function () {
    $('header').load('load.html .header', funNav);

/*=== data load ===*/
    $.ajax({
        url: 'json/project.json',
        type: 'get',
        data: {},
        success: function (data) {
            var tit, thumb, bref, total, listTag = '';
            function proList() {
                data.project.forEach(function (value, key) {
                    tit = value.tit;
                    thumb = value.thumb;
                    bref = value.bref;
                    total = data.project.length;
                    
                    if(key < 9){key = '0'+(key+1);}
                    if(total < 10){total = '0'+total;}
                    
                    listTag +="<a href='work_detail.html' class='work'>";
                    listTag +="<figure>";
                    listTag +="<b>" + (key) + "</b>";
                    listTag +="<img src='" + thumb + "' alt='" + tit + "'>";
                    listTag +="<figcaption>";
                    listTag +="<span class='bref'>";
                    listTag +="<span>|&nbsp;" + bref + "&nbsp;</span>";
                    listTag +="<span>|&nbsp;" + tit + "&nbsp;</span>";
                    listTag +="</span>";
                    listTag +="<span class='order'>";
                    listTag +="<span>&nbsp;" + key + "</span>";
                    listTag +="<span>&nbsp;/&nbsp;" + total + "&nbsp;</span>";
                    listTag +="</span>";
                    listTag +="</figcaption>";
                    listTag +="</figure>";
                    listTag +="</a>";
                }); $('.hidden').append(listTag);
            } proList();
            
            
    /*=== scroll event ===*/
            var winH = window.innerHeight;
            var con = document.querySelector('.hidden');
            var conH = con.offsetHeight;
            var conWork = document.querySelectorAll('.hidden .work');
            var icScroll = document.querySelector('.scroll');

            $(con).on('scroll', workHide);
            
            function workHide(){
                
                var scrollY = $(con).scrollTop();
                conWork.forEach(function(el){
                    var workTop = el.offsetTop;
                    
                    if(workTop < scrollY){
                        el.style="opacity:0; transition:.5s;"
                    }else{
                        el.style="opacity:1; transition:.5s;"
                    }
                });
            }
        } // load end
    });

    
/*=== contents load ===*/
    var con = document.querySelector('.hidden');
    var title = document.querySelector('h1');
    var icScroll = document.querySelector('.scroll');

        setTimeout(conLoad, 30);
        setTimeout(showTit, 230);

    function conLoad() {
        con.style = "transform : scale(1); opacity: 1;";
    }

    function showTit() {
        title.style = "opacity:1;";
        icScroll.style = "opacity:1;";
    }

    function conHide() {
        con.style = "transform : scale(0.5); opacity: 0;";
    }

    function TitHide() {
        title.style = "opacity:0;";
        icScroll.style = "opacity:0;";
    }
    
    function bfMove(){
        conHide();
        setTimeout(TitHide, 50);
    }

    
/*=== menu click event ===*/
    function funNav() {
        var menu = document.querySelector('.navi');

        menu.addEventListener('click', function (e) {
            e.preventDefault();

            var link = e.target.getAttribute('href');
            var page = e.target.dataset.num;

            if (page == 0 || page == 1) {
                
                bfMove();
                setTimeout(pageMv, 820);

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
