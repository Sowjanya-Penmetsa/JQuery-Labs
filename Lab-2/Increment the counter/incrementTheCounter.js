function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea></textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    //textarea
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    //buttons
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    //list
    list.addClass('results');

    //events
    incrementBtn.on('click', function() {
        let value=parseInt(textArea.val());
        textArea.val(++value);
    });
    addBtn.on('click', function() {
        let value=parseInt(textArea.val());
        let li=$("<li>");
        li.text(value);
        list.append(li);
        
    });

    //adding to the fragment
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    //finally adding the fragment to the document
    container.append(fragment);
}
 