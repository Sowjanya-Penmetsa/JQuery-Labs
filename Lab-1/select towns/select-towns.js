function attachEvents() 
{
    // Selecting the list items and applying the background color

    $("#items li").click(function()
    {
       if($(this).attr("item-selected"))
       {
        $(this).removeAttr("item-selected");
        $(this).css("background","");
       }
       else
       {
        $(this).attr("item-selected","true");
        $(this).css("background","#eee");
       }

    });
    //when the button with button ID:showTownsButton is clicked it will display the selected list items

    $("#showTownsButton").click(function()  
    {
      var Selected=$("#items li[item-selected=true]").toArray().map(li=>li.textContent).join(", ");
      $("#selectedTowns").text("Selected Towns:"+Selected);
    });
}