var val=0;

function validate_name() {
	var str=document.getElementById("name").value;
	var p=document.getElementById("errorText1");
	if(str.length==0){
		p.style.visibility="visible";
	}
	else{
		p.style.visibility="hidden";
		p=document.getElementById("_name");
		var pat= /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
		var valid=str.search(pat);
		if(valid !=0){
			p.style.visibility="visible";
			val--;
		}
		else{
			p.style.visibility="hidden";
			val=val+1;
		}
	}
}
function validate_email() {
	var str=document.getElementById("email").value;
	var p=document.getElementById("errorText2");
	if(str.length==0){
		p.style.visibility="visible";
	}
	else{
		p.style.visibility="hidden";
		p=document.getElementById("mail");
		var pat= /^[A-Za-z0-9\._]+@[A-Za-z]+(.com)$/;
		var valid=str.search(pat);
		if(valid !=0){
			p.style.visibility="visible";

			val=val-1;
		}
		else{
			p.style.visibility="hidden";
			val=val+1;
		}
	}
}
function validate_pwd() {
	var str=document.getElementById("pwd").value;
	var p=document.getElementById("errorText3");
	if(str.length==0){
		p.style.visibility="visible";
	}
	else{
		p.style.visibility="hidden";
		p=document.getElementById("pass");
		if(str.length < 8){
			p.style.visibility="visible";

			val=val-1;
		}
		else {
			p.style.visibility="hidden";
			val=val+1;
		}
	}
}
function validate_pwd2() {
	var pd1=document.getElementById("pwd").value;
	var pd2=document.getElementById("cpwd").value;
	var p=document.getElementById("errorText4");
	if(pd2.length==0){
		p.style.visibility="visible";
	}
	else {
		p.style.visibility="hidden";
		p=document.getElementById("cpd");
		var isequal= pd1.localeCompare(pd2);
		if( isequal != 0) {
			p.style.visibility="visible";
			val=val-1;
		}
		else{
			p.style.visibility="hidden";
			val=val+1;
		}
	}
}
function check_valid_all(){

		if(val>=4)
			return true;

		else
			return false;
}
