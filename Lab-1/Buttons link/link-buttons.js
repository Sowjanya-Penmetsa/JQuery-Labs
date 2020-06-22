function attachEvents()
{
   $("a.button").click(function()
   {
    $(".selected").removeClass("selected");
       $(this).addClass("selected");
   });
    
}

