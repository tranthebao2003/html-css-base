var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

// images: là 1 nodeList
var currentIndex = 0
function showGallery(){
    if(currentIndex == 0){
        prev.classList.add('hide')
    } else{
        prev.classList.remove('hide')
    }

    if(currentIndex == images.length - 1){
        next.classList.add('hide')
    } else{
        next.classList.remove('hide')
    }
    
    //display
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

// nodeList.forEach(callbackfn(value: element, key; number))
//từ đây ta thấy item là những node(image) trong nodeList images và index chính là key của nó
images.forEach(function(item, index){
    // khi click vào image thì sự kiện sẽ đc kích hoạt, chạy vào function gán
    // index cho currentIndex, sau đó gán value của src tại img mà user vừa click cho galleryImg.src cuối cùng là chỉ cần hiển
    // thị ra class gallery bao gồm cả image và all nút điều hướng
    item.addEventListener('click', function(){
        currentIndex = index
        showGallery()
    })
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

// này là ta bắt sự kiện keydown
// nếu keyCode == 27 (Phím ESC: 27 in unicode)
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallery()
    }
})

next.addEventListener('click', function(){
    if(currentIndex < images.length - 1){
        currentIndex++
        showGallery()
    }
})

