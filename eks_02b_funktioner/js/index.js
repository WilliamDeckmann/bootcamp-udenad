// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	// Function
	function hils(navn) {
		
		console.log(`Hej med dig, ${navn}!`);
	};
	
	// Initiators
	hils("James");
	hils("George");
	hils("Mike");

}); // Afslutter: DOMContentLoaded