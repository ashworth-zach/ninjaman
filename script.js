var score = 0;
var world = [];
var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri'
}
function genWorld() {
    world.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // top wall

    for (var i = 0; i < 20; i++) { //amount of rows
        var arr = [];
        for (var j = 0; j < world[0].length; j++) {
            var random = Math.floor((Math.random() * 4) + 1) - 1;
            arr.push(random);
        }
        world.push(arr);
    }
    for (var x = 0; x < world.length; x++) {
        if (world[x][0] == world[x][0]) {
            world[x][0] = 1; //left side wall
        }
        if (world[x][19] == world[x][19]) {
            world[x][19] = 1; //right side wall
        }
    }
    world.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); //bottom wall
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
var bluey = {
    x:15,
    y:1
}
var red = {
    x:15,
    y:12
}
function drawBluey(){
    document.getElementById('bluey').style.top = bluey.y * 40 + 'px'
    document.getElementById('bluey').style.left = bluey.x * 40 + 'px'
}
function drawNinjaman() {
    document.getElementById('ninjaman').style.top = ninjaman.y * 40 + 'px'
    document.getElementById('ninjaman').style.left = ninjaman.x * 40 + 'px'
}
function drawRed(){
    document.getElementById('red').style.top = red.y * 40 + 'px'
    document.getElementById('red').style.left = red.x * 40 + 'px'
}
function chaseKill(){
    
    if (ninjaman.x > bluey.x){
        bluey.x++
        if (world[bluey.y][bluey.x] == 1) {
            bluey.x--//left
        }
    }
    if (ninjaman.x < bluey.x){
        bluey.x--
        if (world[bluey.y][bluey.x] == 1) {
            bluey.x++//right
        }
    }
    if (ninjaman.y > bluey.y){
        bluey.y++
        if (world[bluey.y][bluey.x] == 1) {
            bluey.y--//down
        }
    }
    if (ninjaman.y < bluey.y){
        bluey.y--
        if (world[bluey.y][bluey.x] == 1) {
            bluey.y++//up
        }
    }
    if (ninjaman.y == bluey.y && ninjaman.x == bluey.x){
        document.getElementById('score').innerHTML = "the score is: " + score + ", But you lost so hit F5 to restart";
    }
    if (ninjaman.x > red.x){
        red.x++
        if (world[red.y][red.x] == 1) {
            red.x--//left
        }
    }
    if (ninjaman.x < red.x){
        red.x--
        if (world[red.y][red.x] == 1) {
            red.x++//right
        }
    }
    if (ninjaman.y > red.y){
        red.y++
        if (world[red.y][red.x] == 1) {
            red.y--//down
        }
    }
    if (ninjaman.y < red.y){
        red.y--
        if (world[red.y][red.x] == 1) {
            red.y++//up
        }
    }
    if (ninjaman.y == red.y && ninjaman.x == red.x){
        document.getElementById('score').innerHTML = "the score is: " + score + ", But you lost so hit F5 to restart";
    }
}
document.onkeydown = function (e) {
    //console.log(e.keyCode);
    drawBluey();
    drawRed();
    chaseKill();
    if (e.keyCode == 37) {
        ninjaman.x--
        if (world[ninjaman.y][ninjaman.x] == 1) {
            ninjaman.x++//right
        }
    }
    if (e.keyCode == 39) {
        ninjaman.x++
        if (world[ninjaman.y][ninjaman.x] == 1) {
            ninjaman.x--//left
        }
    }
    if (e.keyCode == 38) {
        ninjaman.y--
        if (world[ninjaman.y][ninjaman.x] == 1) {
            ninjaman.y++//up
        }
    }
    if (e.keyCode == 40) {
        ninjaman.y++
        if (world[ninjaman.y][ninjaman.x] == 1) {
            ninjaman.y--//down
        }
    }
    if (world[ninjaman.y][ninjaman.x] == 2) {
        world[ninjaman.y][ninjaman.x] = 0;
        score = score + 10; //SUSHI 10 Pts
        drawNinjaman();
        drawWorld();
        document.getElementById('score').innerHTML = "the score is: " + score;
    }
    else if (world[ninjaman.y][ninjaman.x] == 3) {
        world[ninjaman.y][ninjaman.x] = 0
        score = score + 5; //ONIGIRI 5 Pts
        drawNinjaman();
        drawWorld();
        document.getElementById('score').innerHTML = "the score is: " + score;
    }
    else if (world[ninjaman.y][ninjaman.x] == 0) {
        world[ninjaman.y][ninjaman.x] = 0;
        drawNinjaman(); //BLANK SPACE
        drawWorld();
    }

}
//keep score sushi-10pts onigiri -5pts