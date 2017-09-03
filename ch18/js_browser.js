"use strict";

function printDOM(node, prefix) { console.log(prefix + node.nodeName);
for(let i=0; i<node.childNodes.length; i++) {
            printDOM(node.childNodes[i], prefix + '\t');
        }
    }
    printDOM(document, '');


// nodeType is an integer identifying what type of node it is.
// Node.ELEMENT_NODE
// Node.TEXT_NODE

// document.getElementById -- every element tag can be assigned a unique ID (id="")

// document.getElementsByClassName -- returns a collection of elements that have a given class name.

// document.getElementsByTagName -- returns a collection of items that have a given tag name.

// Note: You can convert an HTMLCollection to an array by using the spread operator: [...document.getElementsByTag Name(p)].

//querySelector
//querySelectorAll  ... allows to use CSS selectors. 