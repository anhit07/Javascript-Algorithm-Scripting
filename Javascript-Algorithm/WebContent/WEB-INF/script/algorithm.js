function sumAll(arr) {

	var maxNum = Math.max(arr[0], arr[1]);
	var minNum = Math.min(arr[0], arr[1]);

	var total = 0;
	for (var i = minNum; i <= maxNum; i++) {
		total = total + i;
	}
	return total;
}

function diffArray(arr1, arr2) {
	var newArr = [];
	// Same, same; but different.
	var newArr1 = arr1.filter(function(word) {
		return (arr2.indexOf(word) === -1);
	});
	var newArr2 = arr2.filter(function(word) {
		return (arr1.indexOf(word) === -1);
	});
	newArr = newArr1.concat(newArr2);
	return newArr;
}

function convertToRoman(num) {
	var decimalArry = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
	var romanNumeralArray = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X',
			'IX', 'V', 'IV', 'I' ];

	var romanized = '';
	for (var index = 0; index < decimalArry.length; index++) {
		while (decimalArry[index] <= num) {
			romanized += romanNumeralArray[index];
			num -= decimalArry[index];
		}
	}

	return romanized;
}

function showThead() {
	var headertext = [];
	var headers = document.querySelectorAll("thead");
	var tablebody = document.querySelectorAll("tbody");

	for (var i = 0; i < headers.length; i++) {
		headertext[i] = [];
		for (var j = 0, headrow; headrow = headers[i].rows[0].cells[j]; j++) {
			var current = headrow;
			headertext[i].push(current.textContent.replace(/\r?\n|\r/, ""));
		}
	}

	if (headers.length > 0) {
		for (var h = 0, tbody; tbody = tablebody[h]; h++) {
			for (var i = 0, row; row = tbody.rows[i]; i++) {
				for (var j = 0, col; col = row.cells[j]; j++) {
					col.setAttribute("data-th", headertext[h][j]);
				}
			}
		}
	}
}

function whatIsInAName(collection, source) {

	collection = eval(collection);
	source = eval(source);
	source = source[0];

	var sourceKeys = Object.keys(source);

	var arr = collection.filter(function(item) {
		return sourceKeys.every(function(key) {
			return source[key] == item[key];
		});
	});
	return JSON.stringify(arr);

}

function searchReplace(str, before, after) {

	var beforeInstr = str.charAt(str.toLowerCase()
			.indexOf(before.toLowerCase()));
	if (beforeInstr == beforeInstr.toUpperCase()) {
		after = after.charAt(0).toUpperCase() + after.slice(1);
	} else {
		after = after.charAt(0).toLowerCase() + after.slice(1);
	}
	str = str.replace(before, after);
	return str;
}

function translatePigLatin(str) {
	if (str === null || str === '') {
		return;
	}

	var vowelArr = [ 'a', 'e', 'i', 'o', 'u' ];
	var subffiexs = 'way';

	if (vowelArr.indexOf(str[0]) === -1) {
		subffiexs = 'ay';

		if (vowelArr.indexOf(str[1]) === -1) {
			str = str.substr(2, str.length - 1) + str.substr(0, 2) + subffiexs;
		} else {
			str = str.substr(1, str.length - 1) + str.substr(0, 1) + subffiexs;
		}
	} else {
		str = str.substr(0, str.length) + subffiexs;
	}

	return str;
}

function pairElement(str) {
	var dnaSequences1 = [ "A", "T", "C", "G" ];

	var arrStr = str.split("");
	var returnStr = [];
	for (var i = 0; i < arrStr.length; i++) {

		var arrItem = [];
		arrItem.push(arrStr[i]);

		if (dnaSequences1.indexOf(arrStr[i]) !== -1) {
			var pairChar = "";
			if (dnaSequences1.indexOf(arrStr[i]) % 2 === 0) {
				pairChar = dnaSequences1[dnaSequences1.indexOf(arrStr[i]) + 1];
			} else {
				pairChar = dnaSequences1[dnaSequences1.indexOf(arrStr[i]) - 1];
			}

			arrItem.push(pairChar);
		}
		returnStr.push(arrItem);
	}

	return JSON.stringify(returnStr);
}

function fearNotLetter(str) {

	var returnStr = null;
	for (var i = 0; i < str.length; i++) {
		var currentCharCode = str.charCodeAt(i);
		if (i > 0) {
			var beforeCharCode = str.charCodeAt(i - 1);
			if (currentCharCode !== beforeCharCode + 1) {
				returnStr = String.fromCharCode(beforeCharCode + 1);
			}
		}
	}

	return returnStr;
}
function booWho(bool) {
	// What is the new fad diet for ghost developers? The Boolean.
	return typeof bool === 'boolean';
}

function uniteUnique(args) {

	var returnArr = args.reduce(function(acc, currentItem) {
		var itemArr = currentItem.filter(function(word) {
			return (acc.indexOf(word) === -1);
		});
		return [...acc, ...itemArr ];
	});
	return JSON.stringify(returnArr);
}

function convertHTML(str) {
	var arr = [ '&', '<', '>', '"', "'" ];
	var replaceArr = [ "&amp;", "&lt;", "&gt;", "&quot;", "&apos;" ];
	for (var i = 0; i < arr.length; i++) {
		if (str.indexOf(arr[i]) !== -1) {
			var pattern = arr[i];
			var re = new RegExp(pattern, "g");
			str = str.replace(re, replaceArr[i]);
		}
	}
	return str;
}
function spinalCase(str) {
	// Create a variable for the white space and underscores.
	var regex = /\s+|_+/g;

	// Replace low-upper case to low-space-uppercase
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

	// Replace space and underscore with -
	return str.replace(regex, '-').toLowerCase();
}

