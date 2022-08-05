const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart',dragStart); //начало перетаскивания
item.addEventListener('dragend',dragEnd); //конец перетаскивания

placeholders.forEach((placeholder)=>{
    // console.log(placeholder);
    placeholder.addEventListener('dragover',ondragover); // Событие запускается для цели (целей) перетаскивания // по умочанию поведение,которые позволяет перетаскивать эл-ы
    placeholder.addEventListener('dragenter',ondragenter); // Событие dragenterзапускается, когда перетаскиваемый элемент или выделенный текст попадает в допустимую цель/область перетаскивания
    placeholder.addEventListener('dragleave',ondragleave); // Событие dragleaveзапускается, когда перетаскиваемый элемент или выделенный текст покидают допустимую цель перетаскивания
    placeholder.addEventListener('drop',ondrop); // отпустили объект
})

function ondragover(event){
    event.preventDefault(); // отключение поведения браузера - перетаскивание
    let item = event.target;
    console.log('ondragover(event)');
};
function ondragenter(event){
    let item = event.target;
    item.classList.add('color');
    // console.log('ondragenter(event)');
};
function ondragleave(event){
    let item = event.target;
    item.classList.remove('color');
    // console.log('ondrleave(event)');
};
function ondrop(event){
    // event.target.createElement('div');
    event.target.classList.remove('color');
    event.target.append(item);
    // console.log('ondrop(event)',placeholder);
};

function dragStart(event){
    // console.log('dragStart=()=>');
    // console.log(arguments);
    //console.log(event); //DragEvent {isTrusted: true, dataTransfer: DataTransfer, screenX: 83, screenY: 251, clientX: 103, …}
    let item=event.target; //<div class="item" draggable="true">Перетащи меня</div>
    item.classList.add('hold');
    // item.classList.add('hide');

    setTimeout(()=>item.classList.add('hide'),0)
};

function dragEnd(event){
    // console.log('dragEnd=()=>');
    let item=event.target;
    // item.classList.remove('hold','hide'); 
    item.className = 'item'; //тоже самое(cм. выше)
};