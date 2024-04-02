let nonSparseArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
 
console.log("Початковий масив:", nonSparseArray);
console.log("Обмін (ascending):", sortArrays.exchangeSort([...nonSparseArray]));
console.log("Мінімальних елементів (ascending):", sortArrays.selectionSort([...nonSparseArray]));
console.log("Вставок (descending):", sortArrays.insertionSort([...nonSparseArray], false));
console.log("Шелла (ascending):", sortArrays.shellSort([...nonSparseArray]));
console.log("Хоара (descending):", sortArrays.quickSort([...nonSparseArray], false));



let sparseArray = Array.from({ length: 100 }, (_, index) => index % 2 === 0 ? undefined : Math.floor(Math.random() * 1000));

console.log("Початковий масив:", sparseArray);
console.log("Обмін (ascending):", sortArrays.exchangeSort([...sparseArray]));
console.log("Мінімальних елементів (ascending):", sortArrays.selectionSort([...sparseArray]));
console.log("Вставок (descending):", sortArrays.insertionSort([...sparseArray], false));
console.log("Шелла (ascending):", sortArrays.shellSort([...sparseArray]));
console.log("Хоара (descending):", sortArrays.quickSort([...sparseArray], false));