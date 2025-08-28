Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
    These methods are both used in JavaScript DOM (Document Object Model) to select elements, but they work a bit differently. Let’s differentiate between them:
    1.  getElementById vs. getElementByClassName
       * Select only one element by its unique (id) // Select all the elements with the given class name.
       * Return the element object(or null if not found) // Return a live HTML Collection(array like object).
       
    2. querySelector vs. querySelectorAll
        * Selects the first element that matches a CSS selector // Selects all elements that match a CSS selector.
        * Returns the element object (or null if not found)//Returns a static NodeList (not live).


Question 2: How do you create and insert a new element into the DOM?

Answer:
    1. To create a new element: 
        let newDiv = document.createElement("div");

    2. To insert the new element:
        document.body.appendChild(newDiv);


Question 3:What is Event Bubbling, and how does it work?
Answer:
    Event Bubbling is the process in the DOM where an event starts from the innermost target element and then bubbles up (propagates) through its parent elements until it reaches the root (document).
    example: If I click a button inside a div, the click event first runs on the button, then on the div, then on the body, and finally on the root (document). But I can stop this bubbling by the term --> event.stopPropagation().

Question 4:What is Event Delegation in JavaScript? Why is it useful?
Answer:
    Event Delegation:
    Event delegation is a technique in JavaScript where I can attach a single event listener to a parent element, instead of adding separate listeners to each child element. The event bubbles up, and I can check the event’s target to handle it.
    How it works:
    1. Add an event listener to a parent element.
    2. When a child element is interacted with (e.g., clicked), the event bubbles up to the parent.
    3. Inside the parent’s event handler, use event. target to find which child triggered it.

Question 5: What is the difference between preventDefault() and stopPropagation() methods?
Answer:
    1. event.preventDefault()
        Stops the default behavior of an element.

    2. event.stopPropagation()
       Stops the event from bubbling (or capturing) to parent elements.

   

    <body>
