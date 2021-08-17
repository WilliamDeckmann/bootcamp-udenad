
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	// Elements & Count
	let TextCountElement = document.querySelector("#text-count");
	let CountIncreaseButton = document.querySelector("#btn-count-increase");
	let CountDecreaseButton = document.querySelector("#btn-count-decrease");
	let Count = 5;

	// Display Count
	DisplayTextCount();
	console.log(`Current count: ${Count}`);

	// Display text count
	function DisplayTextCount() {
	
		TextCountElement.textContent=`Count: ${Count}`;
	};

	// Increase text count
	CountIncreaseButton.addEventListener("click", () => {

		// If under 10
		if(Count < 10) {
			Count++;
			DisplayTextCount();
			console.log("Count increased by 1");
			console.log(`Current count: ${Count}`);
		}else{
			console.log("Can't go over count of 10");
		};

		// If reached 10
		if(Count == 10) {
			console.log("Reached maximum count!");
		};
	});

	// Decrease text count
	CountDecreaseButton.addEventListener("click", () => {

		// If over 0
		if(Count > 0) {
			Count--;
			DisplayTextCount();
			console.log("Count decreased by 1");
			console.log(`Current count: ${Count}`);
		}else{
			console.log("Can't go under count of 0");
		};

		// If reached 0
		if(Count == 0) {
			console.log("Reached minimum count!");
		};
	});

}); // Afslutter: DOMContentLoaded