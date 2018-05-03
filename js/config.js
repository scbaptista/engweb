
// contiudo para login 


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
			if (email=="gestao@teste.com" && pass=="admin") {
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


// gestao do index page do projecto
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


// contiudo geral
// esta funcao altera o contiudo do elemento com id pages
var setNewPage = function(url){
	document.getElementById("pages").setAttribute('data', url);
}


// gestao da page de perfile

var getModalWithDrow = function(value){
	document.getElementById('modelFrame').style.display=value;
}

var loadPagePerfil = function(){
	document.getElementsByClassName("tablink")[0].click();
	function openType(evt, c) {
	  var i, x, tablinks;
	  x = document.getElementsByClassName("type");
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	  }
	  tablinks = document.getElementsByClassName("tablink");
	  for (i = 0; i < x.length; i++) {
	    tablinks[i].classList.remove("w3-light-grey");
	  }
	  document.getElementById(c).style.display = "block";
	  evt.currentTarget.classList.add("w3-light-grey");
	}


	//<!--script para dar espaço a cada 4 digitos e apenas aceita digitos na inputbox card number...-->
	  var txtCardNumber = document.querySelector("#credit-number");
	  txtCardNumber.addEventListener("input", onChangeTxtCardNumber);
	  function onChangeTxtCardNumber(e) {
	      var cardNumber = txtCardNumber.value;
	  	  // Do not allow users to write invalid characters
	      var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
	      formattedCardNumber = formattedCardNumber.substring(0, 16);
	      // Split the card number is groups of 4
	      var cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
	      if (cardNumberSections !== null) {
	          formattedCardNumber = cardNumberSections.join(' ');
	      }

	      // If the formmattedCardNumber is different to what is shown, change the value
	      if (cardNumber !== formattedCardNumber) {
	          txtCardNumber.value = formattedCardNumber;
	      }
	  }

	  //<!--script para dar espaço a cada 3 digitos e apenas aceita digitos na inputbox Contact number...-->
	  var txtContact = document.querySelector("#contact");
	  txtContact.addEventListener("input", onChangeTxtContact);
	  function onChangeTxtContact(e) {
	      var contactNumber = txtContact.value;
	  	  // Do not allow users to write invalid characters
	      var formattedContact = contactNumber.replace(/[^\d]/g, "");
	      formattedContact = formattedContact.substring(0, 9);
	      // Split the card number is groups of 4
	      var contactSections = formattedContact.match(/\d{1,3}/g);
	      if (contactSections !== null) {
	          formattedContact = contactSections.join(' ');
	      }

	      // If the formmattedCardNumber is different to what is shown, change the value
	      if (contactNumber !== formattedContact) {
	          txtContact.value = formattedContact;
	      }
	  }


	  //script para por uma / a cada 2 digitos e apenas aceita digitos na inputbox card data...-->
	  var txtCardData = document.querySelector("#credit-expires");
	  txtCardData.addEventListener("input", onChangeTxtCardData);
	  function onChangeTxtCardData(e) {
	      var cardData = txtCardData.value;
	  	  // Do not allow users to write invalid characters
	      var formattedCardData = cardData.replace(/[^\d]/g, "");
	      formattedCardData = formattedCardData.substring(0,4);
	      // Split the card number is groups of 4
	      var cardDataSections = formattedCardData.match(/\d{1,2}/g);
	      if (cardDataSections !== null) {
	          formattedCardData = cardDataSections.join('/');
	      }

	      // If the formmattedCardNumber is different to what is shown, change the value
	      if (cardData !== formattedCardData) {
	          txtCardData.value = formattedCardData;
	      }
	  }

}











