window.onload = function() {
    var btn = document.getElementById('btnRun');
    var inpX = document.getElementById('inpX');
    var inpY = document.getElementById('inpY');
    
    btn.onclick = function() {
        var x = inpX.value;
        var y = inpY.value;
        var res = parseFloat(x) + parseFloat(y);
        document.getElementById('spnResult').innerHTML = res;
        btn.disabled = true;
    }
    inpX.onkeydown = function() {
        btn.disabled = false;
    }
    inpY.onkeydown = function() {
        btn.disabled = false;
    }
    function fShow() {
        var divTime = document.getElementById('time');
        divTime.style.visibility = 'visible';
    }
    function fTick() {
        var date = new Date();;
        
        var t = date.getHours() + ':' +
                date.getMinutes() + ':' +
                date.getSeconds();
        var divTime = document.getElementById('time');
        divTime.innerHTML = t;
    }
    setTimeout(fShow, 2000);
    setInterval(fTick, 1000);
}