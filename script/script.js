//eslint-disable

$(function(){
    $("div#multiTabArea>div").click(function(){
        $("div#multiTabArea>div").removeClass("selected")
    $(this).addClass("selected");
    });
});
