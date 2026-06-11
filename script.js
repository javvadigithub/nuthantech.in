document
.getElementById('contactForm')
.addEventListener('submit',function(e){

e.preventDefault();

document.getElementById('msg').innerHTML=
"Thank you! We will contact you shortly.";

this.reset();

});