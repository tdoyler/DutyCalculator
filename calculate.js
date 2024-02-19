function duty() {
	let litersInput = document.getElementById("liters-input").value;
	let alcoPercent = document.getElementById("alcohol-percentage-input").value;
	let prodType = document.getElementById("product-type-input").value;
	let totalOutput = document.getElementById("duty-output");

	// Place duty prices into variables also

	// Think about including checking for minus numbers
	// For Spirits, liters * alcoPercentage. This gives the percentage of alcohol within the liters then multiple this by the Duty Price.
	// For Wine over 15% include make user input alcoPercent in order to check the correct excise code is being chosen. Maybe make this always needed
	if (litersInput == "") {
		alert("Please Enter Liters For Calculation");
	}
	if (prodType == 0) {
		alert("Please Enter A Product Type For Calculation");
	}
	if (prodType == 1) {
		let duty = litersInput * 4.2484;
		totalOutput.innerText = `€${duty.toFixed(2)}`;
	}
	console.log(prodType);
}