function sumPrimes(maxNum) {
	var primeArr = [];
	var num = 2;

	while (num <= maxNum) {
		var isPrimeNum = true;
		for (var i = 2; i <= num / 2; i++) {
			if (num % i === 0) {
				isPrimeNum = false;
				break;
			}
		}
		if (isPrimeNum === true) {
			primeArr.push(num);
		}
		num++;
	}
	var total = primeArr.reduce(function(a, b) {
		return a + b;
	});
	return total;
}

function smallestCommons(arr) {
	// Sort array from greater to lowest
	arr.sort(function(a, b) {
		return b - a;
	});

	// Create new array and add all values from greater to smaller from the
	// original array.
	var newArr = [];
	for (var i = arr[0]; i >= arr[1]; i--) {
		newArr.push(i);
	}

	// Variables needed declared outside the loops.
	var quot = 0;
	var loop = 1;
	var n = 0;

	// run code while n is not the same as the array lenght.
	do {
		quot = newArr[0] * loop * newArr[1];
		for (n = 2; n < newArr.length; n++) {
			if (quot % newArr[n] !== 0) {
				break;
			}
		}

		loop++;
	} while (n !== newArr.length);

	return quot;
}

function findElement(arr, func) {
	var num = arr.filter(function(word) {
		return func(word) === true;
	});
	return num;
}
function dropElements(arr, func) {
	// Drop them elements.
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i]) === false) {
			arr.shift();
		}
		if (func(arr[i]) === true) {
			newArr = arr.slice(i, arr.length);
			break;
		}
	}
	return newArr;
}
function steamrollArray(arr) {
	// I'm a steamroller, baby
	var newArr = [];
	console.log(arr);
	for (var i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			newArr.push(arr[i]);
		} else {
			if (arr[i].length !== 0) {
				var arr2 = arr[i].toString().split(",");
				for (var j = 0; j < arr2.length; j++) {
					if (/^\d+$/.test(arr2[j])) {
						arr2[j] = Number(arr2[j]);
					}
					newArr.push(arr2[j]);
				}
			}
		}
	}
	return JSON.stringify(newArr);
}

function binaryAgent(str) {
	var arr = str.split(' ');
	var arrStr = [];
	for (var i = 0; i < arr.length; i++) {
		charCode = parseInt(arr[i], 2);
		arrStr.push(String.fromCharCode(charCode));
	}
	return arrStr.join('');
}

function addTogether() {
	var args = Array.prototype.slice.call(arguments);
	console.log(args);
	function validNumber(test) {
		if (typeof test !== 'number') {
			return false;
		} else {
			return true;
		}
	}

	if (args.length >= 2) {
		if (validNumber(args[0]) && validNumber(args[1])) {
			return args[0] + args[1];
		}
	} else {
		if (!validNumber(args[0])) {
			// if not a valid number
			return undefined;
		} else {
			return function(newNumber) {
				if (validNumber(newNumber)) {
					return args[0] + newNumber;
				} else {
					return undefined;
				}

			};
		}
	}
}

function telephoneCheck(str) {
	var re = /^[1]{1}\s{0,1}(\({1}\d{3}\){1}|\d{3})(\s|-){0,1}\d{3}(\s|-){0,1}\d{4}$/;
	var re2 = /^(\({1}\d{3}\){1}|\d{3})(\s|-){0,1}\d{3}(\s|-){0,1}\d{4}$/;
	return re.test(str) || re2.test(str);
}

// Setup
var collection = {
	"2548" : {
		"album" : "Slippery When Wet",
		"artist" : "Bon Jovi",
		"tracks" : [ "Let It Rock", "You Give Love a Bad Name" ]
	},
	"2468" : {
		"album" : "1999",
		"artist" : "Prince",
		"tracks" : [ "1999", "Little Red Corvette" ]
	},
	"1245" : {
		"artist" : "Robert Palmer",
		"tracks" : []
	},
	"5439" : {
		"album" : "ABBA Gold"
	}
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
	var propEle = collectionCopy[id][prop];
	if (value === "") {
		delete collectionCopy[id][prop];
	} else {
		if (prop !== "tracks") {
			collectionCopy[id][prop] = value;
		}

		if (prop === "tracks") {
			if (propEle === undefined) {
				collectionCopy[id][prop] = [];
			}
			collectionCopy[id][prop].push(value);
		}
	}
	return collectionCopy;
}

function symmetricDifference(args) {

	function symDiff(arrayOne, arrayTwo) {
		var resultArr = [];

		arrayOne.forEach(function(item) {
			if (arrayTwo.indexOf(item) < 0 && resultArr.indexOf(item) < 0) {
				resultArr.push(item);
			}
		});

		arrayTwo.forEach(function(item) {
			if (arrayOne.indexOf(item) < 0 && resultArr.indexOf(item) < 0) {
				resultArr.push(item);
			}
		});
		return resultArr;
	}
	return args.reduce(symDiff);
}

function symmetricDifference2() {
		var args = [];
		for (var i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		function symDiff(arrayOne, arrayTwo) {
			var resultArr = [];

			arrayOne.forEach(function(item) {
				if (arrayTwo.indexOf(item) < 0 && resultArr.indexOf(item) < 0) {
					resultArr.push(item);
				}
			});

			arrayTwo.forEach(function(item) {
				if (arrayOne.indexOf(item) < 0 && resultArr.indexOf(item) < 0) {
					resultArr.push(item);
				}
			});
			return resultArr;
		}
		return args.reduce(symDiff);
}
