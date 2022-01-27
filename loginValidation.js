


let email=document.getElementById("getEm");
let phNum=document.getElementById("getPh");
let nam=document.getElementById("getNam");
let psw = document.getElementById("getPsw");
let er = document.getElementsByClassName("has-error");


email.onkeydown = ()=>{

    /* alert("You pressed a key inside the input field"); */
   const regex1=/^([a-z0-9\.-]+)@(trendz+)\.([a-z]{1,8})$/;
   const regex2= /^([a-z0-9\.-]+)@(trend+)\.([a-z]{1,8})(.[a-z]{1,8})$/;

   if(regex1.test(email.value)||regex2.test(email.value))
   {
     er[2].innerText="Your Email is Valid";
     er[2].style.color="lime";  
   }
   else{
       er[2].innerText="Invalid Email Id";
       er[2].style.color="red";
   }}

nam.onkeydown = ()=>{

  

    const regname = /^\D*$/;
    let arr = nam.value.search(regname);
    console.log(arr);
    if(arr == 0 && nam.value!=''){
        er[0].innerText = "valid name";
        er[0].style.color = "lime";
    }
    else{
        er[0].innerText = "invalid name";
        er[0].style.color = "red";
    }
   }

   phNum.onkeydown = ()=>{

    const regtendigit = /^\d{9}$/;
    let ts = regtendigit.test(phNum.value);
    console.log(ts);

    if(ts){
        er[1].innerText = "valid phone number";
        er[1].style.color = "lime";
    }
    else{
        er[1].innerText = "invalid phone number";
        er[1].style.color = "red";
    }
   }


   psw.onkeydown = ()=>{

    const regpsw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    let ts = phNum.value.search(regpsw);
    console.log(ts);
        
    console.log(regpsw.test(phNum.value));
    if(regpsw.test(phNum.value)){
        er[3].innerText = "valid password";
        er[3].style.color = "lime";
    }
    else{
        er[3].innerText = "invalid password";
        er[3].style.color = "red";
    }
   }

   