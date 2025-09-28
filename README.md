1)getElementById always call an id .
getElementByClassname call multiple element which have same class name.
querySelector it call only the first element
querySelectorAll it call all the element 

2) At first by using .createElement("p/h1/div....") this we can create an element
after that just use appendChild it where I want to insert it.

3)Event Bubbling means where an event started and it propage upward to it's parent div/element/tag and at last it goes in document.
suppose if I use alert section for a button then after clicking the button the alert message propagate and at last goes document which we
see as result.

4)Event delegation means attach event listener to the parent div instead of it's child div.
It is useful because it's clean and don't need to attach event listener to all child,attach only with parent div.

5)preventDefault use for stop the browser's reloading action. 
stopPropagation is use to stop the code from running to it's parent div.
