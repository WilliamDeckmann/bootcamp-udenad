// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	// Function
	function hils(navn) {
		
		return(`Hej med dig, ${navn}!`);
	};

	// Variables
	let Hils_Frank = hils("Frank")
	
	// Initiators
	console.log(Hils_Frank)

}); // Afslutter: DOMContentLoaded