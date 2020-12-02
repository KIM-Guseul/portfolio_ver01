window.addEventListener('DOMContentLoaded', function () {
    $('header').load('load.html .header', funNav);

/*=== data load ===*/
    $.ajax({
        url: 'json/project.json',
        type: 'get',
        data: {},
        success: function (data) {
            var tit, titTag='';
            var link, date, work, tech, detail, infoTag = '';
            var cImg, mImg, cTag, mTag = '';
            var total;

            function proList() {
                
                i=localStorage.num;

                tit = data.project[i].tit;
                cImg = data.project[i].cImg;
                mImg = data.project[i].mImg;
                link = data.project[i].link;
                date = data.project[i].date;
                work = data.project[i].work;
                tech = data.project[i].tech;
                detail = data.project[i].detail;
                total = data.project.length;
                
            /*== title ==*/
//                titTag ="<a href='work_detail.html' class='prev' data-num='"+i+"'></a>"+ tit +"<a href='work_detail.html' class='next' data-num='"+i+"'></a>";
                
                titTag = tit;
                
            /*=== preview ===*/
                if(cImg !=''){
                    cTag = "<img src='"+ cImg +"' alt='web preview'>";
                }else{
                    cTag = "<img src='img/none.png' alt='none image'>";
                }
                if(mImg !=''){
                    mTag = "<img src='"+ mImg +"' alt='mobile preview'>";
                }else{
                    mTag = "<img src='img/none.png' alt='none image'>";
                }

            /*== info ==*/
                infoTag ="<div>";
                infoTag +="<a href='"+ link +"' class='git' target='_blank'>Link</a>";
                infoTag +="<div class='info_bref'>";
                infoTag +="<p>|&nbsp;" + date + "</p>";
                infoTag +="<p>|&nbsp;" + work + "</p>";
                infoTag +="<p>|&nbsp;" + tech + "</p>";
                infoTag +="</div>";
                infoTag +="<div class='info_detail'>" + detail + "</div>";

                $('.contents h1').append(titTag);
                $('.con_com').append(cTag);
                $('.con_mob').append(mTag);
                $('.con_info').prepend(infoTag);
            } proList();

        } // load end
    });
    
/*=== contents load ===*/
    var conViewer = document.querySelector('.con_viewer');
    var con_info = document.querySelector('.con_info');
    var title = document.querySelector('h1');
    
    setTimeout(conLoad, 50);
    setTimeout(showTit, 430);
    
    function conLoad() {
        conViewer.style = "top : 0%;";
        con_info.style = "transform:translateY(0%);";
    }
    function showTit(){
        title.style = "opacity:1;";
    }
    function conHide() {
        conViewer.style = "top : -100%;";
        con_info.style = "transform:translateY(100%);";
    }
    function TitHide(){
        title.style = "opacity:0;";
    }
    
    var back = document.querySelector('.con_info .return');
    back.addEventListener('click', funBack);

    function funBack(e){
        e.preventDefault();

        var link = this.href;
        console.log(link)

     if(link){
            conHide();
            setTimeout(TitHide, 100);
            setTimeout(pageMv, 820);

            function pageMv() {
                location.href = link;
            }
        }
    };
    
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

    }


});
