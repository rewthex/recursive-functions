// Return an array of n numbers from the fibonacci sequence.

function fibs(n, arr = [0, 1]) {
	if (n <= 2) return arr.slice(0, n);
	for (let i = 0; i < n - 2; i++) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	}
	return arr;
}

// Return an array of n numbers from the fibonacci sequence recursively.

function fibsRec(n, arr = [0, 1]) {
	if (n <= 2) return arr.slice(0, n);
	if (arr.length > n) return arr;
	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	return fibsRec(n, arr);
}

// Return the nth element in the fibonacci sequence recurisvely.

function fibsRec(n) {
	if (n === 1) return 0;
	if (n === 2) return 1;
	return fibsRec(n - 1) + fibsRec(n - 2);
}

// Return a sorted array using merge sort recursively.

function mergeSort(arr) {
	if (arr.length === 1) return arr;
	if (arr.length === 2) {
		if (arr[0] > arr[1]) {
			return [arr[1], arr[0]];
		} else {
			return arr;
		}
	}
	const left = mergeSort(arr.slice(0, arr.length / 2));
	const right = mergeSort(arr.slice(arr.length / 2));

	return merge(left, right);
}

function merge(left, right) {
	let result = [];
	let i = 0;
	let j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] > right[j]) {
			result.push(right[j]);
			j += 1;
		} else {
			result.push(left[i]);
			i += 1;
		}
	}
	return result.concat(left.slice(i).concat(right.slice(j)));
}
