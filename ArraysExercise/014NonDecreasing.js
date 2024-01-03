function solve(array) {

    let max = Number.MIN_SAFE_INTEGER;
    let arr = array.filter(num => {
        if (num >= max) {
            max = num;
            return true;
        } else {
            return false;
        }
    });

    console.log(arr.join(' '));

}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24])