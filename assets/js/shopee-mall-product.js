const listProductMall = $('.category__general-product')
const listProductMallWidth = listProductMall.offsetWidth
const listProductMallFirstCols = $$('.category__product-hide--col')
const btnProductMallLeft = $('.button__left-shopee-mall')
const btnProductMallRight = $('.button__right-shopee-mall')

btnProductMallLeft.addEventListener('click', () => {
    handleChangeCategoryMall(-1)
})

btnProductMallRight.addEventListener('click', () => {
    handleChangeCategoryMall(1)    
})

function handleChangeCategoryMall(param) {
   if(param === 1) {
      listProductMall.style = `transform: translateX(${-listProductMallWidth}px)`
      btnProductMallLeft.style.visibility = 'initial'
      btnProductMallRight.style.visibility = 'hidden'
      
      //Hide list product first and second when click on btnProductMallRight
      listProductMallFirstCols.forEach((colProductMall) => {
         setTimeout(() => {
             colProductMall.style.opacity = '0'
         }, 0)
      })
   }else if (param === -1) {
      listProductMall.style = `transform: translateX(${0}px)`
      btnProductMallLeft.style.visibility = 'hidden'
      btnProductMallRight.style.visibility = 'initial'

      //Show list product first and second when click on btnProductMallLeft
      listProductMallFirstCols.forEach((colProductMall) => {
         setTimeout(() => {
             colProductMall.style.opacity = '1'
         }, 100)
      })
   }
}