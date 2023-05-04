function errorMessage(id, error){
let errorElement = document.getElementById(id)
    errorElement.getElementsByClassName("formerror")[0].innerHTML= error;
}

function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function validateForm(){
    let returnValue = true;
    clearErrors();

// do form validation and return false and give error message if entry is invalid
    let name = document.forms['myForm']["fname"].value;
    if (name.length<5){
    errorMessage("name", "*Length of name is too short");
    returnValue= false;
   }

   let email = document.forms['myForm']["femail"].value;
   if (email.length>15){
   errorMessage("email", "*Length of email is too long");
   returnValue= false;
  }

  let phone = document.forms['myForm']["fphone"].value;
   if (phone.length !==10){
   errorMessage("phone", "*Phone number should have 10 digits");
   returnValue= false;
}

let password = document.forms['myForm']["fpassword"].value;
   if (password.length <8){
   errorMessage("password", "*Minimum length of password should be 8 ");
   returnValue= false;
   }

   let confirmPassword = document.forms['myForm']["fconfirmpassword"].value;
   if (confirmPassword !== password){
   errorMessage("cpassword", "*Not matching with password");
   returnValue= false;
   }
}


