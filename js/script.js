window.addEventListener('DOMContentLoaded',function(){ // Событие,которое ждёт подгрузку контента
    let products=document.querySelectorAll('.product'),
        buttons=document.querySelectorAll('button'),
        openBtn=document.querySelector('.open');

    function createCart(){
        let cart = document.createElement('div'), // позволяет создавать новые элементы
        field = document.createElement('div'),
        heading=document.createElement('h2'),
        closeBtn=document.createElement('button');
        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent="В моей корзине:";
        closeBtn.textContent="Закрыть";

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }
        createCart();

        let field=document.querySelector('.cart-field'),    
            cart=document.querySelector('.cart'),
            closeBtn=document.querySelector('.close');
    
    function openCart(){
        cart.style.display='block';
    }
    function closeCart(){
        cart.style.display='none';
    }
    
    openBtn.addEventListener('click',openCart);
    closeBtn.addEventListener('click',closeCart);

    for(let i=0;i<buttons.length;i++)
    {
        buttons[i].addEventListener('click',function(){
            let item=products[i].cloneNode(true),
            btn=item.querySelector('button').textContent='Оплата';
            field.appendChild(item);
            products[i].remove();
            
            field.addEventListener('click',function(){
                btn=item.querySelector('button');
                btn.textContent="Оплачено";
                btn.style.color='green';
            });
        });
    }
    // buttons.forEach(function(item,i){ // max 3 аргумента
    //     item.addEventListener('click',function(){
    //         let item=products[i].cloneNode(true),
    //         btn=item.querySelector('button').remove();
    //         field.appendChild(item);
    //         products[i].remove();
    //     });
    // });

    // buttons.forEach((item,i) => {
    //     item.addEventListener('click',()=>{
    //         let item=products[i].cloneNode(true),
    //         btn=item.querySelector('button').remove();
    //         field.appendChild(item);
    //         products[i].remove();
    //     });
    // });


});
