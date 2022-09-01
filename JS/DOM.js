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
  const element = document.querySelector('#element');
  const wrapper = document.querySelector('#wrapper');
  
  
  const moveRight = () => {
    const wrapperWidth = wrapper.getBoundingClientRect().width;
    const elementWidth = element.getBoundingClientRect().width;
    const currentPosition = parseInt(element.style.left || 0, 10);
    if (currentPosition <= wrapperWidth - elementWidth) {
      element.style.left = `${currentPosition + 1}px`;
    }
  };
  
  wrapper.addEventListener('mousemove', moveRight);

//====================================================================
//5. Drop element into another element
  const dragItem = document.querySelector('#dragItem');
  const dropArea = document.querySelector('#dropArea');
  
  const handleDragOver = (event) => event.preventDefault();
  dropArea.addEventListener('dragover', handleDragOver);
  
  const handleDrop = () => {
    dropArea.append(dragItem);
  };
  
  dropArea.addEventListener("drop",handleDrop);

=========================================================================================
DOM manipulation with JavaScript
==============================================================================

//1. Remove element from the DOM
  const button = document.querySelector('#button');
  
  const removeRedCircle = () => {
    const redCircle = document.querySelector('#red');
    redCircle.parentNode.removeChild(redCircle);
  };

//====================================================================
//2. Change id of HTML element
  const button = document.querySelector('#wrapper button');
  
  const changeInput = () => {
    const input = document.querySelector('#inputEl');
    if(input) {
      input.value = 'Hello World';
    }
  };
  
  button.addEventListener('click', changeInput);
  
  document.querySelector('#wrapper input').setAttribute('id', 'inputEl');

//====================================================================
//3. Wrap element in div


//====================================================================
//4. Create new list item and add to DOM
  const button = document.getElementById('button');
  button.addEventListener('click' , () => {
    const input = document.getElementById('input');
    const list = document.getElementById('list');
    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    list.append(newItem);
  });


=========================================================================================
DOM fundamentals
==============================================================================
  
//1. Check the checkbox
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    const checkbox = document.getElementById('checkbox');
    checkbox.checked = true;
  });

//====================================================================
//2. Get full-name from inputs
const button = document.getElementById('button');
button.addEventListener('click', () => {
  // type in your code here
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const target = document.getElementById('fullName');
  target.value = firstName.value + lastName.value;
});

//====================================================================
//3. Increment the counter on button click

//====================================================================
//4. Input filter list
  const input = document.getElementById('input');
  input.addEventListener('input', () => {
    const listItems = document.querySelectorAll('#list li');
    listItems.forEach(li => {
      if(li.innerText.includes(input.value)) return li.hidden = false;
      return li.hidden = true;
    })
  });

//====================================================================
//5. Pop the balloons

  const list = document.getElementById('list');
  const handleHover = event => {
    if(event.target !== list) {
      event.target.style.visibility = 'hidden';
    }
  };
  
  list.addEventListener('mouseover', handleHover);
  
=========================================================================================
Recursive functions
==============================================================================


  const button = document.getElementById('button');
  let stopped = false;
   
  function move(isReturning) {
   const width = button.parentNode.clientWidth;
   const left = parseInt(button.style.left , 10) || 0;
   if (!stopped) {
      button.style.left = (isReturning ? left - 1 : left + 1) + 'px';
      setTimeout(() => move ((isReturning && left > 0) || left === width - button.clientWidth), 10);
   };
  };
   
  move();
   
  button.addEventListener('click', () => {
    stopped = !stopped;
    move();
  })
