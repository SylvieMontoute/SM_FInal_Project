try{
function validateform(){
  let firstname= document.forms.registration.firstname.value;
  let lastname= document.forms.registration.lastname.value;
  let dob = document.forms.registration.dob.value;
  let sex = document.forms.registration.sex.value;
  let uname = document.forms.registration.uname.value;
  let uniqueid = document.forms.registration.uniqueid.value;

  if(!firstname){
    document.getElementById('firstnameErr').innerHTML="First name is required";
    document.forms.registration.firstname.focus();
    return false;
  }
  if(!lastname){
    document.getElementById('lastnameErr').innerHTML="Last name is required";
    document.forms.registration.lastname.focus();
    return false;
  }
  if(!dob){
    document.getElementById('dobErr').innerHTML="Date of birth is required";
    document.forms.registration.dob.focus();
    return false;
  }
  if(!sex){
    document.getElementById('sexErr').innerHTML="Please select an option";
    document.forms.registration.sex.value;
    return false;
  }
  else{
    document.getElementById('sexErr').innerHTML=" ";
  }
  if(!uname){
    document.getElementById('unameErr').innerHTML="<br/>Email Address is required";
    document.forms.registration.uname.focus();
    return false;
  }
  if(!uniqueid){
    document.getElementById('uniqueidErr').innerHTML="<br/>Password is required";
    document.forms.registration.uniqueid.focus();
    return false;
  }
  }
  function validatefn(){
    let namepattern = /^[A-Za-z\s]*$/;
    let firstname= document.forms.registration.firstname.value;
    if(firstname){
      let x= namepattern.test(firstname);
      if(x==false){
        document.getElementById('firstnameErr').innerHTML="<br/> Name can only contain letters and white spaces";
        document.forms.registration.firstname.focus();
      }
      else{
      document.getElementById('firstnameErr').innerHTML="";
      document.forms.registration.firstname.style.borderColor='green';
      }
    }
}
function validatefn2(){
  let namepattern = /^[A-Za-z\s]*$/;
  let lastname= document.forms.registration.lastname.value;
  if(lastname){
    let x= namepattern.test(lastname);
    if(x==false){
      document.getElementById('lastnameErr').innerHTML="<br/> Name can only contain letters and white spaces";
      document.forms.registration.lastname.focus();
    }
    else{
    document.getElementById('lastnameErr').innerHTML="";
    document.forms.registration.lastname.style.borderColor='green';
    }
  }
}
}
catch{

}
