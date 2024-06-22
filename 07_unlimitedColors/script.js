// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
  };
  console.log(randomColor())
  
  // changing background
  function flashColor(){
    document.querySelector('body').style.backgroundColor = randomColor()
  }
  
  // declaring an id for setInterval in global scope
  let intervalId;
  
  function changeColor(){ 
    // we have to put the condition because we are saving memory by changing intervalId into null once stop is clicked.
    // if (intervalId = null) 
    if (!intervalId){
      intervalId = setInterval(flashColor, 1000)
    }
  }
  
  function stopColor(){
    clearInterval(intervalId)
    //release our intervalId from the variable for cleaner code and saving memory
    intervalId = null;
  }
  
  document.querySelector('#start').addEventListener('click', changeColor)
  document.querySelector('#stop').addEventListener('click', stopColor)