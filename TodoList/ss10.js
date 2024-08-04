var input = document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todos = document.querySelector('.todos')

// bài này có thể truyền vào 1 object hoặc 1 biến chứa value của input thui cũng đc
// nếu ta bắt form khi có click submit từ btn thì ko cần bắt nút enter nữa
form.addEventListener('submit', function(event){
    // để ngăn chặn thuộc tính mặc định load lại trang
    // khi event submit xảy ra
    event.preventDefault(); 
    let value = input.value.trim()
    if(value !== ''){
        addTodoElement({
            text: value,
        })

        saveTodoList()
    }
    input.value = ''
})

// this is obejsct: var object = {key: value, key: value}

// nhận vào 1 object
function addTodoElement(todo){
    // 1 object gồm 2 phần text, status
    // {
        // text:
    // }

    // <li>
    //     <span>TEST</span> 
    //     <i class="fa-regular fa-trash-can"></i>
    // </li>

    var TagLi = document.createElement('li')
    // todo.text: chính là thuộc tính text của object todo mà ta truyền vào
    TagLi.innerHTML = 
    `
        <span>${todo.text}</span> 
        <i class="fa-regular fa-trash-can"></i>
    `
    if(todo.status == 'completed'){
        TagLi.setAttribute('class', 'completed')
    }

    // trx khi thêm vào class todos thì ta thêm event cho TagLi
    TagLi.addEventListener('click', function(){
        // this này nó đang chạy trong thẻ li
        // nên nó chính là thẻ li lun
        // Khi ko có class thì toggle nó sẽ thêm thuộc tính class cho thẻ li 
        // và value của class đó là completed ngược lại nếu có rồi thì nó xóa value đi
       this.classList.toggle('completed')
       saveTodoList()
    }
    )
    
    // chọn thẻ i trong thẻ Tagli
    TagLi.querySelector('i').addEventListener('click', function(){
        // this lúc này là tag i chọn vào element cha và xóa element cha đi
        this.parentElement.remove()
        saveTodoList()
    })

    // gán thẻ li là con của todos
    todos.appendChild(TagLi)
}

function saveTodoList(){
    let todoList = document.querySelectorAll('li')
    let todoStorage = [] // là 1 cái mảng mà mỗi thành phần của mảng lại là 1 object gồm 2 key text and status
    todoList.forEach(function(item){
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')

        todoStorage.push({
            text,
            status
        })
    })
    // locaStorage: là 1 object cho phép bạn lưu trữ dữ liệu trên máy khách (client-side) 
    // với dung lượng khoảng 5MB.
    // setItem là một phương thức của localStorage dùng để đặt một cặp key-value 
    // trong bộ lưu trữ của trình duyệt

    // khi gửi dữ liệu về máy chủ web thì phải là 1 chuỗi, và để chuyển
    // đối tượng thành chuỗi thì ta dùng JSON.stringify
    localStorage.setItem('todolist', JSON.stringify(todoStorage))
}


function init(){
    // tương tự getItem là để nhận dữ liệu locaStorage đã setItem từ trx thông qua key todolist
    // JSON.parse là nó chuyển lại string từ sever lại thành dạng mà đã setItem trx đó
    let data = JSON.parse(localStorage.getItem('todolist'))
    // sau khi nó chuyển thành mảng và mỗi thành phần trong mảng là 1 object
    // thì ta dùng for và add lại từng thằng để show cho user
    data.forEach(function(item){
        addTodoElement(item)
    })
}

init()