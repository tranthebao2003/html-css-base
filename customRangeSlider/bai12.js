var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('.process span')

function updateProcess(percent){
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
}

// mousemove: sự kiện này đc kích hoạt khi chuột di chuyển trên 1 element
range.addEventListener('mousemove', (event) => {
    // event.pageX: offset của con trỏ chuột tại vùng sự kiện đc kích hoạt (range) đến lề trái
    // range.offsetLeft: offset từ left range cho đến lề trái của page

    
    var processWidth = event.pageX - range.offsetLeft
    // range.offsetWidth: chiều rộng của khối range
    var percent = processWidth / range.offsetWidth * 100
    // Math.round: làm trọn tự động dưới 5 là lm tròn xuống còn trên 5 thì lm tròn lên
    percent = Math.round(percent)
    updateProcess(percent)
})

updateProcess(30)
