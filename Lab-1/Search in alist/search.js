function search() 
{
            var search = $('#searchText').val().toUpperCase();
            var count = 0;
            $("#towns li").each(function(i,v){
                if (v.textContent.toUpperCase().includes(search))
                {
                    $(v).css("font-weight", "bold");
                    count++;
                }
                else
                    $(v).css("font-weight", "");
            });
            $("#result").text(count + " matches found ");
            
}
        