$("p").css("color");  //return "p" color
$("p").css("color","red"); //set "p" color
$("p").addClass("header"); // add class "header"
$("p").removeClass("header"); // remove class "header"
$("p").toggleClass("header"); // toggle class "header"

$("p").text("Hello!"); //set text inside html
$("p").html("<p>Hello!</p>"); // innerHTML
$("p").attr("src"); //return href attribute
$("a").attr("href","https://ebay.com"); //set href attribute to ebay.com


$("h1").click(function(){
    $("h1").css("color","blue");
})

$("input").keypress(function(event){
    console.log(event.key);
})

$(document).on("keypress",()=>{
    alert("Stop pressing keys!");
});

$("h1").before("<p>Hello!</p>"); //create html element before element
$("h1").after("<p>Hello!</p>"); //create html element after element
$("h1").prepend("<p>Hello!</p>"); //create element inside element after open tag
$("h1").append("<p>Hello!</p>"); //create element inside element before close tag
$("h1").remove(); //removes query selector targets

$("h1").hide(); //hides element
$("h1").show(); //shows element
$("h1").toggle(); //toggles between show and hide
$("h1").fadeIn(); //fades element in
$("h1").fadeOut(); //fades element out
$("h1").fadeToggle(); //toggle fade in

$("h1").slideUp(); //slide element up
$("h1").slideDown(); //slide element down
$("h1").slideToggle(); //toggle slides

//custom JS animation
$("h1").animate({opacity: 0.5}); //only used for css number properties
$("h1").slideDown().fadeIn().animate({opacity: 0.5}); //these happen one at a time!!

