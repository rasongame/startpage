// Initialization
console.log("Init main!");

// Инициализируем переменные
var table = document.getElementById('favorite')
var button_controller = document.querySelector(".button_controller")
var count = 0;
var canMove = false;
var color = "rgba(0,255,0,1);"
// Тут все понятно
function allow_Move() {
  count++

  if (count % 2){
    canMove = true;
  } else {
    canMove = false;

  }
  if (canMove){
    button_controller.style.borderColor = color;
  } else {
    button_controller.style.borderColor = "rgba(255,0,0,1)";
  }
}

table.onmousedown = function(e) { // Отследить нажатие
  // 2. Подготовить к перемещению
  if (canMove) {
    table.style.position = 'absolute';
    moveAt(e);
    document.body.appendChild(table);

    table.style.zindex = 1000; // показывать таблицу над другими элементами.
    // передвинуть таблицу под координаты таблицы
    // и сдвинуть на половину широты/высоты для центрирования
    function moveAt(e) {
      table.style.left = e.pageX - table.offsetWidth / 2 + 'px';
      table.style.top = e.pageY - table.offsetHeight / 2 + 'px';

    }
    // 3. Перемещать по экрану
    document.onmousemove = function(e) {
      moveAt(e);
    }
    // 4. Отследить окончание переноса
    table.onmouseup = function(e) {
      document.onmousemove = null;
      table.onmouseup = null;

    }
    table.ondragstart = function() {
      return false;
    }
  }}
