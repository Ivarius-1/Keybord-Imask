function login() {
    let email = document.getElementById('emailid').value;
    let password = document.getElementById('password').value;
    let emailpattern = /@mail.ru/
    let passwordpattern = /....../
    if (emailpattern.test(email) && passwordpattern.test(password)) {
        location.href = 'wellcome_page.html';
    } else {
        window.alert('Доступ ЗАПРЕЩЕН');
    }
}   


let firstinput = document.getElementById('emailid')
let secondinput = document.getElementById('password')   

let firstInputActive = true;    

firstinput.addEventListener('click', function() {
    if (!firstInputActive) return; 

    let input = document.querySelector('#emailid');
    let btns = document.querySelectorAll('.container-kayboard button');
    let ToLower = true

   
    for (let btn of btns) {
        btn.addEventListener('click', function() {
            if (!firstInputActive) return; 

            if (btn.textContent === "Backspace") {
                input.value = input.value.slice(0, -1);
            } else if (btn.textContent === "SPACE") {
                input.value += ' ';
            } else if (btn.textContent === "ENTER") {
               login()
            } else if (btn.textContent === "CapsLock"){
                ToLower = !ToLower
            } else {
                if (ToLower) {
                input.value += btn.textContent.toLowerCase();
                } else {
                    input.value += btn.textContent.toUpperCase()  ;
                }
            }
        });
    }
});


secondinput.addEventListener('click', function() {
    firstInputActive = false; 
    
});
    
    

secondinput.addEventListener('click',function(){

    let input = document.querySelector('#password');
    let btns = document.querySelectorAll('.container-kayboard button');

    for (let btn of btns) {
        btn.addEventListener('click', function() {
            if (btn.textContent === "Backspace") {
                input.value = input.value.slice(0, -1);
            } else if (btn.textContent === "SPACE") {
                input.value += ' ';
            } else if (btn.textContent === "ENTER") {
                login();
            } else {
                input.value += btn.textContent;
            }
        });
    }
})




    





