//Создание матрицы
//
function createMatrix() {
    var matrix = document.getElementById('matrix');
    var n = 20 * 20;
    
    for (var i = 0; i < n; i++) {
        var div = document.createElement('div');
        div.className = 'cell';
        matrix.appendChild(div);
    }
}

//
//Чтение ячейки матрицы
//
function getCell(row, col) {
    //Функция принимает координаты ячейки,
    //должно вернуть true, если она закрашена,
    //false, если не закрашена
    var num = ((row-1)*20)+col-1;
    var matrixChild = document.getElementById('matrix').children[num];
    var matrixChildStyle = matrixChild.style.backgroundColor;
    if (matrixChildStyle = 'red') {
        return true;
    } else {
        return false;
    }
    
}

//
//Установка ячейки матрицы
//
function setCell(row, col, val) {
    //Функция принимает координаты ячейки,
    //если val == true, закрашивает ячейку,
    //иначе убирает закраску.
    var num = ((row-1)*20)+col-1;
    var matrixChild = document.getElementById('matrix').children[num];
    if (val == true) {
    matrixChild.style.backgroundColor = 'red';
    } else {
        matrixChild.style.backgroundColor = '';
    }
        
}
function setCellMas(row, col, val) {
    //Функция принимает координаты ячейки,
    //если val == true, закрашивает ячейку,
    //иначе убирает закраску.
    var n = 20;
    var mas = [];
    for (var i = 1; i <= n; i++) {
        mas[i] = [];
        for (var j = 1; j <= n; j++) {
            mas[i][j] = j;
        }
    }
    alert(mas);   
}

//
//Точка входа
//
window.onload = function() {
    createMatrix();
    setCell(5, 3, false);
}