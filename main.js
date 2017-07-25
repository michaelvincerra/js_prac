

// START:   (function($) {
// END:     } ) ( jQuery );
// Note: You can also wrap the inner function with ABOVE; it solves for use of '$' shortcut jQuery calls. //

$(document).ready(function() {
    'use strict';
    // console.log('main.js is loaded');


    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // var c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';
    //

    var c = Shape.Circle(200, 200, 60);
    c.fillColor = 'red';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'viva italia!';


    var tool = new Tool();

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
            c.fillColor = 'green';

        };
    paper.view.draw()

});




/*    var c;
    for (var x =25; x<400; x+= 50) {
        for (var y=25; y<400; y+=50) {
            c = Shape.Circle(x, y, 25);
            c.fillColor = 'green';
        }
    }*/
/**
 * Created by michaelevan on 7/24/17.
 */
