
// taking input from user
var index = window.prompt("Enter the size of the grid (1-10):");
while(1){
  if(index<=10){
    break;
  }
  else{
  var index = window.prompt("Enter the size of the grid (1-10):");
  }
}
let ind = parseInt(index);
console.log(typeof ind);

// creating div with class name = back_div
var div1 = document.createElement("div");
div1.classList.add("back_div");

// creating table tag with class name = table_tag
var Table = document.createElement("table");
Table.classList.add("table_tag")

// inserting tr and td into table
for (let i = 0; i < ind; i++) {
  var Table_Row = document.createElement("tr");
  for (let j = 0; j < ind; j++) {
    var Table_Data = document.createElement("td");
    Table_Row.appendChild(Table_Data);
  }
  Table.appendChild(Table_Row);
}

// inserting table into  div and div to body
div1.appendChild(Table);
document.body.appendChild(div1);

//creating another div to put operation buttons
var btn_div = document.createElement("div");
btn_div.classList.add("btn_div");

// inserting btn_div into body
document.body.appendChild(btn_div);

// creating buttons
var btn1 = document.createElement("button");
btn1.classList.add("up_btn");
btn1.setAttribute("onclick","up_fun()");
btn1.innerHTML = "UP";

var btn2 = document.createElement("button");
btn2.classList.add("down_btn");
btn2.setAttribute("onclick","down_fun()");
btn2.innerHTML = "DOWN";

var btn3 = document.createElement("button");
btn3.classList.add("left_btn");
btn3.setAttribute("onclick","left_fun()");
btn3.innerHTML = "LEFT";

var btn4 = document.createElement("button");
btn4.classList.add("right_btn");
btn4.setAttribute("onclick","right_fun()");
btn4.innerHTML = "RIGHT";

// adding the created btns into btn_div
btn_div.append(btn1,btn2,btn3,btn4);

var piece = Table.rows[0].cells[0];
console.log(piece);
var chess_piece = document.createElement("i");
chess_piece.setAttribute("class","fa-solid fa-crown")
piece.appendChild(chess_piece);


var pos = {
  x:0,
  y:0,
}

// button up_function
function up_fun(){
  if(pos.x==0){
    window.alert("cannot move up");
  }
  else{
    (pos.x)-=1;
    piece = Table.rows[pos.x].cells[pos.y];
    piece.appendChild(chess_piece);
  }
}

// button down_function
function down_fun(){
  if(pos.x==ind-1){
    window.alert("cannot move down");
  }
  else{
    (pos.x)+=1;
    piece = Table.rows[pos.x].cells[pos.y];
    piece.appendChild(chess_piece);
  }
}

// button left_function
function left_fun(){
  if(pos.y==0){
    window.alert("cannot move left");
  }
  else{
    (pos.y)-=1;
    piece = Table.rows[pos.x].cells[pos.y];
    piece.appendChild(chess_piece);
  }
}

// button right_function
function right_fun(){
  if(pos.y==ind-1){
    window.alert("cannot move right");
  }
  else{
    (pos.y)+=1;
    piece = Table.rows[pos.x].cells[pos.y];
    piece.appendChild(chess_piece);
  }
}