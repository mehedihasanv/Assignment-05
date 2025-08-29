 What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById("id") - selects a single element by its unique id and returns only one element.

getElementsByClassName("class") - returns all elements with that class as a live HTMLCollection (updates if DOM changes).

querySelector("selector") - returns the first element matching a CSS selector.

querySelectorAll("selector") - returns all matching elements as a static NodeList (doesn’t auto-update).




 How do you **create and insert a new element into the DOM**?

First  create the element using document.createElement("tagName").
Then  add text with .textContent or HTML with .innerHTML.
You can also add attributes or classes using .setAttribute or .classList.add.
Finally, insert it into the DOM with .appendChild, .prepend, or .insertBefore.




 What is **Event Bubbling** and how does it work?

Event bubbling is when an event starts from the target element and moves upward through its ancestors.
For example, a click on a button triggers the button’s event, then its parent div’s event, and so on up to document.
It works because events “bubble up” the DOM tree by default.
This can be useful but sometimes needs to be stopped with stopPropagation().




 What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation means attaching one event listener to a parent element to handle events from its children.
It works because of event bubbling, where the event reaches the parent and can be checked for the target.
It reduces the need for multiple event listeners, improving performance.
It is especially useful when child elements are created dynamically after the page loads.



 What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault() stops the default browser action, like preventing a form from submitting or a link from opening.

stopPropagation() stops the event from bubbling up to parent elements.

They serve different purposes: one blocks default behavior, the other blocks event flow.
Often, they are used together when you want full control over an event.