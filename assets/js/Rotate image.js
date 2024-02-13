function rotateMatrix() {
    // Get matrix from input textarea
    const inputMatrix = document.getElementById('matrix').value.trim().split('\n').map(row => row.split(',').map(Number));

    // Rotate the matrix in-place
    const n = inputMatrix.length;
    for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - 1 - i; j++) {
            const temp = inputMatrix[i][j];
            inputMatrix[i][j] = inputMatrix[n - 1 - j][i];
            inputMatrix[n - 1 - j][i] = inputMatrix[n - 1 - i][n - 1 - j];
            inputMatrix[n - 1 - i][n - 1 - j] = inputMatrix[j][n - 1 - i];
            inputMatrix[j][n - 1 - i] = temp;
        }
    }

    // Display the rotated matrix in the console
    console.log("Rotated Matrix:");
    inputMatrix.forEach(row => {
        console.log(row.join(', '));
    });

    // Display the rotated matrix on the webpage
    displayMatrix(inputMatrix, 'rotatedMatrix');
}

function displayMatrix(matrix, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    matrix.forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.className = 'matrixRow';

        row.forEach(cell => {
            const cellElement = document.createElement('div');
            cellElement.className = 'matrixCell';
            cellElement.textContent = cell;
            rowElement.appendChild(cellElement);
        });

        container.appendChild(rowElement);
    });
}