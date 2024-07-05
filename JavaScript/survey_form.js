const Data = {
	firstName : "",
	secondName : "",
	mobileNumber:"",
	clg:""
};

function first_name(event){
	Data.firstName=event.target.value
}
function last_name(event){
	Data.secondName=event.target.value
}
function mobile_number(event){
	Data.mobileNumber=event.target.value
}
function college(event){
	Data.clg=event.target.value
}

function btn(event){
	// event.preventdefault();
	console.log(Data);
}