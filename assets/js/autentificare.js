function validateform(){  
var name=document.myform.name.value;
var prenume=document.myform.prenume.value; 
var adresa=document.myform.adresa.value;  
var data=document.myform.data.value; 
var telefon=document.myform.telefon.value; 
var email=document.myform.email.value; 
var re0 = /^[a-zA-Z]+$/;
var re = /^[a-zA-Z ]+$/;
var re1=/[@#$%^&*]/;
var re2=/^([0-9]{1})$/;
var re3 = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
var phoneno = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
var email= /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/;
submitOK="true";

if ((name.length<3)||(!re0.test(myform.name.value))){  

    myform.name.style.background = "#FFA500";
  alert("Nume: trebuie sa contina cel putin 3 litere si sa nu contina cifre");
  
  submitOK="false";  
  
}
else {myform.name.style.background = "#FFFFFF";}
if ((prenume.length<3)||(!re.test(myform.prenume.value))){  
  
  myform.prenume.style.background = "#FFA500";
  alert("Prenume: trebuie sa contina cel putin 3 litere si sa nu contina cifre");
  submitOK="false";  
}
else {myform.prenume.style.background = "#FFFFFF";}
if ((adresa.length<4)||(re1.test(myform.adresa.value))){  
  
  myform.adresa.style.background = "#FFA500";
alert("Adresa: trebuie sa contina cel putin 3 caractere si cel putin o cifra. Nu sunt acceptate caracterele @#$%^&}");
  submitOK="false";  
}
else {myform.adresa.style.background = "#FFFFFF";}
if (!(re3.test(myform.data.value))){  
   
  myform.data.style.background = "#FFA500";
  alert("Data nasterii trebuie sa fie de forma: dd/mm/yyyy");
  submitOK="false";  
}
else {myform.data.style.background = "#FFFFFF";}
if (!(phoneno.test(myform.telefon.value))){  
  
  // [xxx-xxx-xxxx, xxx.xxx.xxxx, xxx xxx xxxx]
  myform.telefon.style.background = "#FFA500";
  alert("Telefon de forma: xxx-xxx-xxxx, xxx.xxx.xxxx, xxx xxx xxxx");
  submitOK="false";  
}
else {myform.telefon.style.background = "#FFFFFF";}
if (!(email.test(myform.email.value))){  
  
  myform.email.style.background = "#FFA500";
  alert("Email trebuie sa accepte doar o adresa de email corecta dpdv sintactic");
 submitOK="false"; 
}
else {myform.email.style.background = "#FFFFFF";}


  var submit1=document.getElementById("submit"); 
submit1.onclick=function showHide (){
  if (submitOK=="true"){
  myform.style.display="none";
  
  alert("Nume="+document.myform.name.value+
    "\nPrenume="+document.myform.prenume.value+
    "\nAdresa="+document.myform.adresa.value+
    "\nData nasterii="+document.myform.data.value+
    "\nTelefon="+document.myform.telefon.value+
    "\nE-mail="+document.myform.email.value+
    "\nCuloarea preferata="+document.myform.culoare_favorita.style.backgroundColor);
} 
}
if (submitOK == "false") {
        return false;
    }
} 
 

