=========================================================================================
DOM selector methods
==============================================================================
  
//1. Select the button element on the page

  const buttonElem = document.getElementById("button");
  
  buttonElem.addEventListener('click', () => {
    const oldText = buttonElem.innerText;
    return button.innerText = oldText === "ON" ? "OFF" : "ON";
  });

//====================================================================
//2. Query descendent HTML elements
  const buttonElem = document.querySelector("#wrapper button");
  const inputElem = document.querySelector("#wrapper input");
  
  buttonElem.addEventListener('click', () => {
    const oldText = inputElem.value;
      return inputElem.value = oldText === "ON" ? "OFF" : "ON";
  });

//====================================================================
//3. Select multiple HTML elements
  const listItems = document.querySelectorAll("#list li");
  
  const handleHover = (event) => {
    return event.target.innerText = 'ON';
  };
  
  if(listItems.length > 1) {
    listItems.forEach(item => item.addEventListener('mouseover', handleHover));
  }

//====================================================================
//4. Query and exclude HTML elements
  const listItems = document.querySelectorAll('#list li:not(#disabled)');
  
  const button = document.getElementById('button');
  
  
  const handleClick = () => {
    listItems.forEach(item => {
    const oldText = item.innerText;
      return item.innerText = oldText === 'ON' ? 'OFF' : 'ON';
    })
  };
  
  if(listItems.length > 1) {
    button.addEventListener('click', handleClick);
  }

=========================================================================================
Events and user interactions 
==============================================================================
  
//1. Execute function on button click
const button = document.getElementById('button');
  const input = document.getElementById('input');
  
  const handleClick = () => {
    input.value = 'Hello World';
  };
  
  button.addEventListener('click', handleClick);

//====================================================================
//2. Execute function when cursor moves onto element
 const element = document.getElementById('element');
  
  const changeText = () => {
    element.innerText = 'Thanks!';
  };
  
  element.addEventListener("mouseover", changeText);

//====================================================================
//3. Cursor enters and leaves element

  const element = document.querySelector('#element');
  
  const toggleColor = (isEntering) => {
    element.style.background = isEntering ? 'orange' : 'black';
  };
  
  element.addEventListener('mouseover', () => toggleColor(true));
  element.addEventListener('mouseleave', () => toggleColor(false));

//====================================================================
//4. Move element with mouse cursor

