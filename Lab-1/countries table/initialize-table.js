function initializeTable() 
{
    $("#createLink").click(createCountry);
    addCountryToTable("India", "Delhi");
    addCountryToTable("Sweden", "Stocholm");
    addCountryToTable("Germany", "Berlin");
    links();

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addCountryToTable(country, capital);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        links();
    }

    function addCountryToTable(country, capital) {
        let row = $('<tr>')
                .append($("<td>").text(country))
                .append($("<td>").text(capital))
                .append($("<td>")
                        .append($("<a href='#'>[Up]</a>").click(moveRowUp))
                        .append(" ")
                        .append($("<a href='#'>[Down]</a>").click(moveRowDown))
                        .append(" ")
                        .append($("<a href='#'>[Delete]</a>").click(deleteRow)));
        $("#countriesTable").append(row);
        
    }

    function moveRowUp() {
        let row = $(this).parent().parent();
        row.insertBefore(row.prev());
        links();
        
    }

    function moveRowDown() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next());
        links();
       
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.remove();
        links();
        
    }

    function links() {
        // Show all links in the table
        $('#countriesTable a').css('display', 'inline-block');

        // Hide [Up] link in the second row 
        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')")
                .css('display', 'none');

        // Hide the [Down] link in the last row 
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
                .css('display', 'none');
    }
}