// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){

	var numbersArr = numbers.split(' ');

	var minNumber = Math.min.apply(null, numbersArr);
	var maxNumber = Math.max.apply(null, numbersArr);

	return `${maxNumber} ${minNumber}`;

}
