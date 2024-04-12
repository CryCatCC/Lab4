(function (window) {

    let sortArrays = {};
    //Сортування методом обміну
    sortArrays.exchangeSort = function (arr, ascending = true, debug = false) {
        let comparisons = 0;
        let exchanges = 0;

        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                comparisons++;

                if (arr[i] > arr[j] && ascending || arr[i] < arr[j] && !ascending) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    exchanges++;
                }
            }
        }

        if (debug) {
            console.log("Exchange Sort:");
            console.log("Number of comparisons:", comparisons);
            console.log("Number of exchanges:", exchanges);
        }

        return arr;
    }



    //Сортування методом мінімальних елементів
    sortArrays.selectionSort = function (arr, ascending = true, debug = false) {
        let comparisons = 0;
        let exchanges = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;

            for (let j = i + 1; j < arr.length; j++) {
                comparisons++;

                if (arr[j] < arr[minIndex] && ascending || arr[j] > arr[minIndex] && !ascending) {
                    minIndex = j;
                }
            }

            if (minIndex !== i) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
                exchanges++;
            }
        }

        if (debug) {
            console.log("Selection Sort:");
            console.log("Number of comparisons:", comparisons);
            console.log("Number of exchanges:", exchanges);
        }

        return arr;
    }



    //Сортування методом вставок
   sortArrays.insertionSort = function (arr, ascending = true, debug = false) {
    let comparisons = 0;
    let movements = 0;
   
    let filteredArr = arr.filter(element => element !== undefined);
    
  
    for (let i = 1; i < filteredArr.length; i++) {
        let current = filteredArr[i];
        let j = i - 1;

      
        while (j >= 0 && (ascending ? filteredArr[j] > current : filteredArr[j] < current)) {
            comparisons++;
            filteredArr[j + 1] = filteredArr[j];
            movements++;
            j--;
        }

        filteredArr[j + 1] = current;
    }

  
    let sortedIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            arr[i] = filteredArr[sortedIndex];
            sortedIndex++;
        }
    }

    if (debug) {
        console.log("Insertion Sort:");
        console.log("Number of comparisons:", comparisons);
        console.log("Number of element movements:", movements);
    }

    return arr;
}

    //Сортування методом Шелла
 sortArrays.shellSort = function (arr, ascending = true, debug = false) {
    let comparisons = 0;
    let exchanges = 0;

  
    let filteredArr = arr.filter(element => element !== undefined);
    const n = filteredArr.length;
    let gap = Math.floor(n / 2);

  
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = filteredArr[i];
            let j = i;

            while (j >= gap && (ascending ? filteredArr[j - gap] > temp : filteredArr[j - gap] < temp)) {
                comparisons++;
                filteredArr[j] = filteredArr[j - gap];
                j -= gap;
                exchanges++;
            }

            filteredArr[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }

   
    let sortedIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            arr[i] = filteredArr[sortedIndex];
            sortedIndex++;
        }
    }

    if (debug) {
        console.log("Shell Sort:");
        console.log("Number of comparisons:", comparisons);
        console.log("Number of exchanges:", exchanges);
    }

    return arr;
}
    //Сортування методом Хоара
   sortArrays.quickSort = function (arr, ascending = true, debug = false) {
    let comparisons = 0;
    let exchanges = 0;
    function partition(arr, low, high) {
        let pivot = arr[Math.floor((low + high) / 2)];
        let i = low;
        let j = high;

        while (i <= j) {
            while ((arr[i] < pivot && ascending) || (arr[i] > pivot && !ascending)) {
                comparisons++;
                i++;
            }
            while ((arr[j] > pivot && ascending) || (arr[j] < pivot && !ascending)) {
                comparisons++;
                j--;
            }

            if (i <= j) {
              
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                exchanges++;
                i++;
                j--;
            }
        }

        return i;
    }
    function sort(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi, high);
        }
    }

    let filteredArr = arr.filter(element => element !== undefined);

    sort(filteredArr, 0, filteredArr.length - 1);

    let sortedIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            arr[i] = filteredArr[sortedIndex];
            sortedIndex++;
        }
    }
    if (debug) {
        console.log("Quick Sort:");
        console.log("Number of comparisons:", comparisons);
        console.log("Number of exchanges:", exchanges);
    }

    return arr;
};

    window.sortArrays = sortArrays;

})(window);
