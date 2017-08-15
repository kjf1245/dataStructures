/*var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;

//Add elements to the end of the array
numbers.push(11);
numbers.push(12,13);

//Add elements to the beginning of the array
numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-4, -3);

//Remove element from beginning of the array
numbers.shift();

//Remove 3 elements after index 5
numbers.splice(5,3);

//Insert elments after index 5
numbers.splice(5,0,2,3,4);


console.log(numbers);


//Multi-dimensional arrays
function printMatrix(myMatrix){
	for(var i = 0; i < myMatrix.length; i++){
		for(var j = 0; j < myMatrix[i].length; j++){
			console.log(myMatrix[i][j]);
		}
	}
}

var averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
//day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;

printMatrix(averageTemp);


var matrix3x3x3 = [];

for(var i = 0; i < 3; i++){
	matrix3x3x3[i] = [];
	for(var j = 0; j < 3; j++){
		matrix3x3x3[i][j] =[];
		for(var z = 0; z < 3; z++){
			matrix3x3x3[i][j][z] = i+j+z;
		}
	}
}

for(var i = 0; i < matrix3x3x3.length; i++){
	for(var j = 0; j < matrix3x3x3[i].length; j++){
		for(var z = 0; z < matrix3x3x3[i].length; z++){
			console.log(matrix3x3x3[i][j][z]);
		}
	}

}

//Joining multiple arrays
var zero = 0;
var positiveNumbers = [1,2,3];
var negativeNumbers = [-3, -2,-1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers);

//Iteratior functions
var isEven = function(x){
	//returns true if x is a multiple of 2.
	return (x % 2 == 0) ? true : false;
}; 

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers.every(isEven); //Execution stops during first intance of false
numbers.some(isEven); //Exectuion stops during first instance of true
numbers.forEach(function(x){ //Competely iterates no matter what
	console.log((x % 2 == 0));
});

var myMap = numbers.map(isEven);//Returns a new array with a result
console.log(myMap);

var evenNumbers = numbers.filter(isEven);//Returns a new array with the elements that the funtion returned true
console.log(evenNumbers);

//Recieves a funtions with parameters, returns a value that will be added to an accumulator, which is going to be returned after the reduce method stops being executed.
numbers.reduce(function(previous, current, index){
	return previous + current;
});


//Searching and Sorting 
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//Reverse the order of the array
numbers.reverse();

console.log(numbers);
//Default sorts elements lexicographically
numbers.sort(function(a,b){
	return a-b;
});

//Similar to previous code
function compare(a, b){
	if(a<b){
		return -1;
	}
	if(a>b){
		return 1;
	}
	//a must be equal to b
	return 0;
}
numbers.sort(compare);

//Custom sorting
var friends = [
	{name : 'John', age : 30},
	{name : 'Ana', age : 20},
	{name : 'Chris', age : 25}
];

function comparePerson(a, b){
	if (a.age < b.age){
		return -1;
	}
	if(a.age > b.age){
		return 1;
	}
	return 0;
}
console.log(friends.sort(comparePerson));

var names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort()); //Compares each character according to its ASCII value

names.sort(function(a,b){
	if(a.toLowerCase() < b.toLowerCase()){
		return -1;
	}
	if (a.toLowerCase() > b.toLowerCase()){
		return 1;
	}
	return 0;
});

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));

var numbersString = numbers.join('-');
console.log(numbersString);
*/