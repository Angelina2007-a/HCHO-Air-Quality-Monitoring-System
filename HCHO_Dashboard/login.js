import { auth } 
from "./firebase-configuration.js";


import {

RecaptchaVerifier,

signInWithPhoneNumber

}

from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



let confirmationResult;



// Create reCAPTCHA

window.recaptchaVerifier =
new RecaptchaVerifier(

auth,

"recaptcha-container",

{

size:"normal"

}

);





// SEND OTP


document
.getElementById("sendOTP")
.addEventListener("click",()=>{


let phone =
document.getElementById("phone").value;



if(phone==="")
{

alert("Enter phone number");

return;

}



signInWithPhoneNumber(

auth,

phone,

window.recaptchaVerifier

)


.then((result)=>{


confirmationResult=result;


document.getElementById("message")
.innerHTML=
"OTP Sent Successfully";


})


.catch((error)=>{


console.log(error);

alert(error.message);


});


});








// VERIFY OTP


document
.getElementById("verifyOTP")
.addEventListener("click",()=>{


let otp =
document.getElementById("otp").value;



confirmationResult
.confirm(otp)

.then((result)=>{


console.log(
"Logged user:",
result.user
);



document.getElementById("message")
.innerHTML=
"Login Successful";



setTimeout(()=>{


window.location.href=
"index.html";


},1000);



})


.catch((error)=>{


alert(
"Invalid OTP"
);


console.log(error);


});


});