function school(input) {
    let object = {}
    for (let info of input) {
        let parts = info.split(` `)
        let name = parts[0]
        let idx = parts.indexOf(` `)
        let grades = parts.slice(1).map(Number)
        let totalGrades = grades.reduce((a, b) => Number(a) + Number(b), 0)
        let qty = grades.length

        if (object.hasOwnProperty(name)){
            object[name].totalGrades+=totalGrades;
            object[name].qty+=qty
        }else{
            object[name]={totalGrades, qty}
        }
     
    }
    let sorted = Object.keys(object).sort()
    for (let name of sorted) {
        let avg = object[name].totalGrades/object[name].qty
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}
school(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])