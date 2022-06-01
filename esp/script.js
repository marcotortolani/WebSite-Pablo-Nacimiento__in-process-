

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


//!  Form Validation

const $nameField = document.querySelector("[name=name]"),
        $emailField = document.querySelector("[name=email]"),
        $subjectField = document.querySelector("[name=subject]"),
        $textAreaField = document.querySelector("[name=text-area]");


$nameField.addEventListener("blur", (e) => verifyEmptyField(e, "Por favor, complete el nombre"));
$emailField.addEventListener("blur", (e) => verifyEmptyField(e, "Ingrese un email"));
$subjectField.addEventListener("blur", (e) => verifyEmptyField(e, "Coloque un asunto"));
$textAreaField.addEventListener("blur", (e) => verifyEmptyField(e, "Falta un mensaje"));

$emailField.addEventListener("input", (e) => validateEmailFormat(e, "Ingrese un email válido"));


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
