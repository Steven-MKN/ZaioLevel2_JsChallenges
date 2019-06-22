function arrayMode(sequence) {
    class Element {
        constructor(number) {
            this.number = number;
            this.count = 0;
        }
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
