function matrix (n) {

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            row += `${n} `
        }

        console.log(row);
    }

}

matrix(3);