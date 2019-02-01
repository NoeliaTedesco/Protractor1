/**
 * 
 */

	var newSection = element(by.css("body > main > div > div.container.space-top.ng-scope > div > a"));
	var registers = element.all(by.css("body > main > div > div.container.space-top.ng-scope > table > tbody > tr"));
	
	
	function returnFunctions() {
		this.createNewCollection = function() {
			newSection.click();
		};
	};
	
	
	module.exports = new returnFunctions();
	