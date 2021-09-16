function validateForm() {
  if (document.getElementById("fname").value == "") {
    alert("First Name must be filled out");
	document.getElementById("fname").focus();
    return false;
  }
  
  if (document.getElementById("lname").value == "") {
    alert("Last Name must be filled out");
	document.getElementById("lname").focus();
    return false;
  }
  
  if (document.getElementById("phone").value == "") {
    alert("Phone Number must be filled out");
	document.getElementById("phone").focus();
    return false;
  }
  
  let phonenumber = document.getElementById("phone").value;
  if (phonenumber.length < 10 || isNaN(phonenumber) || phonenumber.length > 10) {
    alert("Phone Number is Incorrect");
	document.getElementById("fname").focus();
    return false;
  }
  
  if (document.getElementById("age").value == "") {
    alert("Age must be filled out");
	document.getElementById("age").focus();
    return false;
  }
  
  let agefield = document.getElementById("age").value;
  if (agefield.length >= 4 || agefield.length <= 0 || isNaN(agefield) ) {
    alert("Age is Incorrect");
	document.getElementById("age").focus();
    return false;
  }
  
  let countrycheck = document.getElementById("country");
  if (countrycheck.value == "--Select--") {
    alert("Please select a Country!");
	document.getElementById("country").focus();
    return false;
  }
  
  if (document.getElementById("Choice1").checked == false && document.getElementById("Choice2").checked == false && document.getElementById("Choice3").checked == false) {
    alert("Gender must be Selected");
    return false;
  }
  
   if (document.getElementById("email").value == "") {
    alert("Email must be filled out");
	document.getElementById("email").focus();
    return false;
  }
  
   if (document.getElementById("user").value == "") {
    alert("Username must be filled out");
	document.getElementById("user").focus();
    return false;
  }
  
  if (document.getElementById("pass").value == "") {
    alert("Password must be filled out");
	document.getElementById("pass").focus();
    return false;
  }
  
  if (document.getElementById("pass").value.length < 6) {
    alert("Password cannot be less than 6 characters");
	document.getElementById("pass").focus();
    return false;
  }
  
  if (document.getElementById("correct").checked == false) {
    alert("Kindly Agree if the data is correct or not");
	document.getElementById("correct").focus();
	return false;
  }
  
  else{
	  datacomplete();
  }
  
}

function datacomplete(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var phone = document.getElementById("phone").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	var gender;
	if(document.getElementById("Choice1").checked == true){
		gender = document.getElementById("Choice1").value;	
	}
	if(document.getElementById("Choice2").checked == true){
		gender = document.getElementById("Choice2").value;	
	}
	if(document.getElementById("Choice3").checked == true){
		gender = document.getElementById("Choice3").value;	
	}
	
	var email = document.getElementById("email").value;
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	
	alert("Name: " +fname+" "+lname+
			"\nPhone Number: "+phone+
			"\nAge: "+age+
			"\nCountry: "+country+
			"\nGender: "+gender+
			"\nEmail: "+email+
			"\nUsername: "+user);
	
	
}