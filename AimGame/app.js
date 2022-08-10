const startBtn = document.getElementById('start');
const screens = document.querySelectorAll('.screen'); 
const timeBtn = document.querySelector('#time-list');
const timeElement = document.querySelector('#time');
const board = document.querySelector('#board');


let time = 0;
let score = 0;
let misses = 0;

console.log(screens);
// console.log(timeBtn);

startBtn.addEventListener('click',(event)=>{
    console.log('startBtn');
    event.preventDefault(); // отключение поведения браузера

    screens[0].classList.add('up');
});

// Осуществление делегирования событий
timeBtn.addEventListener('click',function(event){
    console.log('timeBtn');
    // if(event.target.className=='time-btn'){
    //     console.log(event.target);
    // }
    if(event.target.classList.contains('time-btn')){
        console.log(event.target);
        console.log('time = ',event.target.getAttribute('data-time'));
        time = parseInt(event.target.getAttribute('data-time')); //берёт значение attr ; string->int
        screens[1].classList.add('up');
        startGame(time);
    }
})
board.addEventListener('click',event=>{
    if(event.target.classList.contains('circle')){
        // console.log("event.target.classList.contains('circle')");
        score++;
        event.target.remove(); //удаление блока после клика
        createRandomCircle();
    }
    else{
        misses++;
        console.log('misses =',misses)
    }
    
})

//DEBUG
// startGame();
function startGame(){
    setInterval(descreaseTime,1000); // каждую 1сек/1миллисек
    createRandomCircle();
}

function descreaseTime(){
    if(time!=0)
    {
        time--;
        const min = time > 0 ? Math.floor(time / 60) % 60 : 0;
        const sec = time > 0 ? Math.floor(time) % 60 : 0;
        setTime(min,sec);
        // timeElement.innerHTML=`${min}:${sec}`;
        // if(sec<10){
        //     timeElement.innerHTML=`${min}:0${sec}`;
        // }
        // else{
        //     timeElement.innerHTML=`${min}:${sec}`;
        // }
        // console.log(timeElement);
    }
    else{
        finishGame();
        console.log('finishGame()');
    }
}
function setTime(min,sec){
    if(sec<10){
        timeElement.innerHTML=`${min}:0${sec}`;
        timeElement.style.color='red';
    }
    else{
        timeElement.innerHTML=`${min}:${sec}`;
    }
}
function finishGame(){
    // clearInterval(time);
    // board.innerHTML=`<h1>Ваш счёт:<span style="color:"> ${score}</span></h1>`;
    board.innerHTML=`<h1>Ваш счёт: ${score}`;
    timeElement.parentNode.remove();
    // console.log('score = ',score);
    // console.log('misses = ',misses);
    if(score==0){
        // if(misses>0){
        //     board.innerHTML=`<h1>Ваш счёт: ${score}</h1>
        //     <span>(Ты можешь лучше)&#129303</span>
        //     <span>Ты косой на ${Math.round((misses/(misses+score))*100,-1)}%</span>
        //     <span>Ты даже не пытался</span>
        //     `;
        // }
        // else if(misses==0){
        //     board.innerHTML=`<h1>Ваш счёт: ${score}</h1>
        //     <span>(Ты можешь лучше)&#129303</span>
        //     <span>Ты косой на ${Math.round((misses/(misses+score))*100,-1)}%</span>
        //     `;
        // }
        if(misses>0){
            board.innerHTML=`<h1>Ваш счёт: ${score}</h1>
            <h3 id="comment">Ты косой на 100%</h3>
            `;
        }
        else{
            board.innerHTML=`<h1>Ваш счёт: ${score}</h1>
            <h3 id="comment">Ты даже не пытался</h3>
            `;
        }
        
    }
    else if(0<score<5){
        if(misses>0 && score>0){
        board.innerHTML=`<h1>Ваш счёт: ${score}</h1>
        <h2>(Ого,у тебя хорошо получается)&#128154</h2>
        <h3 id="comment">Ты косой на ${Math.round((misses/(misses+score))*100,-1)}%</h3>
        `;
        }
        else if(misses==0 && score>0){
        board.innerHTML=`<h1>Ваш счёт: ${score}</h1>
        <h2>(Ого,у тебя хорошо получается)&#128154</h2>
        <h3 id="comment">Вот это точность 100%</h3>
        `;
        }
    }
    else if (score>7){
        if(misses>0 && score>7){
            board.innerHTML=`<h1>Ваш счёт: ${score}</h1>
        <h2>(Без комментариев,тебе нет равных)&#128163&#128163&#128163</h2>
        <h3 id="comment">Ты косой на ${Math.round((misses/(misses+score))*100,-1)}%</h3>
        `;
        }
        else if(misses==0 && score>7){
            board.innerHTML=`<h1>Ваш счёт: ${score}</h1>
            <h2>(Без комментариев,тебе нет равных)&#128163&#128163&#128163</h2>
            <h3 id="comment">Вот это точность 100%</h3>
            `;
        }
    }
    // again = document.querySelector('#again');
    // console.log('again = ',again);
    // again.addEventListener('click',()=>{
    //     console.log(screens);
    //     screens[1].classList.remove('up');
    //     screens[0].classList.remove('up');
    //     board.remove();
    //     screens[2].innerHTML=''
    //     screens[2].createElement('div').classList.add('board');
    //     console.log('после',screens);
    // })
}
function createRandomCircle(){
    const circle = document.createElement('div');
    const size=getRandomNumber(10,60);
    const {width,height}=board.getBoundingClientRect();
    const x=getRandomNumber(0,width-size);
    const y=getRandomNumber(0,height-size);

    let list=[
        'linear-gradient(90deg, #faf0cd, #fab397)',
        'linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db)',
        'linear-gradient(90deg, #cfecd0, #ffc5ca)',
        'linear-gradient(90deg, #aea4e3, #d3ffe8)',
        'linear-gradient(85deg, #fb63f9, #c2e534)',
        'linear-gradient(81deg, #ddb35f, #7409c7)',
        'linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)',
        'linear-gradient(to right, #f00, #ffa500, #ff0, #008000, #00f, #4b0082, #ee82ee)',
        'linear-gradient(45deg, #F17C58, #E94584, #24AADB, #27DBB1, #FFDC18, #FF3706)',
        'linear-gradient(to bottom, #b721ff, #2af598, #fec051, #fee140, #fa709a)'
    ]
    // const qqq=board.getBoundingClientRect();
    // console.log(qqq);
    circle.classList.add('circle');
    // // circle.append(document.createElement("SPAN"));
    // for(let i=0;i<4;i++){
    //     circle.append(document.createElement("SPAN"));}
    circle.style.width=`${size}px`;
    circle.style.height=`${size}px`;
    showCircle(circle,size);
    circle.style.top=`${x}px`;
    circle.style.left=`${y}px`;

    circle.style.background=getRandomColor(list);
    board.append(circle);
    

}
function getRandomNumber(min,max){
    return Math.round(Math.random()*(max-min)+min);
}
function getRandomColor(list){
    // console.log(list.length,Math.round(Math.random()*list.length))
    return list[Math.floor(Math.random()*list.length)];
}
function showCircle(circle,size){
    // console.log('showCircle ',circle,size);
    setTimeout(()=>{
        circle.style.width=`${size*1.5}px`;
        circle.style.height=`${size*1.5}px`;
    },0)
}


