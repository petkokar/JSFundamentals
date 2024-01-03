function company(input) {

    let companies = {};

    for (const company of input) {
        let [companyName, id] = company.split(' -> ');
        if (!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }
        companies[companyName].push(id);
    }
    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (const element of sorted) {
        console.log(element[0]);
        let set = new Set(element[1]);
        for (const id of set) {
            console.log(`-- ${id}`);
        }
    }
}

company([ 'SoftUni -> AA12345', 
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345' ])