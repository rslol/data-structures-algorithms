// Make an object return at the end
	// Loop over string, for each character...
		//  If character is a number/letter and is a key in object, add one to count
		// 	If character is a number/letter and is not in object, add it to object and set value to 1
		//  If character is something else (space, period, etc) dont do anything

function charCount(str) {
	// Make an object return at the end
	var count = {};
	// Loop over string, for each character...
	for (var i = 0 ; i < str.length; i++) {
		var char = str[i].toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			//  If character is a number/letter and is a key in object, add one to count
			if (count[char] > 0) {
				count[char]++;
			// 	If character is a number/letter and is not in object, add it to object and set value to 1
			} else {
				count[char] = 1;
			};
		}
	}	
	return count;
}


// the previous function, refactored
function newCharCount(str) {
	var count = {};
	for (var char of str) {
		char = char.toLowerCase();
		if(/[a-z0-9]/.test(char)) {
			count[char] > 0 ? count[char]++ : count[char] = 1;
		}
	}
	return count;
}