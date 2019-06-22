function firstDuplicate(array){
    var duplicate = -1;
    var tracker = [];

    for(i = 0; i < array.length; i++){
        if (tracker.includes(array[i])){
            duplicate = array[i];
            break;
        }
        else {
            tracker[tracker.length] = array[i];
        }
    }

    return duplicate;
}

console.log('First duplicate is ' + firstDuplicate([2, 1, 3, 5, 3, 2]));
