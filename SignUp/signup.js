let $ = document
let userFirstName = $.querySelector("#firstname")
let userLastName = $.querySelector('#lastname')
let userEmail = $.querySelector('#mobile')
let userPassword = $.querySelector('#password')
let submitBtn = $.querySelector('.submit-btn')
let userBirthMonth = $.querySelector('#month-container')
let userBirthday = $.querySelector('#day-container')
let userBirthYear = $.querySelector('#year-container')
let radioBtn = $.querySelectorAll("gender-container , .signup-radio-btn")
let eyeSlash = $.querySelector('.fa-eye-slash')
let array = []

const genderArray = []


    radioBtn.forEach(element  => {
        element.addEventListener('click', function(){
        genderArray.push(element.value)
        })
    })
    

function showPassword(){
    userPassword.type = 'text'
}



submitBtn.addEventListener('click', function(e){
    if (userFirstName.value && userLastName.value && userEmail.value && userPassword.value) {
        e.preventDefault();
        let newObj = {
            id: array.length+1,
            firstname: userFirstName.value,
            lastname: userLastName.value,
            email: userEmail.value,
            password: userPassword.value,
            birth: userBirthMonth.value + "/" + userBirthday.value + "/" + userBirthYear.value,
            gender: genderArray.pop()
            
        }
        array.push(newObj)
        console.log(array);
        userFirstName.value = ""
        userLastName.value = ""
        userEmail.value = ""
        userPassword.value = ""
        
    }else{
        alert('please fill all fields')
    }
    
})


