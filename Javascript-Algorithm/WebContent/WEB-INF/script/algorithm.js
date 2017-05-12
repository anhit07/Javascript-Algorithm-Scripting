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