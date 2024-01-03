function triangleArea (a, b, c) {

    let s = (a + b + c) / 2;
    let aDiff = s - a;
    let bDiff = s - b;
    let cDiff = s - c;
    let area = Math.sqrt(s * aDiff * bDiff * cDiff);
    console.log(area);

}

triangleArea(2,

    3.5,
    
    4)