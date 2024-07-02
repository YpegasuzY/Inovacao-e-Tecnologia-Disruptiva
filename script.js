        // Get the modal
        let modal = document.getElementById('id01');
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }


            // Define uma variável para acompanhar o índice do item atualmente visível no carrossel
let currentIndex = 0;

// Seleciona todos os elementos com a classe 'carousel-item' e armazena-os em uma NodeList
const itens = document.querySelectorAll('.carrousel-item');

// Calcula o número total de itens no carrossel
const totalItens = itens.length;

// Define quantos itens devem ser visíveis ao mesmo tempo no carrossel
let visibleItens = 3;

// Calcula o índice máximo que pode ser alcançado sem ultrapassar os limites do carrossel
let maxIndex = totalItens - visibleItens;

// Define a função que avança para o próximo slide
function nextSlide() {
    // Verifica se o índice atual é menor do que o índice máximo permitido
    if (currentIndex < maxIndex) {
        // Incrementa o índice atual
        currentIndex++;
        // Chama a função para atualizar a posição do carrossel na tela
        updateCarousel();
    }
}

// Define a função que retrocede para o slide anterior
function prevSlide() {
    // Verifica se o índice atual é maior que zero (ou seja, não é o primeiro slide)
    if (currentIndex > 0) {
        // Decrementa o índice atual
        currentIndex--;
        // Chama a função para atualizar a posição do carrossel na tela
        updateCarousel();
    }
}

// Define a função que atualiza a posição do carrossel na tela
function updateCarousel() {
    // Calcula o deslocamento necessário para mostrar o item atual na tela
    let offset = currentIndex * -335; // 300px de largura do item + 35px de margem entre os itens
    // Atualiza o estilo CSS do elemento com a classe 'carousel-inner' para mover o carrossel
   
    document.querySelector('.carrousel-inner').style.transform = `translateX(${offset}px)`;
}


function toggleExpandirDiv(id) {
    let divClicada = document.getElementById(id);
    let conteudoDivClicada = divClicada.querySelector(".conteudoDiv");
  
    // Percorre todas as bordaDiv
    let bordaDivs = document.querySelectorAll(".bordaDiv");

  
    let titulo = document.querySelectorAll(".titulo")
    bordaDivs.forEach(function(div) {
      if (div.id !== id) {
        // Se não for a div clicada, contrai e remove a classe "visible"
        div.style.flex = "1";
        div.querySelector(".conteudoDiv").classList.remove("visible");
      }
    });
  
    // Alterna entre expandir e contrair a div clicada
    if (conteudoDivClicada.classList.contains("visible")) {
      // Se já estiver expandida, contrai
      divClicada.style.flex = "1";
      conteudoDivClicada.classList.remove("visible");
    } else {
      // Se não estiver expandida, expande
      divClicada.style.flex = "10";
      divClicada.style.gap = "20px";
      conteudoDivClicada.classList.add("visible");
      titulo.style.marginTop = "0";
        // Altera a posição do background X
    }
  }

  function trocarPosicaoFundo() {
    let divTesla = document.getElementById("tesla");
    let fundoX = divTesla.getAttribute("background-position-x");
    let imgTeslaY = divTesla.getAttribute("background-position-y");
    let fundoFlex = divTesla.getAttribute("flex");
  
    if (fundoFlex === "10") {
      divTesla.style.backgroundPositionX = "-100rem";
      divTesla.style.backgroundPositionY = "-100rem";
    } else {
      divTesla.style.backgroundPositionX = fundoX;
      divTesla.style.backgroundPositionY = imgTeslaY;
    }
  }
  
