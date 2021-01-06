let mainElement = document.querySelector("main")
let viewModel = []

for (let rowIndex = 0; rowIndex < map.length; rowIndex += 1) {
    let rowString = map[rowIndex]
    let rowDiv = document.createElement("div")
    rowDiv.classList.add("row")
    rowDiv.dataset.rowIndex = rowIndex
    mainElement.append(rowDiv)
    viewModel.push([])

    for (let columnIndex = 0; columnIndex < rowString.length; columnIndex += 1) {
        let cellType = rowString[columnIndex]
        let cellDiv = document.createElement("div")
        cellDiv.classList.add("cell")
        cellDiv.dataset.columnIndex = columnIndex
        cellDiv.dataset.cellType = cellType
        rowDiv.append(cellDiv)
        viewModel[rowIndex].push(cellDiv)
    }
}

console.log(viewModel)