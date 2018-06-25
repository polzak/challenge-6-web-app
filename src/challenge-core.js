const addTwoForTarget = (arr) => {

    //check if the given array meets the condition
    if (arr.length !== 2 || typeof(arr[0]) !== 'object' || typeof(arr[1]) !== 'number') {
        return `Sorry, the format of the given array is not valid.`;
    }

    //we can't add if there is no more than one number
    if (arr[0].length < 2) {
        return `Sorry, there should be at least TWO numbers in the given array.`;
    }

    //filter the array
    const givenArr = arr[0].filter(el => typeof(el) === 'number');

    //check the array's length again after filtering
    if (givenArr.length < 2) {
        return `Sorry, there should be at least TWO numbers in the given array.`;
    }

    const target = arr[1]; //the target number
    const answer = []; //if a match of two numbers are found, we push them into this array and return it

    while (givenArr.length > 1) { 
        let firstNum = givenArr.pop(); //each number is removed from the array and checked by turn through the loop
        let idx = givenArr.indexOf(target - firstNum); //we are looking for a match that could be added by firstNum to produce the target number
        if (idx > -1) {                 //if we find one
            answer.push(givenArr[idx]); //we push the match number into the answer array
            answer.push(firstNum);      //and the firstNum
            return answer;
        }
    }

    return `There is no match of two numbers that are added to produce the target number.`;
}

const generateRandomArray = () => {

    const NUMBERS_RANGE = 20; //the range of numbers for a given array
    const NUMBER_OF_NUMBERS = 10; //the number of numbers for a given array

    const arr = [];
    let el;
    for (let i=0; i<NUMBER_OF_NUMBERS; i++) {
        el = Math.floor(Math.random()*NUMBERS_RANGE) + 1;
        arr.push(el);
    }
    return arr;
}

const generateRandomTarget = () => {
    const TARGET_RANGE = 30; //the range of a target number

    return Math.floor(Math.random()*TARGET_RANGE) + 1;
}    

export const coreAddTwoForTarget = {
    addTwoForTarget: addTwoForTarget,
    generateRandomArray: generateRandomArray,
    generateRandomTarget: generateRandomTarget
}


const cleanTheRoom = (arr) => {

    //a compare function to be used as an argument for array.sort() method
    const compare = (a, b) => {
        return a-b;
    }

    //the core function for the cleanTheRoom function.
    //it takes a sorted array, and cleans it.
    const cleanAfterSort = (sortedArr) => {

        //if sortedArr has no more than one element, we do not need cleaning
        if (sortedArr.length < 2) {
            return sortedArr;
        } 
        
        const cleanedArr = []; //this will be returned as a result of cleaning
        let sameNumberArr = []; //we use it to store same numbers temporarily to push them as an array into the cleanedArr

        sortedArr.forEach((el, i, arr) => {

            //the first element should just be pushed into the sameNumberArr
            if (i === 0) { 
                sameNumberArr.push(el); 
            }
            
            let num; //we are going to assign every element to this variable to know if it is same with the previous one
            
            if (i < arr.length - 1) { //we start from the second element, 
                num = arr[i+1];      //whereas the first one is just put in the sameNumberArr waiting to be compared
            } else {                //if we are reaching a value beyond the array's length at the last turn of iteration, 
                num = undefined;   //we just assign it undefined; 
            }                     //but we need to run the last turn to handle the last element remaining in the sameNumberArr

            if (sameNumberArr.length < 1 || num === sameNumberArr[0]) { //if the sameNumberArr is empty or the number is same with the previous one
                sameNumberArr.push(num);                                //we push the current number into it
            } else {                                //but if the current number is not same with the previous one
                if (sameNumberArr.length > 1) {     //if the previous numbers are more than one, 
                    cleanedArr.push(sameNumberArr); //we push them as an array into the result array, i.e. cleanedArr
                } else {                            //or if the previous number is lonely one,
                    cleanedArr.push(sameNumberArr[0]); //we push it as a number into the result array, i.e. cleanedArr
                }

                sameNumberArr = [];         //we make sameNumberArr empty so that it gets a new number
                if (num !== undefined) {    
                    sameNumberArr.push(num); //we push a new number into the sameNumberArr, 
                }                            //and it is waiting there to be compared with the next number
            }                               
        });

        return cleanedArr;
    }

    //first, we separate numbers and strings mixed in a given array.
    //we create numberArr to include only numbers, and stringArr to include only strings.
    const numberArr = arr.filter((el) => typeof(el) === 'number' && !isNaN(el)); //as the type of NaN is Number, we should filter them here
    const stringArr = arr.filter((el) => typeof(el) === 'string');

    //sort the numbers' array
    if (numberArr.length > 1) {
        numberArr.sort(compare);
    }
    //then clean it
    const cleanedNumberArr = cleanAfterSort(numberArr);

    let cleanedStringArr;

    if (stringArr.length < 2){ //if stringArr has no more than one element, we do not need to sort or clean it
        cleanedStringArr = stringArr;
    } else {
        //convert the strings into numbers before sort them
        //if we sorted strings directly, the sort order would be in the unicode style, 
        //where '10' comes before '2'; thus convering is indispensable
        const offStringArr = (stringArr.map(str => Number(str))).filter(el => !isNaN(el)); //filter is used to remove NaN after conversion
        offStringArr.sort(compare);
        
        //when cleaning, the strings' array is still in type of numbers 
        const cleanedOffStringArr = cleanAfterSort(offStringArr);

        //convert the cleaned strings into numbers
        //if an element is an array of numbers, we map it to convert each element within it, while keeping the array that is wrapping them
        cleanedStringArr = cleanedOffStringArr.map(num => {
            if (typeof(num) === 'number') {
                return String(num);
            } else {
                return num.map(el => String(el));
            }
        });
    }

    //now we have both cleaned numbers' array and cleaned strings' one
    return [cleanedNumberArr, cleanedStringArr];
};

//a test function for a random array
const generateRandomArrayToClean = () => {

    const NUMBER_OF_ELEMENTS = 20; //the number of elements in a given array
    const RANGE_OF_NUMBERS = 10; //the range of generated numbers
    const RATIO_OF_NUMBERS = 0.5; //the ratio of numbers to strings generated in the array. 

    const arr = [];
    let el;

    for (let i=0; i<NUMBER_OF_ELEMENTS; i++) {
        el = Math.floor(Math.random()*RANGE_OF_NUMBERS);
        if (Math.random() > RATIO_OF_NUMBERS) { el = String(el); }
        arr.push(el);
    }
    return arr;
}
    
export const coreCleanTheRoom = { 
    cleanTheRoom: cleanTheRoom, 
    generateRandomArrayToClean: generateRandomArrayToClean
}


const converter = (hex) => {
    if (hex.startsWith('#') && hex.length === 7) {
        hex = hex.slice(1);
    }
    
    let rCode, gCode, bCode;

    if (hex.length === 6) {
        rCode = hex.slice(0,2);
        gCode = hex.slice(2,4);
        bCode = hex.slice(4,6);
        rCode = parseInt(rCode, 16);
        gCode = parseInt(gCode, 16);
        bCode = parseInt(bCode, 16);
    }
    
    return `rgb(${rCode}, ${gCode}, ${bCode})`;
}

export const coreConverter = {
    converter: converter
}

