const slide = document.querySelector('.slide');
const sliderNext = document.querySelector('.slider-next');
const sliderPrev = document.querySelector('.slider-prev');

sliderNext.addEventListener('click', () =>{

    slide.style.marginLeft = -100 + '%';
    sliderNext.classList.add('navigation__bar_active');
    sliderPrev.classList.remove('navigation__bar_active');
    
})

sliderPrev.addEventListener('click', () =>{
    slide.style.marginLeft = 0 + '%';
    sliderNext.classList.remove('navigation__bar_active');
    sliderPrev.classList.add('navigation__bar_active');
})




const demoSlide = document.querySelector('.slide-demo');
const demoSlidePrev = document.querySelector('.slider-demo-prev');
const demoSliderNext = document.querySelector('.slider-demo-next');

demoSliderNext.addEventListener('click', () =>{

    demoSlide.style.marginLeft = -520 + 'px';
    demoSliderNext.classList.add('navigation__bar_active');
    demoSlidePrev.classList.remove('navigation__bar_active');
    
})

demoSlidePrev.addEventListener('click', () =>{
    demoSlide.style.marginLeft = 0 + 'px';
    demoSliderNext.classList.remove('navigation__bar_active');
    demoSlidePrev.classList.add('navigation__bar_active');
})

const cardSlide = document.querySelector('.card-slide');
const cardSliderNext = document.querySelector('.card-slider-next');
const cardSliderPrev = document.querySelector('.card-slider-prev');

cardSliderNext.addEventListener('click', () =>{

    cardSlide.style.marginLeft = -100 + '%';
    cardSliderNext.classList.add('navigation__bar_active');
    cardSliderPrev.classList.remove('navigation__bar_active');
    
})

cardSliderPrev.addEventListener('click', () =>{
    cardSlide.style.marginLeft = 0 + '%';
    cardSliderNext.classList.remove('navigation__bar_active');
    cardSliderPrev.classList.add('navigation__bar_active');
})