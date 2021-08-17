// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...

	// Elements & Count
	let TextCountElement = document.querySelector("#text-count");
	let CountIncreaseButton = document.querySelector("#btn-count-increase");
	let CountDecreaseButton = document.querySelector("#btn-count-decrease");
	let Count = 5;
	let MaxCount = 15;
	let MinCount = 0;

	// Display Count
	DisplayTextCount();
	console.log(`Current count: ${Count}`);

	// Display text count
	function DisplayTextCount() {
	
		TextCountElement.textContent=`Count: ${Count}`;
	};

	// Increase text count
	CountIncreaseButton.addEventListener("click", () => {

		// If under maximum count
		if(Count < MaxCount) {
			Count++;
			DisplayTextCount();
			console.log("Count increased by 1");
			console.log(`Current count: ${Count}`);
		}else{
			console.log(`Can't go over count of ${MaxCount}`);
		};

		// If reached maximum count
		if(Count == MaxCount) {
			console.log("Reached maximum count!");
		};
	});

	// Decrease text count
	CountDecreaseButton.addEventListener("click", () => {

		// If over minimum count
		if(Count > MinCount) {
			Count--;
			DisplayTextCount();
			console.log("Count decreased by 1");
			console.log(`Current count: ${Count}`);
		}else{
			console.log(`Can't go under count of ${MinCount}`);
		};

		// If reached minimum count
		if(Count == MinCount) {
			console.log("Reached minimum count!");
		};
	});

}); // Afslutter: DOMContentLoaded