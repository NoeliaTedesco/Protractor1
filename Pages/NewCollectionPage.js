/**
 * 
 */

	var selectCountry = element(by.xpath("//*[@id='general']/div[1]/div/div/a"));
	var selectCountryOptions = element.all(by.xpath("//*[@id='dropdown2']/div"));
	var usser = element(by.id("members_value"));
	var autocompleteUsser = element(by.id("members_dropdown"));
	var tittle = element(by.name("title"));
	var save = element(by.css("body > main > div > div > div:nth-child(5) > div > div > a"));
	
	function returnFunctions() {
		
		this.selectCountry = function() {
			selectCountry.click();			
			browser.sleep(3000);
			selectCountryOptions.get(1).click();
		};
		
		this.selectUsser = function() {
			usser.sendKeys("admin");
			browser.sleep(6000);
			autocompleteUsser.click();
		};
		
		this.completeTitle = function() {
			tittle.sendKeys("PRUEBA COLECCIÓN AUTOMATIZADA");
		};
		
		this.saveForm = function() {
			browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
			save.click();
		};
		
	};
	
	
	 module.exports = new returnFunctions(); 
	
	