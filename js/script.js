// MENU
var botaoHamburguer = document.querySelector(".botao.menuHamburguer");

function abrirMenu(){
	var menu = document.querySelector("#navegacaoPrimaria");

	if(menu.className == "menuHorizontal visivel"){
		menu.className = "menuHorizontal";
	} else {
		menu.className = "menuHorizontal visivel";
	}

}

botaoHamburguer.onclick = abrirMenu;


// BOTAO AMEI
var botoesAmei = document.querySelectorAll(".botao.amei");

function amar () {
	
	if (this.className == "botao amei") {
		this.className = "botao amei vermelho";
	} else {
		this.className = "botao amei";
	}
}

botoesAmei[0].onclick = amar;
botoesAmei[1].onclick = amar;
botoesAmei[2].onclick = amar;

// SLIDER

function criarUmBullet(numeroDoSlide){
	var bulletUl = document.querySelector(".bullets ul");
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.className = "bullet";

	button.setAttribute("data-slide",numeroDoSlide);

	li.appendChild(button);
	bulletUl.appendChild(li);
}

function criarBulletsNoSlider(){
	var slides = document.querySelectorAll("#slider .slide");
	var quantidadeSlides = slides.length;

	for (var i = 0; i < quantidadeSlides; i++) {
		criarUmBullet(i);
	}
}
var slideIndexAtivo = 0;

function voltarSlide(){
 	if(slideIndexAtivo > 0){

 	var anteriorSlideIndex = slideIndexAtivo -1;
	var anteriorSlideOrdem = anteriorSlideIndex +1;

	var slideAtual = document.querySelector("#slider .slide.ativo");
	slideAtual.classList.remove("ativo");
	var anteriorSlide = document.querySelector("#slider .slide:nth-child("+anteriorSlideOrdem+")");
	anteriorSlide.classList.add("ativo");

	slideIndexAtivo = anteriorSlideIndex;
 }

}

function avancarSlide(){
	// qual é o slide seguinte
	var slides = document.querySelectorAll("#slider .slide");
	if(slideIndexAtivo < slides.length-1){

	var proximoSlideIndex = slideIndexAtivo +1;
	var proximoSlideOrdem = proximoSlideIndex +1;
	// proximo slide index é slide ativo +1
	//atualizar o slideIndexAtivo

	var slideAtual = document.querySelector("#slider .slide.ativo");
	slideAtual.classList.remove("ativo");

	var proximoSlide = document.querySelector("#slider .slide:nth-child("+proximoSlideOrdem+")");
	proximoSlide.classList.add("ativo");

	slideIndexAtivo = proximoSlideIndex;

}
}

function irParaOSlideCorrespondente(){
	var slideAtivo = document.querySelector(".slide.ativo");
	slideAtivo.classList.remove("ativo");

	var slideIndex = parseInt(this.getAttribute("data-slide"));
	var numeroSlide = slideIndex + 1;
	var slideCorrespondente = document.querySelector("#slider .slideBox .slide:nth-child("+numeroSlide+")");
	slideCorrespondente.classList.add("ativo");

	slideIndexAtivo = slideIndex;
}

function adicionarOnClickNosBotoes(){

	var botaoVoltar = document.querySelector(".seta.esquerda");
	botaoVoltar.onclick = voltarSlide;

	var botaoAvancar = document.querySelector(".seta.direita");
	botaoAvancar.onclick = avancarSlide;

	var bullets = document.querySelectorAll("#slider .bullet");
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].onclick = irParaOSlideCorrespondente;
	}


}

var slider = document.querySelector("#slider");

if(slider != null){
	criarBulletsNoSlider();
	adicionarOnClickNosBotoes();
}


// var formulario = document.querySelector(".enviar");
// var boxMensagem = document.querySelector(".box-mensagem");
// var mensagem = document.querySelector(".mensagem");
// var infoPessoal = document.querySelector(".info-pessoal");
// var sugestoes = document.querySelector(".sugestoes");
// formulario.onclick = mostrarMensagens;
// function mostrarMensagens(){
// 	if(boxMensagem.className == "box-mensagem"){
// 		boxMensagem.className = ("box-mensagem ativo");
// 	}else{
// 		boxMensagem.className = ("boxMensagem");
// 	}
	
// }


// var nomeTag = document.querySelector(".nome");
// nomeTag.addEventListener("focusout", nome);
// function nome(){
// 	if(nomeTag.value.length == 0){
// 		nomeTag.className = ("nome invalido");
// 	}else{
// 		nomeTag.className = ("nome");
// 	}
// }

var idade = document.querySelector(".idade");
idade.onkeyup = validarIdade;
function validarIdade() {
	var valorIdade = parseInt(idade.value);
	if(valorIdade < 18){
		idade.parentNode.classList.add("invalido");
	}else{
		idade.parentNode.classList.remove("invalido");
	}
}

//PEGAR O CAMPO	
var nome = document.querySelector(".nome");
nome.onblur = validarNome;
//CRIAR VALIDAÇÃO
function validarNome(){
	var valorNome = nome.value;
	if(valorNome == ""){
		nome.parentNode.classList.add("invalido");
	}else{
		nome.parentNode.classList.remove("invalido");
	}
}
//VALIDAR QUANDO SAIR DO FOCO DO CAMPO

var sugestao = document.querySelector(".inputSugestao");
sugestao.onblur = validarSugestao;

function validarSugestao(){
	var valorSugestao = sugestao.value;
	if(valorSugestao == ""){
		sugestao.parentNode.classList.add("invalido");
	}else{
		sugestao.parentNode.classList.remove("invalido");
	}
}

var formulario = document.querySelector(".formulario")
formulario.onsubmit = adicionarBalao;
function adicionarBalao(){
	var balao = document.createElement("div");
	balao.classList.add("balao");
	var baloes = document.querySelector(".baloes");
	baloes.appendChild(balao);

	var headerForm = document.createElement("header");
	headerForm.classList.add("linha")
	balao.appendChild(headerForm);
	var nomeTag = document.createElement("h3");
	var valorNome = nome.value;
	headerForm.appendChild(nomeTag);
	nomeTag.innerText = valorNome;

	var idadeTag= document.createElement("span");
	var valorIdade = parseInt(idade.value);
	headerForm.appendChild(idadeTag);
	idadeTag.innerText = valorIdade;

	var p = document.createElement("p");
	var sugestao = document.querySelector(".inputSugestao");
	var valorSugestao = sugestao.value;
	balao.appendChild(p);
	p.innerText = valorSugestao;
	
	

	return false;
}