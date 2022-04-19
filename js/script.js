let chooseBtn=document.getElementById('choose'),
    receiveBtn=document.getElementById('receive'),
    heading=document.getElementsByTagName('h2')[0],
    nameInput=document.getElementsByClassName('contactform_name')[0],
    phoneInput=document.querySelector('.contactform_phone'),
    mailInput=document.querySelectorAll('.contactform_mail')[0],
    modal=document.querySelector('.modal'),
    closeBtn=document.querySelector('.close'),
    text=document.getElementsByName('message')[0];


// console.log("chooseBtn = ",chooseBtn.textContent);
// console.log("receiveBtn = ",receiveBtn.textContent);
// console.log("heading = ",heading.textContent);
// console.log("nameInput = ",nameInput);
// console.log("phoneInput = ",phoneInput);
// console.log("mailInput = ",mailInput);
// console.log('modal = ',modal);
// console.log('close = ',closeBtn);
// console.log('text = ',text);


function hover(){
    heading.textContent="Действительно,всё!";
}

// Метод №1 -<!-- <div onmouseenter="hover()" id="choose" class="main_btna text-center">выбрать тур</div> -->
// Метод №2 -  chooseBtn.onmouseenter=hover;

// Метод№3(самый правильный метод)
chooseBtn.addEventListener('mouseenter',function(){
    heading.textContent="Действительно все!";
});
chooseBtn.addEventListener('mouseleave',function(){
    heading.textContent="Все включено";
});

receiveBtn.addEventListener('mouseenter',function(){
    heading.textContent="Получи консультацию!";
    heading.style.color='orange';
});
receiveBtn.addEventListener('mouseleave',function(){
    heading.style.color='white';
    heading.textContent="Все включено";
});
receiveBtn.addEventListener('click',function(){
    modal.style.display="block";
    
});

closeBtn.addEventListener('click',function(){
    modal.style.display="none";
});

nameInput.addEventListener('input',function(){
    text.value=`Меня зовут ${nameInput.value}. И я хочу спросить,...`;
});



 

