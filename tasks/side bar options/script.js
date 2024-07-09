var c = 0;
function bar_open(data){
	c+=1;
	if(c%2!=0){
		var x = document.getElementsByClassName(data)[0];
		x.style.width = "150px";
		x.style.left = "0px";
	}
	else{
		var x = document.getElementsByClassName(data)[0];
		x.style.width = "0px";
		x.style.left = "-30px";
	}

}