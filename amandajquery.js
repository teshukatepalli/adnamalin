$(document).ready(function(){

///////Home Page///////
    
    $("#accordion").accordion({
        animate: 500,
        active: false,
        collapsible: true,
        event: "click",
        heightStyle: "content"
    });
    
    //Super simple slideshow on homepage 
    var headerImages = ["myphotos/headerimage2.jpg","myphotos/headerimage1.png", "myphotos/headerimage3.png"];
    var focusImage = 1;
    
    $("#headerimage").click(function(){
        var image = headerImages[focusImage];
        focusImage++;
        if (focusImage >2) {
            focusImage=0;
        }
        $("#headerimage").attr("src", image);
    });
    
///////About Page///////
    
    //table viewer
    $( "#Favorites" ).click(function() {
        $("#FavTable").slideToggle("slow");
        $("FavTable").css("display","block");
    });
    
    //image switcher 
    $("#img1").hover(function() {
       $(this).attr("src", "myphotos/sillyimage4.png");
    }, function() {
        $(this).attr("src", "myphotos/AmandaLin-Cropped2.jpg");
    });
    
    $("#img2").hover(function() {
       $(this).attr("src", "myphotos/sillyimage2.png");
    }, function() {
        $(this).attr("src", "myphotos/AmandaLin-Cropped.png");
    });
    
     $("#img3").hover(function() {
       $(this).attr("src", "myphotos/sillyimage3.png");
    }, function() {
        $(this).attr("src", "myphotos/AmandaLin-Cropped3.jpg");
    });
    
///////Contact Page///////
    //Make submit button animat when you hover
    $("#zoomsubmit").hover(function(){
        $(this).animate({fontSize: "1.5em"}, "slow");
        $(this).css("background-color", "#a1e8d9");
    }, function() {
        $(this).animate({fontSize: "1em"}, "slow");
        $(this).css("background-color", "gray");
           
    });
    
    
});