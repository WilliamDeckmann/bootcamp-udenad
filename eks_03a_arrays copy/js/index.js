// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	// Character array
	let CharacterArray = ["Anders", "Fedtmul", "Micky"]

	// Get array names
	function GetArrayNames(Array) {

		for(let i = 0; i < Array.length; i++) {
			let CharacterItem = document.createElement("li");
			CharacterItem.textContent = Array[i];
			document.querySelector("#liste").appendChild(CharacterItem);
		};
	};

	// Initiator
	GetArrayNames(CharacterArray);

}); // Afslutter: DOMContentLoaded