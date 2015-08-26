//
//Массив с кодами кнопок
//
var KEY_CODE = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}

//
//Создание матрицы
//
function createMatrix() {
    var n = 20 * 20;
    for (var i = 0; i < n; i++) {
        var div = document.createElement('div');
        div.className = 'cell';
        matrix.appendChild(div);
    }
}

//
//Перемещение по матрице
//


//
//Чтение ячейки матрицы
//
function getCell(row, col) {
    //Функция принимает координаты ячейки,
    //должно вернуть true, если она закрашена,
    //false, если не закрашена
    var num = (row-1)*20+col-1;
    var matrixChild = matrix.children[num];
    if (matrixChild.className = 'cell mark') {
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
    var num = (row-1)*20+col-1;
    matrix.children[num].className = val ? "cell mark" : 'cell';
}

//
//Точка входа
//
window.onload = function() {
    createMatrix();
    var matrix = document.getElementById('matrix');
}