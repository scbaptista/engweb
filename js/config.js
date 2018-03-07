function btnLoginLogout(){

	var btn = document.getElementById('crt-login');

	if(btn.textContent == "Logout"){
		window.location.href="index.html";
	}else{
		window.location.href="page/login.html";
	}

	

}


function validateLogin(){
	
		var email = document.getElementById("email_login").value; 
		var pass = document.getElementById("pass_login").value; 


		if( email==""    || email.indexOf('@')==-1  || email.indexOf('.')==-1 )	{
				document.getElementById("erroDivLogin").innerText  = "Por favor, informe um EMAIL válido!";
			
		}else{
			if (email=="sandra@tecxan.com" && pass=="admin") {
				window.location.href="../index.html?user=desenvolvimento";
			}else{
				document.getElementById("erroDivLogin").innerText  = "Sua password ou email estão errados";
			}
		}

	
	
}

function onLoadLoginPage(){
	$("#pass_login").keyup(function(event) {
	    if (event.keyCode === 13) {
	        validateLogin();
	    }
	});
}

function loadPageIndex(){

	var queryString = window.location.search.substring(1);
    var varArray = queryString.split("="); //eg. index.html?msg=1
    var token = varArray[1];

    document.getElementById("userNameSession").innerText  = token;
    document.getElementById("crt-login").innerText = "Logout";

    if(token == null){
    	document.getElementById("userFromProfile").children[0].style.display = "none";
    	document.getElementById("adminAcess").children[0].style.display = "none"

    	document.getElementById("crt-login").innerText = "Login";


    	loadObjectToDiv("../page/home.html");
    	
    }
    


}



