// call axios api
axios({
    method: 'GET',
    url: 'https://637b5d216f4024eac20b7454.mockapi.io/orangesmw-login',
  })
    .then(function (response) {
        var listUserRegistered = response.data;
        localStorage.setItem("listAccountUser",JSON.stringify(listUserRegistered));
    }) .catch(function(error) {
        console.log(error);
    })

// element register
var elementNameRegister = document.querySelector("#inputNameRegister");
var elementEmailRegister = document.querySelector("#inputEmailRegister");
var elementPassRegister = document.querySelector("#inputPasswordRegister");
var elementRepeatPassRegister = document.querySelector("#inputRepeatPasswordRegister");
var elementCheckBox = document.querySelector("#checkBox");

// btn ShowPass & hidePass
var btnShowPass = document.querySelector("#showPassword");
var btnHidePass = document.querySelector("#hidePassword");
var btnShowRepeatPass = document.querySelector("#showRepeatPassword");
var btnHideRepeatPass = document.querySelector("#hideRepeatPassword");


// btn register 
var btnRegister = document.querySelector(".btn-register");

// switch Login
var switchLogin = document.querySelector(".switch-login");

// event register
btnRegister.addEventListener("click",function() {
    var dataUserRegister = {
        nameRegister: elementNameRegister.value.replace(/\s+/g, '').toLowerCase(),
        emailRegister: elementEmailRegister.value,
        passRegister: elementPassRegister.value,
        rePassRegister: elementRepeatPassRegister.value,
    };
    
    if(dataUserRegister.nameRegister === "" 
        || dataUserRegister.emailRegister === ""
        || dataUserRegister.passRegister === "" 
        || dataUserRegister.rePassRegister === "") {
        alert("Fill full the information");
    } else {
        if(/\d/.test(dataUserRegister.nameRegister)) {
            alert("Names without numbers");
        } else { 
            if(dataUserRegister.passRegister !== dataUserRegister.rePassRegister) {
                alert("Enter the correct password");
            } else if(elementCheckBox.checked === false) {
                alert("Please select I agree to all statements in the Terms of Service")
            } else if(dataUserRegister.emailRegister.includes("@gmail.com") === false ){
                alert("Missing word @gmail.com");
            } else if(JSON.parse(localStorage.getItem("listAccountUser")).find(element => element.emailRegister === dataUserRegister.emailRegister)) {
                alert("Email already exists");
            } else {
                axios({
                    method: 'POST',
                    url: 'https://637b5d216f4024eac20b7454.mockapi.io/orangesmw-login',
                    data: dataUserRegister,
                  }) 
                  .then(function(response) {
                    alert("Successful account registration");
                    window.location = "../html/index.html";
                  }) 
            }
        }
    }
})

// event enter 
addEventListener("keypress",function(event) {
    if(event.key === "Enter"){
        event.preventDefault();
        btnRegister.click();
    }
})

// switch eyes password  
btnShowPass.addEventListener("click",function(){
    if(elementPassRegister.type = "password") {
        elementPassRegister.type = "text";
        btnHidePass.classList.remove("d-none");
        btnHidePass.classList.add("d-block");
        btnShowPass.classList.add("d-none");
        btnShowPass.classList.remove("d-block");

    }
});

btnHidePass.addEventListener("click",function(){
    if(elementPassRegister.type = "text") {
        elementPassRegister.type = "password";
        btnHidePass.classList.remove("d-block");
        btnHidePass.classList.add("d-none");
        btnShowPass.classList.add("d-block");
        btnShowPass.classList.remove("d-none");
    }
})

// switch eyes Repeat password  
btnShowRepeatPass.addEventListener("click",function(){
    if(elementRepeatPassRegister.type = "password") {
        elementRepeatPassRegister.type = "text";
        btnHideRepeatPass.classList.remove("d-none");
        btnHideRepeatPass.classList.add("d-block");
        btnShowRepeatPass.classList.add("d-none");
        btnShowRepeatPass.classList.remove("d-block");
    }
});

btnHideRepeatPass.addEventListener("click",function(){
    if(elementRepeatPassRegister.type = "text") {
        elementRepeatPassRegister.type = "password";
        btnHideRepeatPass.classList.remove("d-block");
        btnHideRepeatPass.classList.add("d-none");
        btnShowRepeatPass.classList.add("d-block");
        btnShowRepeatPass.classList.remove("d-none");
    }
})

switchLogin.addEventListener("click",function() {
    window.location = "index.html";
})







