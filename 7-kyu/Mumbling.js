/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd")    # "A-Bb-Ccc-Dddd"
accum("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt")    # "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s) {

  var sArray = [];
	var mumbling = [];

	for(var i = 0; i < s.length; i++) {
		sArray.push(s[i]);
		mumbling[i] = (sArray[i].repeat(i+1));
		mumbling[i] = mumbling[i].charAt(0).toUpperCase() + mumbling[i].substr(1).toLowerCase();
	}

	return mumbling.join('-');

}
