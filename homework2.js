function Matrix(containerId, rows, cols) {
    //Container's id
    this.containerId = containerId;
    
    //Rows quantity
    this.rows = rows;
    
    //Cols quantity
    this.cols = cols;
    
    //Creating matrix
    this.create = function() {
        var matrix = document.getElementById(this.containerId);
        var n = this.rows * this.cols;
        
        matrix.innerHTML = '';
        
        for (var i = 0; i < n; i++) {
            var div = document.createElement('div');
            div.className = 'cell';
            matrix.appendChild(div);
        }
    }
    this.setCell = function(row, col, val) {
        var index = (row - 1) * this.cols + (col - 1);
        var div = document.getElementById(this.containerId).children[index];
        div.className = val ? 'cell mark' : 'cell';
    }
}

//Initialization
window.onload = function() {
    var matrix1 = new Matrix('matrix1', 20, 20);
    matrix1.create();
    matrix1.setCell(1, 1, true);
    
    var matrix2 = new Matrix('matrix2', 10, 10);
    matrix2.create();
    matrix2.setCell(2, 2, true);
}