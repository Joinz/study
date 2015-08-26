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
//Получить индекс div в массиве matrix по: row, col
//
function getIndex(row, col) {
    return 20 * (row-1) + (col-1);
}

//
//Получить div по адресу: row, col
//
function getDiv(row, col) {
    return matrix.children[getIndex(row,col)];
}

//
//Установка ячейки матрицы
//
function setCell(row, col, val) {
    //Функция принимает координаты ячейки,
    //если val == true, закрашивает ячейку,
    //иначе убирает закраску.
    var div = getDiv(row,col);
    div.className = val ? "cell mark" : 'cell';
}

//
//Чтение ячейки матрицы
//
function getCell(row, col) {
    //Функция принимает координаты ячейки,
    //должно вернуть true, если она закрашена,
    //false, если не закрашена
    var div = getDiv(row,col);
    return div.className.indexOf('mark') >= 0;
}

//
//Перемещение по матрице
//


//
//Точка входа
//
window.onload = function() {
    createMatrix();
    var matrix = document.getElementById('matrix');
    var player_x;
    var player_y;
    var target_x;
    var target_y;
}

//
//Обработка нажатий клавиш
//

//
//Запоминание нажатий клавиш
//
window.onkeydown = function (event) {
    if (!event) var event = window.event;
    var keycode;
    if (event.keyCode) {
        keycode = event.keyCode; //IE
    } else if (event.which) {
        keycode = event.which; //All browsers
    }
    handle(keycode);
}