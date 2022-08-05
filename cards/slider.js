function slidesPlugin(itemActiveElement=0){

    const slides = document.querySelectorAll('.slide'); // NodeList(5) [div.slide, div.slide, div.slide, div.slide.active, div.slide]

    slides[itemActiveElement].classList.add('active');
    for(const slide of slides){
        slide.addEventListener('click',()=>{
        clearActiveClasses();
            slide.classList.add('active'); 
        }); //addEventListener('название события',функция)
    }

    function clearActiveClasses(){
        slides.forEach((slide)=>{
            slide.classList.remove('active');
        })
    }
}

slidesPlugin(2);