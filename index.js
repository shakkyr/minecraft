const pickAxe = document.querySelector('.pickAxe'),
      reset = document.querySelector('.reset'),
      shovel = document.querySelector('.shovel'),
      exit = document.querySelector('.exit'),
      start = document.querySelector('.start'),
      axe = document.querySelector('.axe'),
      woodContainer = document.querySelector('.woodContainer'),
      groundContainer = document.querySelector('.groundContainer'),
      rockContainer = document.querySelector('.rockContainer'),
      leafsContainer = document.querySelector('.leafsContainer'),
      frontPage = document.querySelector('#frontPage');



let world = document.querySelector('.mineWorld');

let mineWorld = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,6,6,6,0,6,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,6,6,6,0,6,6,6,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,5,0,0,6,6,6,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,5,5,5,6,6,6,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,5,6,6,6,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,5,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,5,0,0,0,0],
    [4,4,4,0,6,6,6,0,0,0,0,0,0,5,5,5,0,0,0,0],
    [4,0,0,0,6,6,6,0,0,0,0,0,0,5,0,0,0,0,0,0],
    [4,4,4,0,6,6,6,0,0,0,0,0,0,5,0,0,0,0,0,0],
    [0,0,4,0,6,0,6,0,0,0,0,0,0,5,0,0,0,0,0,0],
    [4,4,4,0,6,0,6,0,0,0,0,0,0,5,0,0,0,0,0,0],
    [3,3,3,7,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,4,4,2,2,2],
    [2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,4,7,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,4,7,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
  ];

  setMyWorld(mineWorld);


function setMyWorld(arr) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      let element = document.createElement('div');
      element.classList.add('element');
      element.dataset.elementType = arr[x][y];
      element.dataset.elementCoordinateX = y;
      element.dataset.elementCoordinateY = x;
      element.addEventListener('click', mainFunction)
      world.appendChild(element);
    }
  }
}

function mainFunction(e) {
 
  let dataType =  e.path[0].dataset.elementType.toString();
  switch (dataType) {
    case "0":
        switch (itemBank) {
          case "woodContainer":
             if (woodContainer.innerHTML > 0 ){
              e.path[0].dataset.elementType = 5;
              woodContainer.innerHTML--;
              
             }
            break;
          case "groundContainer":
            if (groundContainer.innerHTML > 0 ){
              e.path[0].dataset.elementType = 2;
              groundContainer.innerHTML--;
             
             }
            break;
          case "rockContainer":
            if (rockContainer.innerHTML > 0 ){
              e.path[0].dataset.elementType = 4;
              rockContainer.innerHTML--;
              
             }
            break;
          case "leafsContainer":
            if (leafsContainer.innerHTML > 0 ){
              e.path[0].dataset.elementType = 6;
              leafsContainer.innerHTML--;
             
             }
            break;
        
          default:
            break;
        }

      
      break;
    case "1":
     

      break;
    case "2":
      if (toolBank == 'shovel' ){
        e.path[0].dataset.elementType = 0;
        groundContainer.innerHTML++
        // groundContainer.style.visibility = 'visible';
      }
      
      break;
    case "3":
      if (toolBank == 'shovel' ){
        e.path[0].dataset.elementType = 0;
        groundContainer.innerHTML++
        // groundContainer.style.visibility = 'visible';
      }

      break;
    case "4":
      if (toolBank == 'pickAxe' ){
        e.path[0].dataset.elementType = 0;
        rockContainer.innerHTML++
        // rockContainer.style.visibility = 'visible';
      }

      break;
    case "5":
      if (toolBank == 'axe' ){
        e.path[0].dataset.elementType = 0;
        woodContainer.innerHTML++
        // woodContainer.style.visibility = 'visible';
      }

      break;
    case "6":
      if (toolBank == 'axe' ){
        e.path[0].dataset.elementType = 0;
        leafsContainer.innerHTML++
        // leafsContainer.style.visibility = 'visible';
      }
      break;
    


  }
}
let toolBank ;
pickAxe.addEventListener('click', () => {
    toolBank = 'pickAxe';
 
})

shovel.addEventListener('click', () => {
  toolBank = 'shovel';

})
axe.addEventListener('click', () => {
  toolBank = 'axe';

})

let itemBank;
woodContainer.addEventListener('click',() => {
  itemBank = "woodContainer";
  toolBank ='';
})
groundContainer.addEventListener('click',() => {
  itemBank = "groundContainer";
  toolBank ='';
})
rockContainer.addEventListener('click',() => {
  itemBank = "rockContainer";
  toolBank ='';
})
leafsContainer.addEventListener('click',() => {
  itemBank = "leafsContainer";
  toolBank ='';
})

  

// =================== reset =====================
reset.addEventListener('click', ()=> {
    world.innerHTML = ''
    setMyWorld(mineWorld);
    
});

exit.addEventListener('click' , ()=> {
 
  frontPage.style.visibility = 'visible';
})

start.addEventListener('click', ()=> {
  window.location.reload();
})








