const categoryList = $('.category__content-list')
const categoryBtnLeft = $('.button__left-category')
const categoryBtnRight = $('.button__right-category')
let positionCategory = -360;

categoryBtnLeft.addEventListener('click', () => {
   handleChangeCategory(-1)
})


categoryBtnRight.addEventListener('click', () => {
   handleChangeCategory(1)
})

function handleChangeCategory(direction) {
   if(direction === 1) {
      categoryList.style = `transform: translateX(${positionCategory}px)`
      categoryBtnLeft.style.visibility = 'initial'
      categoryBtnRight.style.visibility = 'hidden'
   }else if(direction === -1) {
      categoryList.style = `transform: translateX(0}px)`
      categoryBtnLeft.style.visibility = 'hidden'
      categoryBtnRight.style.visibility = 'initial'
      
   }
}