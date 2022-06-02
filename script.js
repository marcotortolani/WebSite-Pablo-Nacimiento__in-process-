

// const spaLangN1 = document.querySelector('.spanish-1');
// const spaLangN2 = document.querySelector('.spanish-2');

// const engLangN1 = document.querySelector('.english-1');
// const engLangN2 = document.querySelector('.english-2');


//   function langSwitch(checkBox){
//       if (checkBox.checked){
//          spaLangN1.style.setProperty('display', 'none');
//          engLangN1.style.setProperty('display', 'flex');
//          spaLangN2.style.setProperty('display', 'none');
//          engLangN2.style.setProperty('display', 'flex');
              
//       }else{
//          spaLangN1.style.setProperty('display', 'flex');
//          engLangN1.style.setProperty('display', 'none');
//          spaLangN2.style.setProperty('display', 'flex');
//          engLangN2.style.setProperty('display', 'none');
      
//       }
//   }

// console.log(window.clientInformation.language);
// console.log(window.clientInformation);

//!     Header Navigation Hide when Scrolling

const $headerNav = document.querySelector(".header-nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", (e) => {
    if (lastScrollY < window.scrollY){
        $headerNav.classList.add("header-hidden");
    }else {
        $headerNav.classList.remove("header-hidden");
    }

    lastScrollY = window.scrollY;
});


//!     Alternate Home Images

let i = 1;
const $bodyHome = document.querySelector(".body-home");
const page = window.location.pathname;

// Chequea que la página sea el inicio, sino no realiza nada
if (page === "/index.html"){
    let tempBodyImg = setInterval(() => {
     
        if (i===3){
            $bodyHome.classList.remove(`img-${i}`);
            $bodyHome.classList.add(`img-1`);
            i=1;
         
        }else{
            $bodyHome.classList.remove(`img-${i}`);
            $bodyHome.classList.add(`img-${i+1}`);
            i++;
        }
    }, 5000);
}



//!     Switch Language (Español (switch: off) -> English (switch:on) )

const $switchLang = document.querySelector(".switch");
const $switchEs = document.getElementById("es"),
        $switchEn = document.getElementById("en");

let lang = false;


// console.log($switchLang.children);
// console.log($switchLang.children[0]);
// console.log($switchLang.firstElementChild);

// console.log($switchLang.firstElementChild);

const language2 = (e) => {
    console.log(e.target.checked);
    //lang = e.target.checked;
    
    if (e.target.checked) {
        e.target.checked = true;
        $switchEs.classList.replace("off", "on");
        $switchEn.classList.replace("on", "off");
        //console.log(e.target.querySelector("[type]")); 
    } else {
        e.target.checked = false;
        $switchEs.classList.replace("on", "off");
        $switchEn.classList.replace("off", "on");
        //console.log(e.target);
    }
}

function language (e) {
    console.log(e);
    //lang = e.target.checked;
    
    if (!lang) {
        lang = true;
        //console.log(e.target.querySelector("[type]")); 
    } else {
        lang = false;
        //console.log(e.target);
    }
    console.log(lang);
}


// $switchLang.firstElementChild.addEventListener("click", (e) => language2(e));







//!  Form Validation

const $nameField = document.querySelector("[name=name]"),
        $emailField = document.querySelector("[name=email]"),
        $subjectField = document.querySelector("[name=subject]"),
        $textAreaField = document.querySelector("[name=text-area]");




        

const verifyEmptyField = (e, message) => {
    const field = e.target;

    if(field.value.trim().length === 0){
        setError(e, message, true);
    }else {
        setError(e, "", false);
    }
}

const setError = (e, message, isError = true) => {
    const field = e.target;

    if(isError === true){
        field.classList.add("error");
        field.nextElementSibling.classList.add("invalid");
        field.nextElementSibling.textContent = message;
    }else {
        field.classList.remove("error");
        field.nextElementSibling.classList.remove("invalid");
        field.nextElementSibling.textContent = "";
    }
}

const validateEmailFormat = (e, message) => {
    const field = e.target;

    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (field.value.trim().length > 5 && !regex.test(field.value)){ 
        setError(e, message, true);
    } else {
        setError(e, "", false);
    }
}

// Chequea que la página sea contacto, sino no realiza nada
if (page === "/contacto.html"){
    $nameField.addEventListener("blur", (e) => verifyEmptyField(e, "Por favor, complete el nombre"));
    $emailField.addEventListener("blur", (e) => verifyEmptyField(e, "Ingrese un email"));
    $subjectField.addEventListener("blur", (e) => verifyEmptyField(e, "Coloque un asunto"));
    $textAreaField.addEventListener("blur", (e) => verifyEmptyField(e, "Falta un mensaje"));
    
    $emailField.addEventListener("input", (e) => validateEmailFormat(e, "Ingrese un email válido"));
}





