var upload = document.querySelector('#myPicture')
var preview = document.querySelector('.preview')

// change diễn ra khi cái giá trị của element thay đổi
upload.addEventListener('change', (event) =>{
    // upload.files: nó sẽ trả về danh sách các file
    // đã upload lên tag input và mik chỉ lấy file đầu tiên

    var file = upload.files[0]

    // endsWith('.jpg'): Đây là phương thức của chuỗi trong JavaScript, nó trả về true nếu chuỗi
    //  kết thúc bằng chuỗi con mà bạn chỉ định
    if(!file.name.endsWith('.jpg')){
        alert('File bạn nhập không phải đuôi jpg')
    }
    // file.size / (1024*1024): kích thước file chuyển từ byte sang Mb
    else if(file.size / (1024*1024) > 5){
        alert('File bạn nhập vượt quá 5MB')
    } else{
        var img = document.createElement('img')
        // URL.createObjectURL(): Đây là một phương thức của đối tượng URL, mục đích của nó là tạo một đường
        //  dẫn URL tạm thời cho một đối tượng. Khi bạn truyền một Blob hoặc File vào phương thức này, 
        //  nó sẽ trả về một URL đại diện cho đối tượng đó
        img.src = URL.createObjectURL(upload.files[0])
        preview.appendChild(img)
    }
        

    
    

    
})