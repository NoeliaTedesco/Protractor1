/**
 * OBJECT MODEL FROM  LOGIN PAGE
 */
		var usserField = element(by.model("username"));
		var passwordField = element(by.model("password"));
		var enterButton = element(by.name("submit"));
	 
	 
	 function returnFunctions() {
		 this.getUrl = function() {
			 browser.get("http://server.admin.vivi.tur.ar/#/login");
		 };
		 
		 this.loginIn = function(Usser, Password) {	 
			 usserField.sendKeys(Usser);
			 passwordField.sendKeys(Password);
			 enterButton.click();
		 };
	 };
	 
	
	 module.exports = new returnFunctions(); 
