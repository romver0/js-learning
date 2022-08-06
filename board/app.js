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

    square.addEventListener('mouseover',()=>{
        // console.log('mouseover');
        setColor(square);
    }) // слушатель событий
    // square.addEventListener('mouseout',()=>{
    //     // console.log('mouseout');
    //     nosetColor(square);
    // })
    square.addEventListener('mouseleave',()=>{
        // console.log('mouseout');
        removesetColor(square);
    })
}

function setColor(element){
    element.style.backgroundColor=`${getRandomColor()}`;
    element.style.boxShadow=`0 0 5px ${getRandomColor()},0 0 5px ${getRandomColor()}`;
}
function removesetColor(element){
    element.style.backgroundColor='#1d1d1d';
    element.style.boxShadow=``;
}

function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length); //Math.floor()- округленеи в меньшую сторону
    return colors[index];
}