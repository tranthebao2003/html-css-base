var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')

// cơ chế chung
// Khi focus vào input thì thẻ span sẽ width ra, nếu nó trống thì sẽ thêm class error vào form-control
// và chuyển boder-bottom input sang màu đỏ, small sang đỏ (cụ thể trong css)

// hàm này để sử dụng cho 4 object trên
function showError(input, message){
    // input.parentElement: lấy ra thẻ cha của thẻ input
    let parent = input.parentElement
    let small = parent.querySelector('small')

    parent.classList.add('error')
    // innerText : get inner text in elemnt
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

// truyền vào mảng
function checkEmptyError(listInput){
    let isEmptyError = false
    listInput.forEach(function(input){
        input.value = input.value.trim()

        if(input.value == ''){
            isEmptyError = true
            showError(input, 'No empty')
        } else{
            showSuccess(input)
        }
    });

    return isEmptyError
}

function checkEmailError(input){
    // regex này để kiểm tra email (lấy trên mạng)
    const regexEmail = 
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess(input)
    } else{
        showError(input, 'Email Invalid')
    }
    
    return isEmailError
}

function checkLengthError(input, min, max){
    input.value = input.value.trim()
    // ${min}: template literals
    if(input.value.length < min){
        showError(input, `Phai co it nhat ${min} ky tu`)
        return true
    } 
    if (input.value.length > max){
        showError(input, `khong duoc qua ${max} ky tu`)
        return true
    }
    return false
}

function checkMatchPasswordError(passwordInput, cfPassword){
    if(passwordInput.value !== cfPassword.value){
        showError(cfPassword, 'Mat khau khong trung khop')
        return true
    }

    return false
}

// event submit để gửi 1 form: nó sẽ đc kích hoạt khi user ấn vào button
// bởi vì button này có attribute type = 'submit'
form.addEventListener('submit', function(e){
    // preventDefault: ngăn chạn hành vi chuyển trang của cái
    // đường link trong attribute action in tag form (nếu có)
    e.preventDefault()

    // let isEmptyError: nhận giá trị trả về từ function checkEmptyError

    // bài này logic chưa ổn nhất

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUserNameLengthError = checkLengthError(username, 3,15)
    let isPasswordLengthError = checkLengthError(password, 3,15)
    let isMatchError = checkMatchPasswordError(password, confirmPassword)

    if(isEmptyError || isEmailError || isUserNameLengthError
        || isPasswordLengthError || isMatchError){
            // do nothing
        }
    else{
        //logic, call API, ....
    }
        
})