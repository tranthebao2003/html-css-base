var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all')
var tags = [] // tạo 1 cái mảng

function creatTags(){
    content.innerHTML = ''
    // đầu tiên ta dùng vòng for để duyệt qua mảng tags xong đó vs mỗi ptu ta gán nó cho hằng số tag
    // tiếp theo ta dùng property innerHTML của content để thêm template literals (nếu quên xem trong tự học phần jvs).
    // lưu ý ${tag} nó sẽ thay giá trị là giá trị của biến tag đang có
    // onclick = "removeTag(${index}): khi user click vào icon x thì nó sẽ gọi hàm removeTag và truyền váo đó index
    for (let index = 0; index < tags.length; index++) {
        const tag = tags[index];
        content.innerHTML += 
        `  
        <li>
        ${tag}
        <i class="fa-solid fa-xmark" onclick = "removeTag(${index})"></i>
        </li>
        `
    }

    content.appendChild(input)
    input.focus()
}

// sử dụng hàm creatTags


input.addEventListener('keydown', function(event){
   if(event.key == 'Enter' && input.value != ''){
        
        // tags là 1 cái mảng có sử dụng phương thức push thêm phần tử
        // input.value là 1 string dùng phương thức trim để xóa khoảng cách 2 đầu
        tags.push(input.value.trim())
        creatTags()
        input.value = ''
   }
})

function removeTag(index){
    // nó sẽ bắt đầu từ xóa index và xóa 1 phần tử. Vậy có nghĩa là nó sẽ xóa đc 1 phần tử tại index
    tags.splice(index, 1)
    // sau khi xóa xong thì gọi lại hàm này để hiện thị cho user
    creatTags()
}

btnRemoveAll.addEventListener('click', function(){
    tags = []
    creatTags()
})