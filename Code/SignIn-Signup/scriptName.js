sign_up_buttton = document.getElementById("signUp");
sign_in_buttton = document.getElementById("signIn");
container = document.getElementById("container");
body = document.querySelector("body");
let flag_sign_in;
let flag_sign_up;
validationResult = true;
validationResult1 = true;
validationResult2 = true;
validationResult3 = true;

sign_in_buttton.addEventListener("click" , function(){
    if(getWidth() > 768){
        flag_sign_up = true;
        flag_sign_in = false;
    container.classList.remove("active");
    body.classList.remove("active");
    }else{
            document.getElementsByClassName("sign-in-container")[0].classList.remove("active-media");
            document.getElementsByClassName("overlay-container")[0].classList.remove("active-media");
            document.getElementsByClassName("overlay")[0].classList.remove("active-media");
            document.getElementsByClassName("form-container")[0].classList.remove("active-media");
            document.getElementsByClassName("sign-up-container")[0].classList.remove("active-media");
            flag_sign_up = false;
    }
})




sign_up_buttton.addEventListener("click" , function(){  
    if(getWidth()> 768){

        container.classList.add("active");
        body.classList.add("active");
        flag_sign_up = false;
        flag_sign_in = true;
        }else{
   
            document.getElementsByClassName("sign-in-container")[0].classList.add("active-media");
            document.getElementsByClassName("overlay-container")[0].classList.add("active-media");
            document.getElementsByClassName("overlay")[0].classList.add("active-media");
            document.getElementsByClassName("form-container")[0].classList.add("active-media");
            document.getElementsByClassName("sign-up-container")[0].classList.add("active-media");
        }

})




function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }




