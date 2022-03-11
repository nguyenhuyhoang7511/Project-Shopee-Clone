const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//handle checked calculator price
function handleChecked() {
    const createInputChecked = $$('.create__input-checked')
    const priceShoppeCoin = $('.cart__product-pay-coin-price')

    createInputChecked.forEach(input => {
        input.addEventListener('click',() => {
            createInputChecked.forEach(e => e.classList.toggle('active'))
            priceShoppeCoin.classList.toggle('active')
        })
    })
}

handleChecked()


//handle scroll pay transform
function handleScrollPay() {
   const payTable = $('.cart__product-pay')
   window.onscroll = () => {
       if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
           payTable.classList.add('active')
       }else {
          payTable.classList.remove('active')
       }
   }
}

handleScrollPay()


// handle click add and subtract input
function handleAddSubtractInput() {
    const addInput = $('.product1__amount-main-plus')
    const subtractInput = $('.product1__amount-main-minus')
    const inputProduct = $('.product1__amount-main-input-content')
    const createInputChecked = $$('.create__input-checked')
    let price = 220
    let priceContent = $('.cart__product-main-price-main')
    let count = 1
    createInputChecked.forEach(function(input) {
        input.addEventListener('click', (e) => {
            const priceTotal = $('.cart__product-pay-total-right-price')
            const amountTotal = $('.cart__product-pay-total-right-all')
            count++
            if(e) {
                price = 240
                
            }
            priceContent.innerHTML = '220.000đ'
            if(count % 2 == 0) {
                priceTotal.innerHTML = '0đ'
                amountTotal.innerHTML = `Tổng thanh toán (0 Sản Phẩm):`
            }else{
                priceTotal.innerHTML = '220.000đ'
                amountTotal.innerHTML = `Tổng thanh toán (1 Sản Phẩm):`
                priceContent.innerHTML = '220.000đ'
            }
        })      
    })
 

    addInput.addEventListener('click', function() {
        inputProduct.value++
        const calculatorPrice = price * inputProduct.value
        const amountTotal = $('.cart__product-pay-total-right-all')
        const priceTotal = $('.cart__product-pay-total-right-price')
        let newPrice = calculatorPrice < 1000 ? calculatorPrice: calculatorPrice >= 100000 ? String(calculatorPrice).slice(0, 3) + '.'.concat(String(calculatorPrice).slice(3)) :  calculatorPrice >= 10000 ? String(calculatorPrice).slice(0, 2) + '.'.concat(String(calculatorPrice).slice(2)) : String(calculatorPrice).slice(0, 1) + '.'.concat(String(calculatorPrice).slice(1))
        

        priceContent.innerHTML = `${newPrice}.000đ`
        amountTotal.innerHTML = `Tổng thanh toán (${inputProduct.value} Sản Phẩm):`
        priceTotal.innerHTML = `${newPrice}.000đ`
    })

    subtractInput.addEventListener('click', function() {
        inputProduct.value--
        if(inputProduct.value < 1) {
            inputProduct.value = 1
        }
        const calculatorPrice = price * inputProduct.value
        const amountTotal = $('.cart__product-pay-total-right-all')
        const priceTotal = $('.cart__product-pay-total-right-price')
        let newPrice = calculatorPrice < 1000 ? calculatorPrice: calculatorPrice >= 100000 ? String(calculatorPrice).slice(0, 3) + '.'.concat(String(calculatorPrice).slice(3)) :  calculatorPrice >= 10000 ? String(calculatorPrice).slice(0, 2) + '.'.concat(String(calculatorPrice).slice(2)) : String(calculatorPrice).slice(0, 1) + '.'.concat(String(calculatorPrice).slice(1))
       

        priceContent.innerHTML = `${newPrice}.000đ`
        amountTotal.innerHTML = `Tổng thanh toán (${inputProduct.value} Sản Phẩm):`
        priceTotal.innerHTML = `${newPrice}.000đ`
    })

    inputProduct.addEventListener('input', () => {
        
    })

}

handleAddSubtractInput()


