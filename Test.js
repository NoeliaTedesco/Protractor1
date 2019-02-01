/**
 * TEST SUITE = NEW COLLECTION
 */


 describe ('Create new Sections', function() {
	 
	 var objLoginPage = require("./Pages/LoginPage.js");	 
	 var objMenuPage = require("./Pages/MenuPage.js");
	 var objCollectionGrid = require("./Pages/CollectionGridPage.js");
	 var objCollectionPage = require("./Pages/NewCollectionPage.js");

	 //Antes de cada Test	 
	 beforeEach(function() {
		 console.log("Inicia ejecución");
		 objLoginPage.getUrl();
	 });
	 
	 it('New Home section', function() {
		 objLoginPage.loginIn("admin", "tur2016");
		 browser.sleep(3000);
		 objMenuPage.enterCollectionHome();
		 browser.sleep(3000);
		 objCollectionGrid.createNewCollection();
		 browser.sleep(3000);
		 objCollectionPage.selectCountry();
		 objCollectionPage.selectUsser();
		 objCollectionPage.completeTitle();
		 objCollectionPage.saveForm();
		 browser.sleep(6000);
		 
	 });
	 	
	 
	 //Despues de cada Test
	 afterEach(function(){ 
		console.log("Finaliza ejecución") 		 
	 });
	 
	 	 
 });
		 
	 
	 
	 
	 
	 
	 
	 
	 
