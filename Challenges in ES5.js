//First duplicate
function firstDuplicate(array){
    var duplicate = -1;
    var tracker = [];

    dance:
    for(i = 0; i < array.length; i++){
        for (j = 0; j < tracker.length; j++){
            if (tracker[j] == array[i]){
                duplicate = array[i];
                break dance;
            }
        }
        
        tracker[tracker.length] = array[i];    
    }

    return duplicate;
}

console.log('First duplicate is ' + firstDuplicate([2, 1, 3, 5, 3, 2]));

//Array Mode
function arrayMode(sequence) {
    function Element(num) {
        var number = num;
        var count = 0;
    }

    var arrOfElements = [];
    maxNum = -1;
    maxCount = -1;

    for (i = 0; i < sequence.length; i++) {
        var isFound = false;

        for (j = 0; j < arrOfElements.length; j++) {
            if (arrOfElements[j].number == sequence[i]) {
                //if object of the curent number in sequence arr exists
                arrOfElements[j].count++;
                isFound = true;

                if (arrOfElements[j].count > maxCount) {
                    //checks and sets new mode
                    maxNum = arrOfElements[j].number;
                    maxCount = arrOfElements[j].count;
                }
            }
        }

        if (!isFound)
            arrOfElements[arrOfElements.length] = new Element(sequence[i]);
    }

    return maxNum;
}

console.log(arrayMode([1, 2, 2, 1, 2]));