$(function(){
    var CN=$('.translate .ch');
    var EN=$('.translate .en');
    var chinese=$('.chinese');
    var english=$('.english');
    var title=$('title');
    var include=$('.header img');
    EN.on('click',function(){
        //include.removeClass('turnt').addClass('turno');
        EN.css({fontWeight:900});
        CN.css({fontWeight:400});
        chinese.css({display:'none'});
        english.css({display:'block'});
        title.text('The confessions of a programmer');
    })
    //EN.on('transtionend',function(){
    //    include.removeClass('turn')
    //})
    CN.on('click',function(){
        include.get(0).className=" ";
        CN.css({fontWeight:900});
        EN.css({fontWeight:400});
        chinese.css({display:'block'});
        english.css({display:'none'});
        title.text('一份程序员的自白书');
    })

})