//handle click choose all
function handleChooseAllCart() {
   const chooseCart = $('.cart__product-pay-total-left-choose')
   const createInputCheckedSecond = $$('.create__input-checked')
   const priceShoppeCoin = $('.cart__product-pay-coin-price')
   let priceContent = $('.cart__product-main-price-main')
   let count = 1

   chooseCart.addEventListener('click', (e) => {
     createInputCheckedSecond.forEach((e) => e.classList.toggle('active'))
     priceShoppeCoin.classList.toggle('active')

     const priceTotal = $('.cart__product-pay-total-right-price')
     const amountTotal = $('.cart__product-pay-total-right-all')
     
     count++
     if(e) {
         price = 220
         
     }
     priceContent.innerHTML = '220.000đ'
     if(count % 2 == 0) {
         priceTotal.innerHTML = '0đ'
         amountTotal.innerHTML = `Tổng thanh toán (0 Sản Phẩm):`
     }else{
         priceTotal.innerHTML = '240.000đ'
         amountTotal.innerHTML = `Tổng thanh toán (1 Sản Phẩm):`
         priceContent.innerHTML = '240.000đ'
     }
   })
}

handleChooseAllCart()


//handle remove cart
function handleRemoveCart() {
   const btnRemoveFirst = $('.cart__product-main-remove--main')
   const hasCart = $('.cart__container-main')
   const noCart = $('.cart__container-no--cart')
   const modalRemoveCart = $('.cart__table-choose')
   const modalRemoveCartOverlay = $('.cart__table-choose--overlay')
   const btnRemovePrev = $('.cart__table-choose-btn-prev')
   const btnRemoveNext = $('.cart__table-choose-btn-next')

   btnRemoveFirst.addEventListener('click', () => {
      modalRemoveCart.classList.toggle('active')
      modalRemoveCartOverlay.classList.toggle('active')
   })

   modalRemoveCartOverlay.addEventListener('click', () => {
      handleRemoveTable()
   })

   btnRemovePrev.addEventListener('click', () => {
      handleRemoveTable()
   })

   function handleRemoveTable() {
      modalRemoveCart.classList.remove('active')
      modalRemoveCartOverlay.classList.remove('active')
   }

   btnRemoveNext.addEventListener('click',() => {
      hasCart.style.display = 'none'
      noCart.style.display = 'flex'
      handleRemoveTable()
   })
}

handleRemoveCart()


//handle remove cart when on input subtract
function handleClickInputRemoveCart() {
   const btnInputRemoveCart = $('.product1__amount-main-minus')
   const hasCart = $('.cart__container-main')
   const noCart = $('.cart__container-no--cart')
   const modalRemoveCart = $('.cart__table-choose')
   const modalRemoveCartOverlay = $('.cart__table-choose--overlay')
   const btnRemovePrev = $('.cart__table-choose-btn-prev')
   const btnRemoveNext = $('.cart__table-choose-btn-next')


   btnInputRemoveCart.addEventListener('click', () => {
      const inputRemoveCart = $('.product1__amount-main-input-content')
      if(inputRemoveCart.value <= 1) {
         modalRemoveCart.classList.toggle('active')
         modalRemoveCartOverlay.classList.toggle('active')
      }
   })

   modalRemoveCartOverlay.addEventListener('click', () => {
    handleRemoveTable()
   })

    btnRemovePrev.addEventListener('click', () => {
        handleRemoveTable()
    })

    function handleRemoveTable() {
        modalRemoveCart.classList.remove('active')
        modalRemoveCartOverlay.classList.remove('active')
    }

    btnRemoveNext.addEventListener('click',() => {
        hasCart.style.display = 'none'
        noCart.style.display = 'flex'
        handleRemoveTable()
    })
}

handleClickInputRemoveCart()


//handle remove cart
function handleRemoveCartSecond() {
    const btnRemoveSecond = $('.cart__product-pay-total-left-remove')
    const hasCart = $('.cart__container-main')
    const noCart = $('.cart__container-no--cart')
    const modalRemoveCart = $('.cart__table-choose')
    const modalRemoveCartOverlay = $('.cart__table-choose--overlay')
    const btnRemovePrev = $('.cart__table-choose-btn-prev')
    const btnRemoveNext = $('.cart__table-choose-btn-next')
 
    btnRemoveSecond.addEventListener('click', () => {
       modalRemoveCart.classList.toggle('active')
       modalRemoveCartOverlay.classList.toggle('active')
    })
 
    modalRemoveCartOverlay.addEventListener('click', () => {
       handleRemoveTable()
    })
 
    btnRemovePrev.addEventListener('click', () => {
       handleRemoveTable()
    })
 
    function handleRemoveTable() {
       modalRemoveCart.classList.remove('active')
       modalRemoveCartOverlay.classList.remove('active')
    }
 
    btnRemoveNext.addEventListener('click',() => {
       hasCart.style.display = 'none'
       noCart.style.display = 'flex'
       handleRemoveTable()
    })
}

handleRemoveCartSecond()
 

