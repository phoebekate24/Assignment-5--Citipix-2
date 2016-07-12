$(document).ready(start);

function start() {
	$("#city-form").submit(handleForm);
	$("#submit-btn").click(newCity);
}

function handleForm(e){
	e.preventDefault();
	
}

function newCity(e){
	e.preventDefault();
}