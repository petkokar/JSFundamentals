function matchNames(input) {

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = input.match(regex);
    console.log(result.join(' '));
}

matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");