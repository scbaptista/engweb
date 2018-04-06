



var  btnLoginLogout  = function(){

	var btn = document.getElementById('crt-login');

	if(btn.textContent == "Logout"){
		window.location.href="index.html";
	}else{
		window.location.href="page/login.html";
	}

	

}


var validateLogin = function (){
	
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

var onLoadLoginPage = function (){
	$("#pass_login").keyup(function(event) {
	    if (event.keyCode === 13) {
	        validateLogin();
	    }
	});
}

var loadPageIndex = function (){

	var queryString = window.location.search.substring(1);
    var varArray = queryString.split("="); //eg. index.html?msg=1
    var token = varArray[1];

    document.getElementById("userNameSession").innerText  = token;
    document.getElementById("crt-login").innerText = "Logout";
    setNewPage('page/asset.html');

    if(token == null){
    	document.getElementById("hist").children[0].style.display = "none";
    	document.getElementById("news").children[0].style.display = "none";
    	document.getElementById("port").children[0].style.display = "none";
    	document.getElementById("userFromProfile").children[0].style.display = "none";
    	document.getElementById("crt-login").innerText = "Login";
    	
        	
    }
    


}

// esta funcao altera o contiudo do elemento com id pages
var setNewPage = function(url){
	document.getElementById("pages").setAttribute('data', url);
}










