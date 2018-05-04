/** 
 * Version 1.0, Jan 2012
 */

var Markit = {};
/**
* Define the QuoteService.
* First argument is symbol (string) for the quote. Examples: AAPL, MSFT, JNJ, GOOG.
* Second argument is fCallback, a callback function executed onSuccess of API.
*/
Markit.QuoteService = function(sSymbol, fCallback) {
    this.symbol = sSymbol;
    this.fCallback = fCallback;
    this.DATA_SRC = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
    this.makeRequest();
};
/**
* Ajax success callback. fCallback is the 2nd argument in the QuoteService constructor.
*/
Markit.QuoteService.prototype.handleSuccess = function(jsonResult) {
    this.fCallback(jsonResult);
};
/**
* Ajax error callback
*/
Markit.QuoteService.prototype.handleError = function(jsonResult) {
    console.error(jsonResult);
};
/** 
* Starts a new ajax request to the Quote API
*/
Markit.QuoteService.prototype.makeRequest = function() {
    //Abort any open requests
    if (this.xhr) { this.xhr.abort(); }
    //Start a new request
    this.xhr = $.ajax({
        data: { symbol: this.symbol },
        url: this.DATA_SRC,
        dataType: "jsonp",
        success: this.handleSuccess,
        error: this.handleError,
        context: this
    });
};


var getAsset = function(asset){
  new Markit.QuoteService(asset, function(jsonResult) {

    //Catch errors
    if (!jsonResult || jsonResult.Message){
        console.error("Error: ", jsonResult.Message);
        return;
    }

    //If all goes well, your quote will be here.
    console.log(jsonResult);

    document.getElementById("symbol").innerHTML += "<p>"+jsonResult.Name+"</p>";
    document.getElementById("change").innerHTML += "<p>"+jsonResult.Change+"</p>";
    document.getElementById("sell").innerHTML += "<table><tr><td><button class='fa fa-scribd' id=\"myBtn\"></button></td><td><p style='margin-left: 8px;'>"+ jsonResult.Low+"</p></td></tr></table>";
    document.getElementById("buy").innerHTML += "<table><tr><td><p class='fa fa-bold'></p></td><td><p style='margin-left: 8px;'>"+ jsonResult.High+"</p></td></tr></table>";


    // Get the modal
    var modal = document.getElementById('sell-buy');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
        document.getElementById("modal-options").style.display = "block";

        document.getElementById("sell-tab").innerHTML = "<br><h4>SELL "+jsonResult.Name+"</h4>";
        document.getElementById("sell-tab").innerHTML +="<h4>	"+jsonResult.Low+"$</h4><br>";
        document.getElementById("sell-tab").innerHTML +="<b>AMOUNT</b> <input id='amount' type='number' name='number' value='1000' min='100' max='10000' step='100'/> \ <button id='to-units'>UNITS</button>";
        document.getElementById("sell-tab").innerHTML +="<p>UNITS: 20000 </p>";
       /* document.getElementById("sell-tab").innerHTML += "<div class='modal-options'> <!-- mudar o nome -->"
  															+"<a href='javascript:addPage('stoploss', 'leverage', 'takeprofit');'>STOP LOSS</a>"
													  		+"<a href='javascript:addPage('leverage','stoploss', 'takeprofit');'>LEVERAGE</a>"
													  		+"<a href='javascript:addPage('takeprofit', 'leverage','stoploss');'>TAKE PROFIT</a>"	
														+"</div>"

														+"<div id='stoploss'>"
														  +"<h2>Stop loss</h2>"
														  +"<p>stop loss</p>"
														+"</div>"

														+"<div id='leverage' style='display: none;'>"
														  +"<h2>leverage</h2>"
														  +"<p>leverage</p>"
														+"</div>"

														+"<div id='takeprofit' style='display: none;'>"
														  +"<h2>Take profit</h2>"
														  +"<p>take profit</p>"
														+"</div>"*/


        document.getElementById("buy-tab").innerHTML = "<h4>BUY "+jsonResult.Name+"</h4>";
        document.getElementById("buy-tab").innerHTML += "<h4>	"+jsonResult.High+"</h4><br><br>";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    amount.onchange = function(){
        //alterar o nº de unidades (acho que terá de ser quando tivermos backend)
    }
    /**
    * Need help? Visit the API documentation at:
    * http://dev.markitondemand.com
    */
});
}

<script>
function addPage(div1, div2, div3){
	document.getElementById(div1).style.display = "inline";
	if(div2!=null){
    	if(document.getElementById(div2).style.display != 'none'){
      		alert('parvo');
   		}
    	var value =  document.getElementById(div2).children.length;
    	var i;
    	for (i=1;i<=value;i++){
      		document.getElementById(div2).children[i].style.display = "none";
    	}
    	alert('teste');
 	}
	alert('estupido');
	  	if(div3!=null){
	        alert('ola');
			var value2 =  document.getElementById(div3).children.length;
		    var i2;
	    	for (i2=1;i2<=value2;i2++){
	     		document.getElementById(div3).children[i2].style.display = "none";
	    	}
	  
	  	}  
}
</script>