document.getElementById('register').addEventListener('click', function() {
    let nameerror = document.querySelector("#name");
    let nameInput = document.querySelector("#name").value;
    let nameExp = /^[a-z_-\s]{3,15}$/;
     validationResult = nameExp.test(nameInput);

    if (validationResult == false && nameInput == '') {
        document.querySelector("#name").placeholder = "Type name here..";
        nameerror.style.animation = "mynewmove .4s ";
        nameerror.style.border = "2px solid red";
        nameerror.style.borderRadius = "5px ";
    }
    if (validationResult == false && nameInput != '') {
        document.querySelector("#name").value = '';
        document.querySelector("#name").placeholder = "name from 3 to 15 char";
        nameerror.style.animation = "mynewmove .4s ";
        nameerror.style.border = "2px solid red";
        nameerror.style.borderRadius = "5px ";
    } else if (validationResult == true) {
       
        localStorage.setItem("UserName", nameInput);
        nameerror.style.border = "none";
    }

    let Lnameerror = document.querySelector("#Lname");
let LnameInput = document.querySelector("#Lname").value;
let LnameExp= /^[a-z_-\s]{3,15}$/;
 validationResult = nameExp.test(LnameInput);

if (validationResult == false && LnameInput == '') {
    document.querySelector("#Lname").placeholder = "Type last name here..";
    Lnameerror.style.animation = "mynewmove .4s ";
    Lnameerror.style.border = "2px solid red";
    Lnameerror.style.borderRadius = "5px ";
}
if (validationResult == false && LnameInput != '') {
    document.querySelector("#Lname").value = '';
    document.querySelector("#Lname").placeholder = "Last name from 3 to 15 char";
    Lnameerror.style.animation = "mynewmove .4s ";
    Lnameerror.style.border = "2px solid red";
    Lnameerror.style.borderRadius = "5px ";
} else if (validationResult == true) {
   
    localStorage.setItem("UserName", LnameInput);
    Lnameerror.style.border = "none";
}
    let emailerror = document.querySelector("#email");
    let emailInput = document.querySelector("#email").value;
    let emailExp = /^([a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    validationResult1 = emailExp.test(emailInput);
    if (validationResult1 == false && emailInput == ''){
        document.querySelector("#email").placeholder = "Type Email here..";
        emailerror.style.border = "2px solid red";
        emailerror.style.animation = "mynewmove .4s ";
        emailerror.style.borderRadius = "5px ";
    }
    if (validationResult1 == false && emailInput != '') {
        document.querySelector("#email").value = '';
        document.querySelector("#email").placeholder = "User@company.url";
        emailerror.style.border = "2px solid red";
        emailerror.style.animation = "mynewmove .4s ";
        emailerror.style.borderRadius = "5px";
    }
    if (validationResult1 == true) {
        localStorage.setItem("Email", emailInput);
        emailerror.style.border = "none";
    }

    // ////////
    let passerror = document.querySelector("#password");
    let passInput = document.querySelector('#password').value;
    let passExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    validationResult2 = passExp.test(passInput);
    // if (validationResult2 == false && passInput == '') {
        if(validationResult2 == true){
            console.log('hello1')
            localStorage.setItem("Password", passInput);
       passerror.style.border = "none";
        }else {
        console.log('hello')
        document.querySelector("#password").placeholder = "Type pass here..";
        passerror.style.border = "2px solid red ";
        passerror.style.animation = "mynewmove .4s ";
        passerror.style.borderRadius = "5px ";

    }
    let passerror1 = document.querySelector("#cpassword");
    let passInput1 = document.querySelector('#cpassword').value;
    let passExp1 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    validationResult3 = passExp1.test(passInput1);
    // if (validationResult2 == false && passInput == '') {
        if(validationResult3 == true && passInput1==passInput){
            console.log('hello2')
            localStorage.setItem("Password", passInput1);
       passerror1.style.border = "none";
        }else {
        console.log('hello3')
        document.querySelector("#cpassword").placeholder = "password does not match";
        passerror1.style.border = "2px solid red ";
        passerror1.style.animation = "mynewmove .4s ";
        passerror1.style.borderRadius = "5px ";
    }
    // let passerror = document.querySelector("#password");
    // let passInput = document.querySelector('#password').value;
    // let passExp = /(?=(.*[0-9]))(?=.*[!@#$%^&*])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    // validationResult2 = passExp.test(passInput);
    // if (validationResult2 == false && passInput == '') {
    //     document.querySelector("#password").placeholder = "Type pass here..";
    //     passerror.style.border = "2px solid red ";
    //     passerror.style.animation = "mynewmove .4s ";
    //     passerror.style.borderRadius = "5px ";

    // }

    // console.log(validationResult2)
    // if (validationResult2 == false && passInput != '') {
    //     document.querySelector("#password").value = '';
    //     document.querySelector("#password").placeholder = "1 upper & lower char.$*";
    //     passerror.style.border = "1px solid red";
    //     passerror.style.animation = "mynewmove .4s ";
    // } else if (validationResult2 == true) {
    //     localStorage.setItem("Password", passInput);
    //     passerror.style.border = "none";
    // }



    if(validationResult & validationResult1 & validationResult2 & validationResult3){
        if(getWidth() > 768){
            container.classList.remove("active");
            body.classList.remove("active");
            }else{
                document.getElementsByClassName("sign-in-container")[0].classList.remove("active-media");
                    document.getElementsByClassName("overlay-container")[0].classList.remove("active-media");
                    document.getElementsByClassName("overlay")[0].classList.remove("active-media");
                    document.getElementsByClassName("form-container")[0].classList.remove("active-media");
                    document.getElementsByClassName("sign-up-container")[0].classList.remove("active-media");
            }
    }
});
emaillocal = false;
passwordlocal = false;
document.getElementById('Signin').addEventListener('click', function() {
     emaillocal = document.querySelector("#email1").value;

    if (localStorage.getItem("Email") != emaillocal) {
        document.querySelector("#email1").value = '';
        document.querySelector("#email1").placeholder = "Wrong Email";
        document.querySelector("#email1").style.border = "2px solid red";
        document.querySelector("#email1").style.animation = "mynewmove .4s ";
        document.querySelector("#email1").style.borderRadius = "5px ";
    }


     passwordlocal = document.querySelector("#password1").value;
    if (localStorage.getItem("Password") != passwordlocal) {
        document.querySelector("#password1").value = '';
        document.querySelector("#password1").placeholder = "Wrong Password";
        document.querySelector("#password1").style.border = "2px solid red";
        document.querySelector("#password1").style.animation = "mynewmove .4s ";
        document.querySelector("#password1").style.borderRadius = "5px ";
    }
});


document.getElementById("Signin").addEventListener("click",function(){
    if(emaillocal && passwordlocal){
        window.location.href = "../Welcome Page/index.html";
    }
})


window.addEventListener('resize', function(){
    if(getWidth()< 768 && flag_sign_up) {

        document.getElementsByClassName("sign-in-container")[0].classList.add("active-media");
        document.getElementsByClassName("overlay-container")[0].classList.add("active-media");
        document.getElementsByClassName("overlay")[0].classList.add("active-media");
        document.getElementsByClassName("form-container")[0].classList.add("active-media");
        document.getElementsByClassName("sign-up-container")[0].classList.add("active-media");
        container.classList.remove("active");
        body.classList.remove("active");
        
        }else if(getWidth()> 768 && flag_sign_up){
            container.classList.add("active");
        body.classList.add("active");
        }else if(getWidth()< 768 && flag_sign_up){
            document.getElementsByClassName("sign-in-container")[0].classList.remove("active-media");
            document.getElementsByClassName("overlay-container")[0].classList.remove("active-media");
            document.getElementsByClassName("overlay")[0].classList.remove("active-media");
            document.getElementsByClassName("form-container")[0].classList.remove("active-media");
            document.getElementsByClassName("sign-up-container")[0].classList.remove("active-media");
        }
});
