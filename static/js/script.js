// JavaScript Document

$(document).ready(function(){


$('#fname').blur(function(){

var fname = $(this).val()
if(fname==""){
$("#errfname").html("This field is required !");
return false
}
else if(fname.length<2){
$("#errfname").html("Should having");
return false
}
else{
$("#errfname").html("");
return true

}} ),

$('#lname').blur(function(){

var lname = $(this).val()
if(lname==""){
$("#errlname").html("This field is required");
return false
}
else{
$("#errlname").html("");
return true

}


  }),

  $('#email').blur(function(){
var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
var email = $(this).val()
if(email==""){
$("#erremail").html("This field is required");
return false
}
else if(!pattern.test(email))

{
$("#erremail").html("Please enter valid email address");
return false

}
else{
$("#erremail").html("");
return true

}


  }),

  $("#password1").blur(function(){
    var password1 = $(this).val()
  var regex = /^[a-zA-Z0-9]+$/

if(password1 == ""){
$("#errpassword1").html("This field is required");
return false
}
  else if( !regex.test(password1) || password1.length <8){
  $("#errpassword1").html("Password shoud contain alpha nuemeric <br> Must contain 8 characters");
  return false
  }
  else{
  $("#errpassword1").html("");
  return true
  }

  }) ,

  $("#password2").blur(function(){
    var password2 = $(this).val()
  var regex = /^[A-Za-z0-9]+$/

if(password2 == ""){
$("#errpassword2").html("This field is required");
return false
}
  else if(! regex.test(password2) || password2.length <8){
  $("#errpassword2").html("Password shoud contain alpha nuemeric <br> Must contain 8 characters");
  return false
  }
  else{
  $("#errpassword2").html("");
  return true
  }

  }),

  $("#phone").blur(function(){
  var phone =  $(this).val()

  if(phone == ""){
  $("#errphone").html("This field is required");
  return false
  }
  else if(isNaN(phone) ||phone.length<10){
  $("#errphone").html("Please enter valid Phone number");
  return false
  }
  else{
  $("#errphone").html("");
  return true
  }

  }),

  $('#submit').click(function(){

  var password1 = $('#password1').val()
  var password2 = $('#password2').val()

if(password1===password2){
return true
$("#passwd").html("");
}
else{
$("#passwd").html("Password Missmatch");
return false
}

  })

return false
})





/*
function validate(){
	
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var phone = document.getElementById('phone').value;
	var pswd1 = document.getElementById('password1').value;
	var pswd2 = document.getElementById('password2').value;

	
	if(isNaN(fname) && fname.length>3){
		
	
		document.getElementById('errfname').innerHTML="";
		
		if(isNaN(lname)){
		
			
			document.getElementById('errlname').innerHTML="";
			
			if(phone.length===10){
	
				document.getElementById('errphone').innerHTML="";
				
				
				if(pswd1===pswd2){
					if(pswd1.length>6 && pswd2.length>6)
					{
					return true;
					}
					else{
						document.getElementById('passwd').innerHTML="Password is Weak <br> Please use Alphanbets and Numbers to Make strong password";
						document.form1.password1.focus();
						return false;
					}
					
				
				}
				else{
					document.getElementById('passwd').innerHTML="Password miss match";
			document.form1.password1.focus();
				return false;
				}		
				
				
				
				
				
			}
			else{
				document.getElementById('errphone').innerHTML="Please Ente Valid Phone Number";
			document.form1.phone.focus();
				return false;
			}
			
		}
		else{
			document.getElementById('errlname').innerHTML="Please Ente Valid name";
			document.form1.lname.focus();
			return false;
		}
	}
		else{
			document.getElementById('errfname').innerHTML="Please Ente Valid name";
			document.form1.fname.focus();
			return false;
		}
			alert('last');
			return false;
			
	
	
	

	
	
}


*/