/**
 * 
 */

	var Itinerarios = element(by.xpath("//ul[@id ='slide-out']/li[3]"));;
	var Pildoras = element(by.xpath("//ul[@id ='slide-out']/li[2]"));
	var Destinos = element(by.xpath("//ul[@id ='slide-out']/li[5]"));
	var Secciones= element(by.xpath("//ul[@id ='slide-out']/li[6]"));
	var Home = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[1]"));
	var Regiones  = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[2]"));
	var Provincias = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[3]"));
	var Ciudades = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[4]"));
	var Actividades = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[6]"));
	var Cat_actividades = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[5]"));
	var Cat_Itinerarios = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[9]"));
	var Historias = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[8]"));
	var Eventos = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[7]"));
	var colItinerarios = element(by.xpath("//ul[@id ='slide-out']/li[6]/ul/li/div[10]"));
	
	function returnFunctions() {
		this.enterCollectionHome = function() {
			Secciones.click();
			Home.click();
		};
		this.enterCollectionRegion = function() {
			Secciones.click();
			Regiones.click();
		};
		
	};
	
	 module.exports = new returnFunctions(); 