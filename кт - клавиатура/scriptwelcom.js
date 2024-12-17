let inputsurname = document.getElementById('surname');
let inputname = document.getElementById('name');
let inputpatronymic = document.getElementById('patronymic');

inputsurname.addEventListener('input', function() {
  this.value = this.value.replace(/[^а-яА-Я]/g, '');
});

inputname.addEventListener('input', function() {
    this.value = this.value.replace(/[^а-яА-Я]/g, '');
  });

  inputpatronymic.addEventListener('input', function() {
    this.value = this.value.replace(/[^а-яА-Я]/g, '');
  });


  let inputphone = document.getElementById('phone');
  IMask(inputphone, {
    mask: '+{7}',
    lazy: false,  
  })

  let inputyear = document.getElementById('year')
  IMask(inputyear, {
    mask: '0000',
        
  })




  let activeInput = null; 

  function setActiveInput(inputId) {
    activeInput = inputId;
    updateKeyboardListeners();
  }
  
  function updateKeyboardListeners() {
    let btns = document.querySelectorAll('.container-kayboard button');
    btns.forEach(btn => {
      btn.removeEventListener('click', handleKeyboardClick); 
    });
    if (activeInput) {
      btns.forEach(btn => {
        btn.addEventListener('click', handleKeyboardClick);
      });
    }
  }
  
  function handleKeyboardClick() {
    let input = document.getElementById(activeInput);
    if (this.textContent === "Backspace") {
      input.value = input.value.slice(0, -1);
    } else if (this.textContent === "SPACE") {
      input.value += ' ';
    } else {
      input.value += this.textContent;
    }
  }
  
  inputsurname.addEventListener('click', () => setActiveInput('surname'));
  inputname.addEventListener('click', () => setActiveInput('name'));
  inputpatronymic.addEventListener('click', () => setActiveInput('patronymic'));
  inputphone.addEventListener('click', () => setActiveInput('phone'));
  inputyear.addEventListener('click', () => setActiveInput('year'));
  
  
  updateKeyboardListeners();