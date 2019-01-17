$("button").click(function(){
    var years= $(".years").val();
    $(".yearspan").text(years);
});

$("button").click(function(){
    var place= $(".place").val();
    $(".location").text(place);
});

$("button").click(function(){
    var verb= $(".verb").val();
    $(".move").text(verb);
});

$("button").click(function(){
    var shout= $(".shout").val();
    $(".callout").text(shout);
});

$("button").click(function(){
    var person= $(".person").val();
    $(".friend").text(person);
});