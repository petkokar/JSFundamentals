function solve(n1, n2, n3) {

    let nums = [n1, n2, n3];
    nums.sort(function(a, b) {
        return b-a
    });
    console.log(nums + '\n');

    

}

solve(2, 1, 3)