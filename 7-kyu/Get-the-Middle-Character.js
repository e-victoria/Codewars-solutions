/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A" */


function getMiddle(s) {
	var string;

	if ((s.length % 2) == 0) {
		string = s.slice(s.length / 2 - 1, s.length / 2 + 1);
	} else {
		string = s.slice(Math.round(s.length / 2 - 1), Math.round(s.length / 2));
	}

	return string;
}
