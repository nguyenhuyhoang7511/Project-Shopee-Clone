const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function handleClickPassWordChange() {
    const btnShowPassWord = $('.form-group-password-show')
    const btnHidePassWord = $('.form-group-password-hide')
    const inputPassWord = $('.form-control-password')

    btnShowPassWord.addEventListener('click', () => {
      btnShowPassWord.style.display = 'none'
      btnHidePassWord.style.display = 'block'
      inputPassWord.type = 'text'
    })

    btnHidePassWord.addEventListener('click', () => {
      btnHidePassWord.style.display = 'none'
      btnShowPassWord.style.display = 'block'
      inputPassWord.type = 'password'
    })
}

handleClickPassWordChange()
