const listProductTopSearch = $('.category__top-search--content-main')
const listProductTopSearchWidth = listProductTopSearch.offsetWidth - 20
const btnProductTopSearchLeft = $('.button__left-top-search')
const btnProductTopSearchRight = $('.button__right-top-search')

btnProductTopSearchLeft.addEventListener('click', () => {
    handleChangePositionTopSearch(-1)
})

btnProductTopSearchRight.addEventListener('click', () => {
    handleChangePositionTopSearch(1)    
})


function handleChangePositionTopSearch(param) {
   if(param === 1) {
      listProductTopSearch.style = `transform: translateX(${-listProductTopSearchWidth}px)`

      btnProductTopSearchLeft.style.visibility = 'initial'
      btnProductTopSearchRight.style.visibility = 'hidden'
   }else if(param === -1) {
      listProductTopSearch.style = `transform: translateX(0}px)`

      btnProductTopSearchLeft.style.visibility = 'hidden'
      btnProductTopSearchRight.style.visibility = 'initial'
   }
}

handleChangePositionTopSearch()