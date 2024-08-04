var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer button')


function toggleModal(){
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)

modal.addEventListener('click', function(e){
    console.log(e.target)
    console.log(e.currentTarget)
    //e.target là modal mình thực hiện sự kiện còn e.currentTarget là modal hiện tại đang sử dụng method này
    // vd: nếu khi hiện modal welcome thì khi mik ấn close thì e.target: là btn Clost còn e.currentTarget: modal(lớp phủ mờ)
    // còn nếu mik ấn vào modal(lớp phủ mờ) thì e.target và e.currentTarget là 1
    if(e.target == e.currentTarget){
        toggleModal()
    }
})