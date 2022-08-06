const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlideIndex = 0;

const audioList=['audio/yellow.mp3','audio/violet.mp3','audio/red.mp3','audio/green.mp3'];

// console.log(upButton);
// console.log(downButton);
// console.log(sidebarLength);
// console.log(container);

sidebar.style.top=`-${(slidesCount-1) * 100}vh`;


upButton.addEventListener('click',()=>{
    console.log('upButton');

    changeSlide('up');

    // let audio=document.getElementById('player');
    // audio.src='audio/yellow.mp3';
    // audio.play();
})

downButton.addEventListener('click',()=>{
    console.log('downButton');

    changeSlide('down');

})

function changeSlide(direction){
    if (direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex===slidesCount){
            activeSlideIndex=0;
        }
    
        //Подключаю музыку
    let audio=document.getElementById('player');
    audio.src=audioList[activeSlideIndex];
    audio.play();
    }
    else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex<0){
            activeSlideIndex=slidesCount-1;
        }

        //Подключаю музыку
        let audio=document.getElementById('player');
        audio.src=audioList[activeSlideIndex];
        audio.play();
    }
    // console.log(activeSlideIndex);
    const height = container.clientHeight;
    // console.log(height);
    mainSlide.style.transform=`translateY(-${activeSlideIndex*height}px)`; 
    sidebar.style.transform=`translateY(${activeSlideIndex*height}px)`; 
}


