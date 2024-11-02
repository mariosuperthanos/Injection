// try inputting this: <script>alert('hi')</script>
// Now, try inputting this: <img src="/" onerror = "alert(1);">
// Scripts injected into the DOM via script tags in innerHTML
// are not run at the time they are injected (inline scripts
// are run at the time the original page is parsed). On the
// other hand, images injected into the DOM are loaded at that
// time, and if the loading fails, then the onerror event
//handler is called. 
const userInputInHTML = (input) => {
  const p = document.getElementById("pleaseNo");
  
  // Bad: Using innerHTML replaces the entire content of the element. 
  // If input includes any special HTML characters (like < or >), it can 
  // lead to security issues, where harmful scripts might run in the browser.
  // p.innerHTML = input;

  // Better: Create a text node from the input. This method ensures that 
  // the input is treated purely as text. Any HTML tags in the input 
  // won't be processed or executed; they will just show up as text on the page.
  var textnode = document.createTextNode(input);
  p.appendChild(textnode);
}

const sendToServer = () => {
  const input = document.querySelector('#userinput').value; // Get the input value from the user.
  userInputInHTML(input); // Display the input safely on the page.
  
  // This code sends the input to the server using a POST request.
  // It converts the input into a JSON string and specifies the content type.
  fetch('http://localhost:3000/secret', {
    method: 'POST',
    body: JSON.stringify({userInput: input}), // Wrap input in an object to send.
    headers: new Headers({
      'Content-Type': 'application/json' // Set the header to tell the server we're sending JSON.
    })
  });
}



