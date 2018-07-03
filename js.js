$('.searchbutton').on('click', function () {

    $('.title, .year, .director, .imbd').remove();
    
    var $title = $('.search').val();
    var $url = 'http://www.omdbapi.com/?t=' + $title + '&apikey=74184ade';

    $.get($url, function (data) {

        $('.poster').attr('src', data.Poster);
        /*var testtext = 'Title : ' + data.Title;
        var $append = $('<div/>', {
            class: 'onimg anim title'
        }).append($('<span/>', {
            text: testtext
        }));*/

        $('.containerofinput')
        .after($('<div/>',{class:'main onimg anim title'})
        .append($('<div/>',{class: 'card'})
        .append($('<div/>',{class:'front',text:'TITLE'}))
        .append($('<div/>',{class:'back', text: data.Title}))));

        $('.title')
        .after($('<div/>',{class:'main onimg anim year'})
        .append($('<div/>',{class: 'card'})
        .append($('<div/>',{class:'front',text:'YEAR'}))
        .append($('<div/>',{class:'back', text: data.Year}))));

        $('.year')
        .after($('<div/>',{class:'main onimg anim director'})
        .append($('<div/>',{class: 'card'})
        .append($('<div/>',{class:'front',text:'DIRECTOR'}))
        .append($('<div/>',{class:'back', text: data.Director}))));

        $('.director')
        .after($('<div/>',{class:'main onimg anim imbd'})
        .append($('<div/>',{class: 'card'})
        .append($('<div/>',{class:'front',text:'IMBD'}))
        .append($('<div/>',{class:'back', text: data.imdbRating}))));

       /* $('.containerofinput').after($append);
        var spanWidth = $('.title span').width();
        $('.title').delay(500).animate({
            width: spanWidth
        }, 2000);*/
        //-------------------------------------
        /*testtext = 'Year : ' + data.Year;
        $append = $('<div/>', {
            class: 'onimg anim year'
        }).append($('<span/>', {
            text: testtext
        }));
        $('.title').after($append);
        spanWidth = $('.year span').width();
        $('.year').delay(1000).animate({
            width: spanWidth
        }, 2000);
        //--------------------------------------------
        testtext = 'Director : ' + data.Director;
        $append = $('<div/>', {
            class: 'onimg anim director'
        }).append($('<span/>', {
            text: testtext
        }));
        $('.year').after($append);
        spanWidth = $('.director span').width();
        $('.director').delay(1500).animate({
            width: spanWidth
        }, 2000);
        //----------------------------------------
        testtext = 'Rating : ' + data.imdbRating;
        $append = $('<div/>', {
            class: 'onimg anim imbd'
        }).append($('<span/>', {
            text: testtext
        }));
        $('.director').after($append);
        spanWidth = $('.imbd span').width();
        $('.imbd').delay(2000).animate({
            width: spanWidth
        }, 2000);*/
        //------------------------------------
        $append = $('<img/>', {
            class: 'onimg poster',
            src: data.Poster
        }).delay(3000) ;
        $('.imbd').after($append);
    });








    
});