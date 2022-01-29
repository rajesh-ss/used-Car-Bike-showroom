/**
 * getting all required elements
 */

 let email = document.getElementById("femail");
 let nam = document.getElementById("fname");
 let psw = document.getElementById("getPsw");
 let rpsw = document.getElementById("getrPsw");
 let phone = document.getElementById("getPh");
 let er = document.getElementsByClassName("er_or");
 
 
 let password = null;
 
 /**
  * var for cookies storage
  */
 let cname = null;
 let cpsw = null;
 let cphone = null;
 let cemail = null;
 
 /**
  *  Regular Expression
  */
 const regname = /^\D*$/;
 const regex1 = /^([a-z0-9\.-]+)@(trend+)\.([a-z]{1,8})$/;
 const regtendigit = /^\d{10}$/;
 const regpsw = /^([a-zA-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-\[\]\{\}<>`+_;:\=])(?=.*?[a-zA-z0-9]).{6,}$/;
 
 /**
  *  Validating all the forms
  */
 
 function valAll() {
   if (!regex1.test(email.value)) {
     alert("Invalid email id");
   } else {
     if (!(nam.value.search(regname) == 0 && nam.value != "")) {
       alert("Invalid name");
     } else {
       if (!regtendigit.test(phone.value)) {
         alert("Invalid phone number");
       } else {
         if (!regpsw.test(psw.value)) {
           alert("Invalid password format");
         } else {
           if (password != psw.value) {
             alert("The password don't match");
           } else {
 
             console.log("all are correct");
 
             /**
              * Storing the validated data to the cookies
              */
 
 /*             document.cookie = "username="+nam.value+";"
             +"email="+email.value+";"
             +"phone="+phone.value+";"
             +"password="+psw.value+";"
             +" expires=Thu, 18 Dec 2013 12:00:00 UTC"; */
 
             document.cookie = "username="+nam.value+";"
             +"email="+email.value+";"
             +"phone="+phone.value+";"
             +"password="+psw.value+";";
 
 
             /**
              * Extracting the required data from the cookies 
              */
 
             cname = document.cookies.split(";")[0].split("=")[1];
             cemail = document.cookies.split(";")[1].split("=")[1];
             cphone = document.cookies.split(";")[2].split("=")[1];
             cpsw = document.cookies.split(";")[3].split("=")[1];
 
             /**
              * Display the extracted data from cookies in the alert box for confirmation
              * --> user can select either ok or cancel based on the data displyed
              * --> if cancel is pressed then the page will be reloaded
              * --> if ok is pressed then the page will be redirected to the home page
              */
 
             if (confirm("Press ok if the details are correct\n"
             +"User name"+cname+"\n"
             +"Email"+cemail+"\n"
             +"Phone"+cphone)) {
                 document.getElementsByClassName("submitter")[0].action ="./index.html";
               } else {
                 //location.reload();
               }
             
           }
         }
       }
     }
   }
 }
 
 /**
  * Email validation, error display in span
  */
 email.onkeydown = () => {
   if (regex1.test(email.value)) {
     er[1].innerText = "Your Email is Valid";
     er[1].style.color = "lime";
   } else {
     er[1].innerText = "Invalid Email Id";
     er[1].style.color = "red";
   }
 };
 
 /**
  * name validation, error display in span
  */
 nam.onkeydown = () => {
   if (nam.value.search(regname) == 0 && nam.value != "") {
     er[0].innerText = "valid name";
     er[0].style.color = "lime";
   } else {
     er[0].innerText = "invalid name";
     er[0].style.color = "red";
   }
 };
 
 /**
  * phone number validation, error display in span
  */
 phone.onkeydown = () => {
   if (regtendigit.test(phone.value)) {
     er[2].innerText = "valid phone number";
     er[2].style.color = "lime";
   } else {
     er[2].innerText = "invalid phone number";
     er[2].style.color = "red";
   }
 };
 
 /**
  * password validation, error display in span
  */
 psw.onkeydown = () => {
   if (regpsw.test(psw.value)) {
     er[3].innerText = "valid password";
     er[3].style.color = "lime";
     password = psw.value;
   } else {
     er[3].innerText = "invalid password";
     er[3].style.color = "red";
   }
 };
 
 /**
  * re-enter password validation
  */
 
 rpsw.onkeydown = () => {
   if (password == rpsw.value) {
     er[4].innerText = "password matched";
     er[4].style.color = "lime";
   } else {
     if (password == null) {
       er[4].innerText = "Enter the password first";
       er[4].style.color = "red";
     }
     er[4].innerText = "password don't match, try again";
     er[4].style.color = "red";
   }
 };
 