window.addEventListener('DOMContentLoaded', function () {
    /*=== data load ===*/
    $.ajax({
        url: 'json/project.json',
        type: 'get',
        data: {},
        success: function (data) {
            var tit, titTag='';
            var link, date, work, tech, detail, infoTag = '';
            var img_c, img_p, viewTag = '';
            var total;

            function proList() {

                data.project.forEach(function (value, key) {
                    tit = value.tit;
                    link = value.link;
                    date = value.date;
                    work = value.work;
                    tech = value.tech;
                    detail = value.detail;
                    
                    console.log(tit)

                    total = data.project.length;
                    
                    titTag ="<a href='#' class='prev'></a>"+ tit +"<a href='#' class='next'></a>";

                    infoTag ="<a href='"+ link +"'>Link</a>";
                    infoTag +="<div class='info_bref'>";
                    infoTag +="<p>|&nbsp;" + date + "</p>";
                    infoTag +="<p>|&nbsp;" + work + "</p>";
                    infoTag +="<p>|&nbsp;" + tech + "</p>";
                    infoTag +="</div>";
                    infoTag +="<div class='info_detail'>" + detail + "</div>";
                    


                });  $('.con_info').append(infoTag);
                 $('.contents h1').append(titTag);
                /* $('.con_viewer').append(viewTag);*/

            } proList();
            
    /*=== next prev ===*/


        } // load end
    });




});
