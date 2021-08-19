// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	// skriv din kode her...



	//--------------------{ Variables }--------------------//

	// Elements
	let TextCountElement = document.querySelector("#text-count");
	let CountIncreaseButton = document.querySelector("#btn-count-increase");
	let CountDecreaseButton = document.querySelector("#btn-count-decrease");

	// Count
	let Count = 5;
	let MaxCount = 10;
	let MinCount = 0;



	//--------------------{ Functions }--------------------//

	// Display text count
	function DisplayTextCount() {
	
		TextCountElement.textContent=`Count: ${Count}`;
	};

	// Increase count
	function IncreaseCount() {

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
	};
	
	// Decrease count
	function DecreaseCount() {

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
	};

	// Calculate max & min count (alternative version) 
	/* function CalculateCount(event) {

		// If id matches: increase button
		if(event.target.attributes.id.nodeValue == "btn-count-increase") {

			IncreaseCount();
		};
		
		// If id matches: decrease button
		if(event.target.attributes.id.nodeValue == "btn-count-decrease") {

			DecreaseCount();
		};
	}; */

	// Calculate max & min count
	function CalculateCount(direction) {

		// If id matches: increase button
		if(direction === "Increase" && Count < MaxCount) {

			Count++;
			DisplayTextCount();
		};
		
		// If id matches: decrease button
		if(direction === "Decrease" && Count > MinCount) {

			Count--;
			DisplayTextCount();
		};
	};



	//--------------------{ Initiators }--------------------//

	// Display Count
	DisplayTextCount();
	console.log("Click the + or - button!");
	console.log(`Current count: ${Count}`);

	// Increase text count
	CountIncreaseButton.addEventListener("click", () => {
	
		CalculateCount("Increase");
	});

	// Decrease text count
	CountDecreaseButton.addEventListener("click", () => {

		CalculateCount("Decrease");
	});

}); // Afslutter: DOMContentLoaded