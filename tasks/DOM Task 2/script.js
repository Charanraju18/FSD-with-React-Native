
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
    var i_index = i;
    var j_index = j;
    Table_Data.setAttribute("onclick",`return_pos(${i_index},${j_index})`);

    if(ind%2!=0){
      if((i%2==0 && j%2==0) || (i==j) || (i+j==ind-1) || (i%2!==0 && j%2!=0)){
        Table_Data.setAttribute("style","background-color:black");
      }
      else{
        Table_Data.setAttribute("style","background-color:#8C5238");
      }
    }
    else{
      if((i%2==0 && j%2==0) || (i==j) || (i%2!==0 && j%2!=0)){
        Table_Data.setAttribute("style","background-color:black");
      }
      else{
        Table_Data.setAttribute("style","background-color:#8C5238");
      }
    }

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

//creating another div for up btn
var up_btn_div = document.createElement("div");
up_btn_div.classList.add("up_btn_div");
btn_div.appendChild(up_btn_div);


// creating another div for left and right button
var lr_btn_div = document.createElement("div");
lr_btn_div.classList.add("lr_btn_div");
btn_div.appendChild(lr_btn_div);

//creating another div for down btn
var down_btn_div = document.createElement("div");
down_btn_div.classList.add("down_btn_div");
btn_div.appendChild(down_btn_div);


// creating buttons
var btn1 = document.createElement("button");
btn1.classList.add("up_btn");
btn1.setAttribute("onclick","up_fun()");
btn1.innerHTML = "UP";
up_btn_div.appendChild(btn1);

var btn2 = document.createElement("button");
btn2.classList.add("down_btn");
btn2.setAttribute("onclick","down_fun()");
btn2.innerHTML = "DOWN";
down_btn_div.appendChild(btn2);

var btn3 = document.createElement("button");
btn3.classList.add("left_btn");
btn3.setAttribute("onclick","left_fun()");
btn3.innerHTML = "LEFT";

var btn4 = document.createElement("button");
btn4.classList.add("right_btn");
btn4.setAttribute("onclick","right_fun()");
btn4.innerHTML = "RIGHT";

lr_btn_div.appendChild(btn3);
lr_btn_div.appendChild(btn4);

// king piece and its row and column
var piece = Table.rows[0].cells[0];
var chess_piece = document.createElement("i");
chess_piece.classList.add("piece_class");
chess_piece.setAttribute("class","fa-solid fa-crown")
chess_piece.setAttribute("style","color: #ffffff;")
piece.appendChild(chess_piece);


// Function to generate random number
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let random_i = ( Math.ceil(randomNumber(0, ind-1)) );
let random_j = ( Math.ceil(randomNumber(0, ind-1)) );
console.log(random_i,random_j);

// pawn piece and its row and column
var pawn_piece = Table.rows[random_i].cells[random_j];
var pawn = document.createElement("i");
pawn.classList.add("piece_class");
pawn.setAttribute("class","fa-solid fa-chess-pawn")
pawn.setAttribute("style","color: #ffffff;")
pawn_piece.appendChild(pawn);

var prev_pos_x = 0;
var prev_pos_y = 0;

function return_pos(x,y){
  // this code gives the position of current index values to per_pos values
  prev_pos_x = pos.x;
  prev_pos_y = pos.y;

  // if the td that we click and the random values are equal the king piece goes to random value and pawn goes to
  // prev_value and we update the random value with prev_value that the is on.
  if(x==random_i && y==random_j){
    piece = Table.rows[x].cells[y];
    piece.appendChild(chess_piece);
    pawn_piece = Table.rows[prev_pos_x].cells[prev_pos_y];
    pawn_piece.appendChild(pawn);
    random_i=prev_pos_x;
    random_j=prev_pos_y;
    console.log(random_i,random_j);
    pos.x = x;
    pos.y = y;
  }

  // else we just place the king piece normally
  else{
    piece = Table.rows[x].cells[y];
    piece.appendChild(chess_piece);
    pos.x = x;
    pos.y = y;
  }

}

var pos = {
  x:0,
  y:0,
}

// button up_function
function up_fun(){
  if(pos.x==0){
    pos.x=ind-1;
    if(pos.x==random_i && pos.y==random_j){
      piece = Table.rows[pos.x].cells[pos.y];
      if(pos.x==ind-1){
        pawn_piece = Table.rows[pos.x-ind-1].cells[pos.y];
        random_i=pos.x-ind-1;
      }
      else{
        console.log(pos.x,pos.y)
        pawn_piece = Table.rows[pos.x+1].cells[pos.y];
        random_i=pos.x+1;
      }
    }
    else if(pos.x==0 && random_i==ind-1){
      pawn_piece = Table.rows[0].cells[pos.y];
      piece = Table.rows[pos.x].cells[pos.y];
    }
    else{
      piece = Table.rows[pos.x].cells[pos.y];
    }
  }
  else{
    (pos.x)-=1;
    if(pos.x==random_i && pos.y==random_j){
      piece = Table.rows[pos.x].cells[pos.y];
      pawn_piece = Table.rows[pos.x+1].cells[pos.y];
      random_i=pos.x+1;
    }
    else{
      piece = Table.rows[pos.x].cells[pos.y];
    }
  }
  piece.appendChild(chess_piece);
  pawn_piece.appendChild(pawn);
}

// button down_function
function down_fun(){
  if(pos.x==ind-1){
    pos.x=0;
    piece = Table.rows[pos.x].cells[pos.y];
  }
  else{
    (pos.x)+=1;
    piece = Table.rows[pos.x].cells[pos.y];
  }
  piece.appendChild(chess_piece);
}

// button left_function
function left_fun(){
  if(pos.y==0){
    pos.y=ind-1;
    piece = Table.rows[pos.x].cells[pos.y];
  }
  else{
    (pos.y)-=1;
    piece = Table.rows[pos.x].cells[pos.y];
  }
  piece.appendChild(chess_piece);

}

// button right_function
function right_fun(){
  if(pos.y==ind-1){
    pos.y=0;
    piece = Table.rows[pos.x].cells[pos.y];
  }
  else{
    (pos.y)+=1;
    piece = Table.rows[pos.x].cells[pos.y];
  }
  piece.appendChild(chess_piece);
}