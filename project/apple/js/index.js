$(function(){
   var projectbox=$('.projectbox');
    $(window).on('scroll',function(){
        if($(window).scrollTop()>=200){
            projectbox.addClass('hot');
        }
    })


    var searchIcon=$('ul .sousuoicon');
    var searchhide=$('.searchhide');
    var shade=$('.shade');
    var navHide=$('.nav-hide');
    var inPut=$('.nav-hide input')
    searchIcon.on('click',function(){
        //inPut.css({background:"#343434"})
        navHide.css({display:"block"});
        navHide.toggleClass('active');
        shade.css({display:'block'});
        searchhide.slideToggle();
        searchhide.toggleClass('hide');
    })
    var closed=$('.closed')
    $(closed).on('click',function(){
        navHide.css({display:"none"});
        navHide.removeClass('active');
        shade.css({display:'none'});
        searchhide.slideToggle();
        searchhide.removeClass('hide');
    })

    var block = $('.conte h3');

    $(block).on('click', function () {
//			$(this).next().slideToggle();
        $(this).toggleClass('active');
    })



//////////////////////////////////////////////////////////

var slides=$('.slide');
    var subscript={
        now:0,
        next:null
    }
    next=function(){
        subscript.next=(subscript.now+1>2)?0:subscript.now+1;
        slides.removeClass('zc ri ro zj');
        slides.eq(subscript.now).addClass('zc');
        slides.eq(subscript.next).addClass('ri');
        subscript.now=subscript.next;
    }
    last=function(){
        subscript.next=(subscript.now-1<0)?2:subscript.now-1;
        slides.removeClass('ro zj');
        slides.eq(subscript.now).addClass('ro');
        slides.eq(subscript.next).addClass('zj');
        subscript.now=subscript.next;
    }
    var t=setInterval(next,1500);










})