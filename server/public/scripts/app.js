$(document).ready(function() {
    $('#post-data').on('click', clickPostData);
    //click on one of the buttons in the div with the mathOperator class
    $('.mathOperators').on('click', 'button', whichButtonValue);
    //$('#get-data').on('click', clickGetData);



});

var values = {};

/*
// logic for the math operator buttons. if else?
if (button class === add) {
    type = addition;
} else if (button class === subtract) {
    type = subtract;
} else if (button class === multiply) {
    type = multiply;
} else if (button class === divide) {
    type = divide;
}

// or switch? and where does this logic go?
switch(type) {
    case: add
        type = add;
        break;
    case: subtract;
        type = subtract;
        break;
    case: multiply;
        type = multiply;
        break;
    case: divide;
        type = divide;
        break;
}
*/

// working on a function that attaches a type to the math operation buttons,
// then appends to the numbers object
function whichButtonValue(buttonName) {
    event.preventDefault();
    // iterate through the buttons in the div with class mathOperators?
    // assign a math operation to type?
    for (var i = 0; i < 4; i++) {
        $('.mathOperators');

        var type = button.name;

        switch(type) {
            case add:
                type = add;
                break;
            case subtract:
                type = subtract;
                break;
            case multiply:
                type = multiply;
                break;
            case divide:
                type = divide;
                break;
        }
        buttonName = type;
        console.log(buttonType);
    }
}

function clickPostData() {
    event.preventDefault();
    $.each($('#value-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    // call to the function that writes to the DOM
    appendDom(values);

    // clear out the input fields
    $('.form-vertical').find('input[type=text]').val(''); // Gwen recommended adding to clear button function? This seems to be working from here.

    $.ajax({
        type: 'POST',
        url: '/data',
        data: values,
        beforeSend: function() {
            //console.log('before!');
        },
        success: function(data) {
            //console.log('From Server: ', data);
            console.log(data);
        }
    });
}

// append numbers to the DOM
function appendDom(showEquation) {
    // select a holding container that already exists. Put in an empty div tag.
    $('.show').append('<div></div>');
    // Select that container and have it grab it's last child and store it into the $el variable.
    // This works, but I'm not sure I understand why we're grabbing last child?
    var $el = $('.show').children().last();

    // numbers object appended to the DOM
    $el.append('<p><strong>1st value: </strong>' + showEquation.firstValue + '</p>');
    $el.append('<p><strong>2nd value: </strong>' + showEquation.secondValue + '</p>');
    $el.append('<p><strong>Type: </strong>' + showEquation.type + '</p>');
}

// not sure if we need to GET data
function clickGetData() {
    event.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/data',
        success: function(data) {
            console.log(data);
        }
    });
}
