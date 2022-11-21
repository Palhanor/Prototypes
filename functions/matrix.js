function matrix(col, row, value) {
    const array = []
    for (let i = 0; i < row; i++) {
        const rowArray = []
        for (let j = 0; j < col; j++) {
            if (value) rowArray.push(value)
            else rowArray.push(null)
        }
        array.push(rowArray)
    }
    return array
}

const matriz = matrix(3, 5)
console.log(matriz)
matriz[0][0] = false // .mInsert(col, row, value)
console.log(matriz)