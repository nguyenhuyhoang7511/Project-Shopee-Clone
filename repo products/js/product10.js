const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


//handle when hover img show imgMain
function handleHoverImg() {
    const listImgInfo = $$('.product__item-img')
    listImgInfo.forEach(function(imgInfo) {
        imgInfo.addEventListener('mousemove', function() {
            const imgDs = $$('.product1__image')
            const indexImgInfo = this.dataset.index
            imgDs.forEach((img) => {
                if(img.getAttribute('data-index') === indexImgInfo) {
                    img.style.display = 'block'
                }else {
                    img.style.display = 'none'
                }
            })
        })
    })
    
}

handleHoverImg()

//handle click button transform
function handleClickBtnImg() {
    const btnPrevImg = $('.product__list-img-prev')
    const btnNextImg = $('.product__list-img-next')
    const listImgWidth = $('.product__list-img').offsetWidth
    const listImgContent = $('.product__list-img-content')

    btnPrevImg.addEventListener('click', () => {
        listImgContent.style = `transform: translateX(0}px)`
    })

    btnNextImg.addEventListener('click', () => {
        listImgContent.style = `transform: translateX(-${listImgWidth}px)`
    })
   
}

handleClickBtnImg()



// handle click change size
function handleChangeClickSize() {
   const btnProductSize = $$('.product1__size-main')
   btnProductSize.forEach((btn) => {
       btn.addEventListener('click', () => {
           btnProductSize.forEach(e => e.classList.remove('active'))
           btn.classList.add('active')
       })
   })
}

handleChangeClickSize()


// handle click add and subtract input
function handleAddSubtractInput() {
   const addInput = $('.product1__amount-main-plus')
   const subtractInput = $('.product1__amount-main-minus')
   const inputProduct = $('.product1__amount-main-input-content')

   addInput.addEventListener('click', function() {
    inputProduct.value++
   })

   subtractInput.addEventListener('click', function() {
    inputProduct.value--
    if(inputProduct.value < 1) {
        inputProduct.value = 1
    }
   })

   inputProduct.addEventListener('input', () => {
       
   })

}

handleAddSubtractInput()


// handle click add card
function handleClickAddCard() {
    const btnAddCart = $('.product1-btn-cart')
    const modalCart = $('.modal__add-card')
    const addInputAddCart = $('.product1__amount-main-plus')
    const subtractInputAddCart = $('.product1__amount-main-minus')
    const inputChangeValue = $('.product1__amount-main-input-content')
    let count = 1

    addInputAddCart.addEventListener('click', () => {
        count = inputChangeValue.value 
    })

    
    subtractInputAddCart.addEventListener('click', () => {
        count = inputChangeValue.value 
    })
   
   btnAddCart.addEventListener('click', () => {
     modalCart.classList.toggle('active')
     setTimeout(() => {
        modalCart.classList.remove('active')
     }, 1500)


    //inner Product in Cart
    var hasCart = $('.card__list-content')
    const noCart = $('.no-cart')
    const carBtn = $('.cart__btn')
    const cartAmount = $('.cart__amount')
    
    cartAmount.innerHTML = `
       <span class="cart_amount-main">${count}</span>
    `

    carBtn.style.display = 'block'
    
    noCart.classList.remove('cart__list-no-cart')

    let price = 36
    let newPrice = price * count

    hasCart.innerHTML = `
                                <div class="has-cart"> 
                                    <h4 class="cart__heading">Sản phẩm đã thêm</h4>                                
                                    <ul class="cart__list-products">                     
                                        <li class="cart___list-item">
                                            <img src="../assets/image/l-sp-10-1.jpg" alt="" class="cart__item-img-product">

                                            <div class="cart__item-info">
                                                <div class="cart__info-head">
                                                        <h5 class="cart__info-name">Khẩu Trang 3D Kháng Khuẩn UNI MASK Quai Co Dãn 4 Chiều Rộng Rãi Thoáng Khí ,Lọc Mùi,Lọc Bụi Bẩn ,Không Xù Lông Không Mụn</h5>
                                                        <!-- price: giá, multiply: dấu nhân, quantity: số lượng, classify: phân loại -->
                                                    <div class="cart__info-price">
                                                    <span class="cart__price-main">${newPrice < 1000 ? newPrice : newPrice >= 100000 ? String(newPrice).slice(0, 3) + '.'.concat(String(newPrice).slice(3)) :  newPrice >= 10000 ? String(newPrice).slice(0, 2) + '.'.concat(String(newPrice).slice(2)) : String(newPrice).slice(0, 1) + '.'.concat(String(newPrice).slice(1))}.000đ</span>
                                                        <span class="cart__multiply">x</span>
                                                        <span class="cart__quantity">${count++}</span>
                                                    </div>
                                                </div>
                                                    <div class="cart__info-description">
                                                            <span class="cart__remove">Xóa</span>
                                                    </div>
                                            </div>

                                        </li>                                 
                                    </ul>

                        `
     

       function handleRemoveProduct() {
           const btnRemove = $('.cart__remove')
           const cartAmountMain = $('.cart_amount-main')
           btnRemove.addEventListener('click', () => {
              hasCart.innerHTML = ''
              noCart.classList.add('cart__list-no-cart')
              carBtn.style.display = 'none'            
                cartAmountMain.style.display = 'none'           
           })
       }

       handleRemoveProduct()

    })

    //Remove modalCart when click on modalCart
    modalCart.addEventListener('click', () => {
        modalCart.classList.remove('active')
    })

}

handleClickAddCard()



