"use strict";

// jQuery used to manipulate the DOM
// - make Ajax requests

$(document).ready(function(){
//code here is run after all HTML has been loaded
// and the DOM is constructed
});


// alternatively, you can bookend all the code in the following place..

$(function(){

// ALL CODE HERE
//code here is run after all HTML has been loaded
// and the DOM is constructed
});


// To manipulate the DOM
// Use jquery-wrapped DOM ELEMENTS

// Calling jQuery with HTML (injected)
// $ jQuery Object


const $paras = $('p');
console.log($paras.length);
console.log(typeof $paras);
console.log($paras instanceof $);
console.log($paras instanceof jQuery);



const $newPara = $('<p>Newly created paragraph</p>');

// Replace every para with the same text

$('p').text('ALL PARAGRAPHS REPLACED');

$('p').html('<i>ALL</i> PARAGRAPHS REPLACED');

//Note the chaining method below.

$('p')          //matches all paragraphs
    .eq(2))     // third para (zero-based indices)
    .html('<i> THIRD</i> PARAGRAPH REPLACED');

// TO REMOVE ELEMENTS
$('p').remove();

$('p')
    .append('<sup>*</sup>');

// Adds a horizontal rule after and before every paragraph

$('p')
.after('<hr>')
.before('<hr>');


$('<sup>*</sup>').appendTo('p');
$('<hr>').insertBefore('p');
$('<hr>').insertAfter('p');



// Make every other para red  after we modify each paragraph
$('p')
    .after('<hr>')
    .append('<sup>*</sup>')
    .filter(':odd')
    .css('color', 'red');

// Now use 'not' as the opposite of .filter
// indent any paragraph that does NOT have the class .'highlight'

$('p')
    .after('<hr>')
    .not('.highlight')
    .css('margin-left', '20px');

// .find returns the set of descendant elements that match the given query

$('p')
    .before('<hr>')
    .find('.code')
    .css('font-size', '30px');

// To get access to the underlying DOM elements--and unwrap a jQuery Object...

const para2 = $('p').get(1);    // get second <p> (zero-based indices.)


// To get an array containing all <p> paragraph elements...
const paras = $('p').get();    // get array of ALL <p> elements



// Use .get to revise the function refreshServerInfo

function refreshServerInfo() {
const $serverInfo = $('.serverInfo');
$.get('http://localhost:7070').then(


            // successful return
function(data) {
Object.keys(data).forEach(p => {
    $(`[data-replace="${p}"]`).text(data[p]);
    });
},

function(jqXHR, textStatus, err) {
                console.error(err);
                $serverInfo.addClass('error')
} );
}