// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...
	
	// Character array
	let CharacterArray = ["Anders", "Fedtmul", "Micky"]



	//--------------------{ Version 1 }--------------------//

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



	//--------------------{ Version 2 }--------------------//

	// Get array names
	function GetArrayNames2(Array) {

		Array.forEach((Character) => {
			document.querySelector("#liste").innerHTML += `<li> ${Character} </li>`;
		});
	};

	// Initiator
	GetArrayNames2(CharacterArray);

}); // Afslutter: DOMContentLoaded