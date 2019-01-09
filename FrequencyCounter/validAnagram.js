/* Give two strings, write a function to determine if the second string
is an anagram of the first. AN anagram is a word, phrase, or name formed
by rearranging the letters of another, such as cinema from iceman */

function validAnagram(str1, str2) {
	// Checking to see if two strings are the same length, if not return false
	if (str1.length !== str2.length) {
		return false;
	};

	// Initialize our containers for each string
	var stringOne = {};
	var stringTwo = {};

	// Loop through each string and store them in our empty objects
	for (let char of str1) {
		// Add one to the corresponding object, if none is there, initialize it to one
		stringOne[char] > 0 ? stringOne[char]++ : stringOne[char] = 1;
	}

	for (let char of str2) {
		stringTwo[char] > 0 ? stringTwo[char]++ : stringTwo[char] = 1;
	}

	
	for (let key in stringOne) {
		// Check to see if the characters are in each string 
		if (!(key in stringTwo)) {
			return false;
		}

		// Check to see if the same amount of characters are in each string
		if (stringTwo[key] !== stringOne[key]) {
			return false;
		}
	}

	return true;
}

// This is using the Frequency Counter method, we do that to avoid nested loops