function validacao(){

	var a = document.getElementById("altura").value

	document.getElementById("altura").style.borderColor = ""
	document.getElementById("msg_altura").innerHTML = ""

	document.getElementById("peso").style.borderColor = ""
	document.getElementById("msg_peso").innerHTML = ""


	if(a == ""){
		document.getElementById("altura").style.borderColor = "red"
		document.getElementById("msg_altura").innerHTML = "<b>Imforme a altura</b>"
		document.getElementById("imc").innerHTML = ""
		return false
	}
	var p = document.getElementById("peso").value

	if(p == ""){
		document.getElementById("peso").style.borderColor = "red"
		document.getElementById("msg_peso").innerHTML = "<b>Informe o peso</b>"
		document.getElementById("imc").innerHTML = ""
		return false
	}

	return false 
}
function calcula_imc(){
	var altura = document.getElementById("altura").value;
	var peso = document.getElementById("peso").value;

	var quadrado = (altura * altura);

	var calculo = (peso/quadrado);
	var calculo = calculo.toFixed(2)
	if(calculo<18.5){
	document.getElementById('imc').innerHTML = ("Você está abaixo do peso com o indice: " + calculo);
	}
	else if(calculo>=18.5 && calculo<24.9){
	document.getElementById('imc').innerHTML = ("Você está com o peso normal com o indice: " + calculo);		
	
	}

	else if(calculo>=25 && calculo<29.9) {
	document.getElementById('imc').innerHTML = ("Você está acima do peso com o indice: " + calculo);

	}
	else if(calculo>=30 && calculo<39.9) {
	document.getElementById('imc').innerHTML = ("Você está com obesidade com o indice: " + calculo);

	}
	else if (calculo>40)
	document.getElementById('imc').innerHTML = ("Você está com obesidade grave com o indice: " + calculo);
}

function validar(){

	document.getElementById("txt_nome").style.borderColor = ""
	document.getElementById("msg_nome").innerHTML = ""

	document.getElementById("txt_email").style.borderColor = ""
	document.getElementById("msg_email").innerHTML = ""

	document.getElementById("txt_tel").style.borderColor = ""
	document.getElementById("msg_tel").innerHTML = ""

	document.getElementById("txt_assunto").style.borderColor = ""
	document.getElementById("msg_assunto").innerHTML = ""



	var nome = document.getElementById("txt_nome").value	
	if (nome =="") {
		document.getElementById("txt_nome").style.borderColor = "red";
		
		document.getElementById("msg_nome").innerHTML = "<b>Informe o nome</b>"
		document.getElementById('imc').innerHTML =""
		return false;
	}
	var email = document.getElementById("txt_email").value
	if (email ==""){
		document.getElementById("txt_email").style.borderColor = "red";

		document.getElementById("msg_email").innerHTML = "<b>Informe o email</b>"
		document.getElementById('imc').innerHTML =""
		return false;
	}
	var tel = document.getElementById("txt_tel").value
	if (tel ==""){
		document.getElementById("txt_tel").style.borderColor = "red";

		document.getElementById("msg_tel").innerHTML = "<b>Informe o telefone</b>"
		document.getElementById('imc').innerHTML =""
		return false;
	}
	var assunto = document.getElementById("txt_assunto").value
	if (assunto ==""){
		document.getElementById("txt_assunto").style.borderColor = "red";

		document.getElementById("msg_assunto").innerHTML = "<b>Informe o assunto</b>"
		document.getElementById('imc').innerHTML =""
		return false;
	}
	return true;

}
function numeros(){
	tecla = event.keyCode;
	if((tecla >=48) && (tecla <=57)){
		return true;
	}else if(tecla >=37 && tecla <=40){
		return true;
	}else if(tecla ==8 || tecla == 46){
		return true;
	}
	else{
		return false;
	}
}


