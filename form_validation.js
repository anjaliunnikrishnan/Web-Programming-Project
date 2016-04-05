var val=0;

function validate_name() {
	var str=document.getElementById("name").value;
	var pat= /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
	var valid=str.search(pat);
	if(valid !=0){
		alert("Name format incorrect");

		val--;
	}
	else
		val=val+1;

}
function validate_email() {
	var str=document.getElementById("email").value;
	var pat= /^[A-Za-z0-9\._]+@[A-Za-z0-9]+(.com)$/;
	var valid=str.search(pat);
	if(valid !=0){
		alert("Email format incorrect");

		val=val-1;
	}
	else
		val=val+1;
}
function validate_pwd() {
	var str=document.getElementById("pwd1").value;
	if(str.length < 8){
		alert("Password too short");

		val=val-1;
	}
	else
		val=val+1;
}
function validate_pwd2() {
	var pd1=document.getElementById("pwd1").value;
	var pd2=document.getElementById("pwd2").value;
	var isequal= pd1.localeCompare(pd2);
	if( isequal != 0) {
		alert("Passwords do not match");

		val=val-1;
	}
	else
		val=val+1;
}
function check_valid_all(){

		if(val>=4)
			return true;

		else
			return false;
}
