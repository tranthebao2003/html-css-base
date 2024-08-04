var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.code p:last-child')
var eAlert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')


document.addEventListener('keydown', function(e){
    //e trả về là event keydown của trang html này lun
    // e.key: nó chính là key word mà mik ấn ấn trên keyboard
    eKey.innerText = e.key // trả về chữ trên bàn phím
    eLocation.innerText = e.location // trả về vị trí trên bàn phím
    eWhich.innerText = e.which // trả về mã ascii 
    eCode.innerText = e.code
    result.innerText = e.which

    console.log(e.key)
    console.log(e.location)
    console.log(e.which)
    console.log(e.code)

    eAlert.classList.add('hide')
    box.classList.remove('hide')
})
