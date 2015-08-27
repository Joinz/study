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
//Точка входа
//
window.onload = function() {
    createMatrix();
    var matrix = document.getElementById('matrix');
    var target_x = 20;
    var target_y = 20;
    setCell(target_x, target_y, true);
    var player_x = 1;
    var player_y = 1;
    setCell(player_x, player_y, true);
    
    //
    //Обработка нажатий клавиш
    //
    function handle(keycode) {
        var old_x = player_x;
        var old_y = player_y;
        if (getCell(player_x,player_y)) {
            if (keycode == KEY_CODE.UP) {
                player_x -= 1;
            } else if (keycode == KEY_CODE.RIGHT) {
                player_y += 1;
            } else if (keycode == KEY_CODE.DOWN) {
                player_x += 1;
            } else if (keycode == KEY_CODE.LEFT) {
                player_y -= 1;
            } else {
                return false;
            }
        }
        if (player_x < 0) {
            player_x = 0;
        }
        if (player_y < 0) {
            player_y = 0;
        }
        if (player_x > 20) {
            player_x = 20;
        }
        if (player_y > 20) {
            player_y = 20;
        }

        setCell(player_x, player_y, true);
        setCell(old_x, old_y, false);
        if (player_x == target_x & player_y == target_y) {
            alert('Победа!');
        }
        return true;
    }
    window.onkeydown = function (event) {
        
        //
        //Запоминание нажатий клавиш
        //
        if (!event) var event = window.event;
        var keycode;
        if (event.keyCode) {
            keycode = event.keyCode; //IE
        } else if (event.which) {
            keycode = event.which; //All browsers
        }
        handle(keycode);
    }
}