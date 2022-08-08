const board = document.querySelector('#board');
const colors=['IndianRed',
'LightCoral  ',
'Salmon',  
'DarkSalmon', 
'LightSalmon',  
'Crimson', 
'Red',
'FireBrick', 
'DarkRed', 
'GreenYellow', 
'Chartreuse',  
'LawnGreen',  
'Lime',  
'LimeGreen', 
'PaleGreen', 
'LightGreen',  
'MediumSpringGreen', 
'SpringGreen',
'MediumAquamarine',  
'DarkSeaGreen',  
'LightSeaGreen', 
'DarkCyan', 
'Teal',
'LightSalmon',  
'Coral']
const SQUARES_NUMBER=500; // число квадратиков

for(let i=0;i<SQUARES_NUMBER;i++){
   const square = document.createElement('div');
   square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseover',setColor) 
    square.addEventListener('mouseleave',removesetColor)
}

function setColor(event){
    const element=event.target;
    element.style.backgroundColor=`${getRandomColor()}`;
    element.style.boxShadow=`0 0 5px ${getRandomColor()},0 0 5px ${getRandomColor()}`;
}
function removesetColor(event){
    const element=event.target;
    element.style.backgroundColor='#1d1d1d';
    element.style.boxShadow=``;
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}