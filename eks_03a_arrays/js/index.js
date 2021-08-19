// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	let CharacterArray = ["Anders", "Fedtmul", "Micky"]

	// Version: 1
	for(let i = 0; i < CharacterArray.length; i++) {
		let CharacterItem = document.createElement("li");
		CharacterItem.textContent = CharacterArray[i];
		document.querySelector("#liste").appendChild(CharacterItem);
	};

	// Version: 2
	CharacterArray.forEach((Character) => {
		document.querySelector("#liste").innerHTML += `<li> ${Character} </li>`;
	});

}); // Afslutter: DOMContentLoaded