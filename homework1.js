//Создание матрицы
//
function createMatrix()
{
    var matrix = document.getElementById('matrix');
    var n = 20 * 20;
    
    for (var i = 0; i < n; i++)
    {
        var div = document.createElement('div');
        div.className = 'cell';
        matrix.appendChild(div);
    }
}

//
//Чтение ячейки матрицы
//
function getCell(row, col)
{
    //Функция принимает координаты ячейки,
    //должно вернуть true, если она закрашена,
    //false, если не закрашена
}

//
//Установка ячейки матрицы
//
function setCell(row, col, val)
{
    //Функция принимает координаты ячейки,
    //если val == true, закрашивает ячейку,
    //иначе убирает закраску.
    var matrix = document.getElementById('matrix');
    var elems = matrix.getElementsByTagName('*');
    var n = 20;
    var arr =[];
    arr = function()
    {
        '[' +
        for (var i = 0; i < n; i++)
        {
            '[' + (i+1) + ','
            for (var j = 0; j < n; j++)
            {
                arr[i+1][j+1] = j+1;
            }
        }
        alert(arr[row][col]);
    }
}

//
//Точка входа
//
window.onload = function()
{
    createMatrix();
    setCell(1, 1, true);
}