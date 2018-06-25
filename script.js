var score = 0;
var world = [];
var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri'
}
function genWorld() {
    world.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    for (var i = 0; i < 10; i++) {
        var arr = [];
        for (var j = 0; j < world[0].length; j++) {
            var random = Math.floor((Math.random() * 4) + 1) - 1;
            arr.push(random);
        }
        world.push(arr);
    }
    for (var x = 0; x < world.length; x++) {
        if (world[x][0] == world[x][0]) {
            world[x][0] = 1;
        }
        if (world[x][9] == world[x][9]) {
            world[x][9] = 1;
        }
    }
    world.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
}
function drawWorld() {
    out = '';
    for (var row = 0; row < world.length; row++) {
        out += "<div class = 'row'>"
        for (var x = 0; x < world[row].length; x++) {
            out += "<div class = '" + worldDict[world[row][x]]
                + "'></div>"
        }
        out += "</div>"
    }
    document.getElementById('world').innerHTML = out;

}
genWorld();
drawWorld();
var ninjaman = {
    x: 1,
    y: 1
}
function drawNinjaman() {
    document.getElementById('ninjaman').style.top = ninjaman.y * 40 + 'px'
    document.getElementById('ninjaman').style.left = ninjaman.x * 40 + 'px'
}
document.onkeydown = function (e) {
    //console.log(e.keyCode);
    if (e.keyCode == 37) {
        ninjaman.x--
        if (world[ninjaman.y][ninjaman.x] == 1) {
            ninjaman.x++
        }
    }
    if (e.keyCode == 39) {
        ninjaman.x++
        if (world[ninjaman.y][ninjaman.x] == 1) {
            ninjaman.x--
        }
    }
    if (e.keyCode == 38) {
        ninjaman.y--
        if (world[ninjaman.y][ninjaman.x] == 1) {
            ninjaman.y++
        }
    }
    if (e.keyCode == 40) {
        ninjaman.y++
        if (world[ninjaman.y][ninjaman.x] == 1) {
            ninjaman.y--
        }
    }
    if (world[ninjaman.y][ninjaman.x] == 2) {
        world[ninjaman.y][ninjaman.x] = 0;
        score = score + 10;
        drawNinjaman();
        drawWorld();
        document.getElementById('score').innerHTML = "the score is: " + score;
    }
    else if (world[ninjaman.y][ninjaman.x] == 3) {
        world[ninjaman.y][ninjaman.x] = 0
        score = score + 5;
        drawNinjaman();
        drawWorld();
        document.getElementById('score').innerHTML = "the score is: " + score;
    }
    else if (world[ninjaman.y][ninjaman.x] == 0) {
        world[ninjaman.y][ninjaman.x] = 0;
        drawNinjaman();
        drawWorld();
    }
}
//keep score sushi-10pts onigiri -5pts