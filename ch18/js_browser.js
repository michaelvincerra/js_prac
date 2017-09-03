"use strict";

function printDOM(node, prefix) { console.log(prefix + node.nodeName);
for(let i=0; i<node.childNodes.length; i++) {
            printDOM(node.childNodes[i], prefix + '\t');
        }
    }
    printDOM(document, '');

// QUERYING DOM ELEMENTS.

// nodeType is an integer identifying what type of node it is.
// Node.ELEMENT_NODE
// Node.TEXT_NODE

// document.getElementById -- every element tag can be assigned a unique ID (id="")

// document.getElementsByClassName -- returns a collection of elements that have a given class name.

// document.getElementsByTagName -- returns a collection of items that have a given tag name.

// Note: You can convert an HTMLCollection to an array by using the spread operator: [...document.getElementsByTag Name(p)].

//querySelector
//querySelectorAll  ... allows to use CSS selectors.

//MANIPULATING DOM ELEMENTS

const para1 = document.getElementsByTagName('p')[0];
console.log(para1.textContent);
console.log(para1.innerHTML);
console.log(para1.textContent = "Modified HTML file");
console.log(para1.innerHTML = "<i> Modified</i> HTML file.");


const p1 = document.createElement('p');
const p2 = document.createElement('p');
p1.textContent = "I was created so dynamically."
p2.textContent = "I too was created so dynamically."


const parent = document.getElementsById('content');
const firstChild = parent.childNodes[0];

// now insert the newly created elements

parent.insertBefore(p1, firstChild);
parent.appendChild(p2);



function highlightParas(containing) { if(typeof containing === 'string')
containing = new RegExp(`\\b${containing}\\b`, 'i'); const paras = document.getElementsByTagName('p'); console.log(paras);
for(let p of paras) {
if(!containing.test(p.textContent)) continue;
            p.classList.add('highlight');
        }
    }
    highlightParas('unique');


  // OPTIONAL  to remove the highlight class.

    function removeParaHighlights() {
const paras = document.querySelectorAll('p.highlight'); for(let p of paras) {
            p.classList.remove('highlight');
        }
}


<button data-action="highlight" data-containing="unique">
Highlight paragraphs containing "unique"
</button>

<button> data-action="removeHighlights">
Remove Highlights
</button>

const highlightActions  = document.querySelectorAll('[data-action="highlight"]');

highlightActions[0].dataset.containing = "giraffe";
highlightActions[0].dataset.caseSensitive = "true";

// EVENTS


const highlightActions = document.querySelectorAll('[data-action="highlight"]');
for(let a of highlightActions) {
a.addEventListener('click', evt => {
evt.preventDefault();
highlightParas(a.dataset.containing);
});
}

const removeHighlightActions =
document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions) {
a.addEventListener('click', evt => {
evt.preventDefault();
    removeParaHighlights();
    });
    }










