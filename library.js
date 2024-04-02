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

        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;

            while (j >= 0 && (current < arr[j] && ascending || current > arr[j] && !ascending)) {
                comparisons++;
                arr[j + 1] = arr[j];
                j--;
                movements++;
            }

            arr[j + 1] = current;
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

        const n = arr.length;
        let gap = Math.floor(n / 2);

        while (gap > 0) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j = i;

                while (j >= gap && (temp < arr[j - gap] && ascending || temp > arr[j - gap] && !ascending)) {
                    comparisons++;
                    arr[j] = arr[j - gap];
                    j -= gap;
                    exchanges++;
                }

                arr[j] = temp;
            }

            gap = Math.floor(gap / 2);
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

        sort(arr, 0, arr.length - 1);

        if (debug) {
            console.log("Quick Sort:");
            console.log("Number of comparisons:", comparisons);
            console.log("Number of exchanges:", exchanges);
        }

        return arr;
    }

    window.sortArrays = sortArrays;

})(window);
