$("document").ready(
    function (){
        var show=false;
       
            $("#mainMenu").click(
                function (){
                    if(!show){
                    show = true;
                    $("#subMenu").css("visibility","visible");
                    $("#triangle").css("visibility","visible");
                    $("#mainMenu").css("background-color","#207ce5");
                    $("#firstLabel a,#arrow").css("color","#fff");
                    $(".fa.fa-angle-up").addClass("view");
                }else{
                  show = false;
                  $("#triangle").css("visibility","hidden");
                  setTimeout(
                    function (){
                       $("#subMenu").css("visibility","hidden");                 
                    },10
                  );
                  $("#mainMenu,#firstLabel a,#arrow").removeAttr("style");
                  $(".fa.fa-angle-up").removeClass("view");
                }}       
            );  
    }       
);