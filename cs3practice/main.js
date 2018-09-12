
$(document).ready(function() {
       var c=0;
       setInterval(function(){
           $("div.windmill").css("transform","rotate("+c+"deg)");
           c=c+10;
       },80);    
});
