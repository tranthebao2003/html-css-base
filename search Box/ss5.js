var btnSearch = document.querySelector('.search-box__btn')

btnSearch.addEventListener('click', function(){
    // Element con muốn trỏ đến Element cha
    // thì dùng ElementCon_name.parentElement
    // this trong TH này nó chính là btn mình vừa
    // thực hiện sự kiện click
    // console.log(this.parentElement)

    this.parentElement.classList.toggle('open')
})