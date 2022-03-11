const listFlashSale = $('.flash__sale-xtra--list')
const listFlashSaleCol = $('.flash__sale-xtra--list-col')
const flashBtnLeft = $('.button__left-flash')
const flashBtnRight = $('.button__right-flash')
let positionFlashSale = parseInt(5 * -listFlashSaleCol.offsetWidth)

flashBtnLeft.addEventListener('click', () => {
    handleChangeFlashSale(-1)
})

flashBtnRight.addEventListener('click', () => {
    handleChangeFlashSale(1)    
})

function handleChangeFlashSale(param) {
    if(param === 1) {
        listFlashSale.style = `transform: translateX(${positionFlashSale}px)`

        //Click rightBtn hide LeftBtn
        flashBtnLeft.style.visibility = 'initial'
        flashBtnRight.style.visibility = 'hidden'

        //handle bug click hide product sale
        const positionFixSale = $('.products-sale--position');
        positionFixSale.style.visibility = 'hidden'

        //handle click show price(special case)
        const priceFlashSaleSpecial = $('.flash__sale-xtra--product-price--position')
        priceFlashSaleSpecial.style.visibility = 'initial'
    }else if(param === -1) {
        listFlashSale.style = `transform: translateX(0}px)`

        //Click leftBtn hide rightBtn
        flashBtnLeft.style.visibility = 'hidden'
        flashBtnRight.style.visibility = 'initial'

        //handle click show price(special case)
        const priceFlashSaleSpecial = $('.flash__sale-xtra--product-price--position')
        priceFlashSaleSpecial.style.visibility = 'hidden'
    }
}