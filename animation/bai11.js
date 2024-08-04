var btnSuccess = document.querySelector('.control .success')
var btnWarning = document.querySelector('.control .warning')
var btnError = document.querySelector('.control .Error')

btnSuccess.addEventListener('click', () => {
    createToast(btnSuccess.classList.toString())
})

btnWarning.addEventListener('click', () => {
    createToast(btnWarning.classList.toString())
})

btnError.addEventListener('click', () => {
    createToast(btnError.classList.toString())
})



function createToast(status){

    var tmpInner
    switch(status){
        case 'success' : 
            tmpInner = 
            `
            <i class="fa-regular fa-circle-check"></i>
            <span class="message">This is success message</span>
            `

            break
        case 'error' :

            tmpInner = 
            `
            <i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is error message</span>
            `
            break
        case 'warning':

            tmpInner = 
            `
            <i class="fa-regular fa-circle-xmark"></i>
            <span class="message">This is warning message</span>
            `
            break
    }
    

    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = tmpInner + '<span class="countDown"></span>'
        

    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)

    setTimeout(() => {
        toast.style.animation = `slideHide 2s ease-out forwards`
    }, 3000)

    setTimeout(() => {
        toast.remove()
    }, 5000)
}