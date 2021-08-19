// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...
	
	hils("Hej med dig!");
	
	function hils(messege) {

		console.log(messege);
	};

}); // Afslutter: DOMContentLoaded