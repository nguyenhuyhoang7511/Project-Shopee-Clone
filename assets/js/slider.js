function renderSlider() {
    const imgSliders = [
        {
            image: './assets/image/banner_slider-1.png',
        },

        {
            image: './assets/image/banner_slider-2.png',
        },

        {
            image: './assets/image/banner_slider-3.png',
        },

        {
            image: './assets/image/banner_slider-4.png',
        },

        {
            image: './assets/image/banner_slider-5.png',
        },
        
    ]

    let sliderMain = $('.owl-carousel')
    let slider = ''
    for(getImg of imgSliders) {
       slider += `
       <li class="owl-carousel-item">
         <img src="${getImg.image}" alt="Banner-1">
        </li>
       `
    }
    sliderMain.innerHTML = slider
}

renderSlider()

//Code slider thuần
// let sliderMain = $('.banner__slider-list')
// const sliderItems = $$('.banner__slider-item');
// const dotItems = $$('.list__dots-item');
// const prevBtn = $('.banner__slider-prev--btn');
// const nextBtn = $('.banner__slider-next--btn');
// const sliderItemWidth = sliderItems[0].offsetWidth;
// const sliderItemLength = sliderItems.length;
// let positionX = 0;
// let index = 0;


// prevBtn.addEventListener('click', () => {
//     handleChangeSlider(-1)
// })

// nextBtn.addEventListener('click', () => {
//     handleChangeSlider(1)
// })

// dotItems.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         dotItems.forEach(el => el.classList.remove('active'))
//         const sliderIndex = e.target.dataset.index
//         index = sliderIndex;
//         item.classList.add('active');
//         positionX =  -1 * index * sliderItemWidth
//         sliderMain.style = `transform: translateX(${positionX}px)`
//     })
   
// })

// function handleChangeSlider(direction) {
//     if(direction === -1) {
//         index--
//         if(index <= -1) {
//             index = sliderItemLength - 1
//             positionX = -sliderItemWidth * sliderItemLength
//             dotItems[0].classList.remove('active');
//         }
//         positionX = positionX + sliderItemWidth
//         sliderMain.style = `transform: translateX(${positionX}px)`

//         dotItems[index].classList.add('active');
//         const checkActive = $('.active')
//         if(checkActive) {
//            dotItems[index + 1].classList.remove('active');
//         }
        
//     }
//     else if(direction === 1) {
//         index++
//         positionX =  positionX - sliderItemWidth
//         if(index >= sliderItemLength) {
//             index = 0;
//             positionX = 0;
//             dotItems[sliderItemLength - 1].classList.remove('active');
//         }
      
//         sliderMain.style = `transform: translateX(${positionX}px)`

//         dotItems[index].classList.add('active');
//         const checkActive = $('.active')
//         if(checkActive) {
//            dotItems[index - 1].classList.remove('active');
//         }
//     }
// }

 
// setInterval(() => {handleChangeSlider(1)}, 3000)


//Use library owl-carousel-2
let $j = jQuery.noConflict();
$j(document).ready(function() {
    $j(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true
    })
})