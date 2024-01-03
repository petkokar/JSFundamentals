function solve(input) {
    let middle = input.length / 2;
    let firstText = input.substring(0, middle).split('').reverse().join('');
    let secondText = input.substring(middle).split('').reverse().join('');
    console.log(firstText);
    console.log(secondText);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');