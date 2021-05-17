
var slideInicial = 0;

showSlides();

function showSlides() {
  

  var i;
  
  
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("pointer");
  
  // Faço o laço for e verifico se o display: none; está no css do slide //
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    
  }
  slideInicial++; 
  
  
  
  
  if (slideInicial > slides.length) {
    slideInicial = 1
  }    
  
  // Faço o laço para setar o pointer como ativo no slide que estiver, e deixo o outro como vazio //
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Aqui eu mudo os valores tanto do pointer quanto do slide para ambos //
  slides[slideInicial-1].style.display = "inline-block";  
  dots[slideInicial-1].className += " active";

  
  
  
}
// Aqui onde eu chamo a função para caso eu queira selecionar um slide de acordo com as bolinhas dos pointers //
function slideAtual(n) {
  selecionarSlide(slideInicial = n);
}
// Aqui eu passo o valor atual do slide que estou visualizando//
function selecionarSlide(n) {
  // Crio uma variável qualquer para o laço for //
  var i;
  // Pego os valores das classes slide e pointer e armazeno nas variaveis sliders e dots //
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("pointer");
  
  if (n > slides.length) {slideInicial = 1}    
  if (n < 1) {slideInicial = slides.length +1}
  
  // Faço o laço for e verifico se o display: none; está no css do slide //
  for (i = 0; i < n; i++) {
      slides[i].style.display = "none";  
  }
  
  //Faço o laço for e já mudo os resultados para active nos ponteiros para eles ficarem selecionados//
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Aqui reforço e mudo a classe do css para inline-block no slider e active no pointer //
  slides[slideInicial-1].style.display = "inline-block";  
  dots[slideInicial-1].className += " active";
}