var btn_menu = document.getElementById('btn_menu');
var btn_menu_close = document.getElementById('btn_menu_close');
var menu_modal = document.getElementById('menu_modal');

var btn_gup = document.getElementById('data_gup');
var btn_fisio = document.getElementById('data_fisio');
var btn_optimize = document.getElementById('data_optimize');
var btn_logistica = document.getElementById('data_logistica');
var btn_rc = document.getElementById('data_rc');

var btn_home = document.getElementById('btn_home');
var btn_habilt = document.getElementById('btn_habilt');
var btn_sobre = document.getElementById('btn_sobre');
var btn_contact = document.getElementById('btn_contact');
var bg_img = document.getElementById('bg_img');
var content_curso = document.getElementById('content_curso');
var list_english = document.getElementById('list_english');


// Espera o conteúdo da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os elementos do DOM
    const prevButton = document.getElementById('pass_pro_left');
    const nextButton = document.getElementById('pass_pro');
    const cardWrapper = document.getElementById('list_prof');
    const carrocel = document.getElementById('carrocel');

    // --- Nova função centralizada para controlar a visibilidade dos botões ---
    function updateButtonVisibility() {
        const { scrollLeft, scrollWidth, clientWidth } = cardWrapper;

        // Tolerância para evitar problemas de arredondamento de pixels
        const tolerance = 1; 

        // Condição para mostrar o botão "Anterior" (prevButton)
        // Só mostra se o scrollLeft for maior que 0
        const canScrollLeft = scrollLeft > 0;
        prevButton.classList.toggle('btn_pass_show', canScrollLeft);

        // Condição para mostrar o botão "Próximo" (nextButton)
        // Só mostra se o final do conteúdo visível ainda não alcançou o final do conteúdo total
        const canScrollRight = scrollLeft + clientWidth < scrollWidth - tolerance;
        nextButton.classList.toggle('btn_pass_show', canScrollRight);
    }

    // --- Eventos de Mouse ---
    
    // Quando o mouse ENTRA na área do carrossel
    carrocel.addEventListener("mouseenter", function() {
        // Verifica imediatamente se os botões devem ser mostrados
        updateButtonVisibility();
    });

    // Quando o mouse SAI da área do carrossel
    carrocel.addEventListener("mouseleave", function() {
        // Esconde ambos os botões
        prevButton.classList.remove('btn_pass_show');
        nextButton.classList.remove('btn_pass_show');
    });

    // --- Funções de Scroll (sem alteração) ---
    function scrollNext() {
        const scrollAmount = cardWrapper.clientWidth;
        cardWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    function scrollPrev() {
        const scrollAmount = cardWrapper.clientWidth;
        cardWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }

    // --- Eventos de Clique (sem alteração) ---
    nextButton.addEventListener('click', scrollNext);
    prevButton.addEventListener('click', scrollPrev);
    
    // --- Evento de Scroll ---
    // Atualiza a visibilidade dos botões sempre que o scroll acontece
    // Isso garante que o botão "próximo" suma ao chegar no fim, por exemplo.
    cardWrapper.addEventListener('scroll', updateButtonVisibility);
    
    // (Opcional) Chame uma vez no início caso o carrossel já comece com algum scroll
    // Na maioria dos casos, não é necessário.
    // updateButtonVisibility();
});


$('#menu_modal').click( function(){
    btn_menu.style.display = "";
    btn_menu_close.style.display = "none";
    menu_modal.style.transform = "translateX(100%)";
})
$('#btn_menu').click( function(){
    btn_menu.style.display = "none";
    btn_menu_close.style.display = "block";
    menu_modal.style.transform = "translateX(0%)";
})
$('#btn_menu_close').click( function(){
    btn_menu.style.display = "";
    btn_menu_close.style.display = "none";
    menu_modal.style.transform = "translateX(100%)";
})

$('#btn-gup').click( function(){
    content_curso.style.display = "";
    hide_data();
    btn_gup.style.display = '';
})
$('#btn-rc').click( function(){
    content_curso.style.display = "";
    hide_data();
    btn_rc.style.display = '';
})

$('#btn-fisio').click( function(){
    content_curso.style.display = "";
    hide_data();
    btn_fisio.style.display = '';
})
$('#btn-optimize').click( function(){
    content_curso.style.display = "";
    hide_data();
    btn_optimize.style.display = '';
})
$('#btn-logistica').click( function(){
    content_curso.style.display = "";
    hide_data();
    btn_logistica.style.display = '';
})
$('#close_curso').click( function(){
    content_curso.style.display = "none";
})

function hide_data(){
    btn_gup.style.display = 'none';
    btn_logistica.style.display = 'none';
    btn_fisio.style.display = 'none';
    btn_optimize.style.display = 'none';
    btn_rc.style.display = 'none';
}
window.addEventListener('scroll', function() {
  // Seleciona a div com a classe "top"
  var topDiv = document.querySelector('.top');

  // Verifica se a posição do scroll vertical é maior que 0
  if (window.scrollY > 0) {
    // Se não estiver no topo, remove a classe 'no-topo'
    topDiv.classList.remove('no-topo');
  } else {
    // Se estiver no topo, adiciona a classe 'no-topo'
    topDiv.classList.add('no-topo');
  }
});

function changeBackground(newClass) {
    // 1. Remove as classes de animação e de fundo anteriores
    bg_img.classList.remove('animate-in', 'bg-home', 'bg-habilidades', 'bg-sobre', 'bg-contato');

    // 2. Força o navegador a processar a remoção da classe (reflow)
    // Isso é o "truque" para garantir que a animação possa recomeçar
    void bg_img.offsetWidth; 

    // 3. Adiciona a nova classe de fundo e a classe de animação
    bg_img.classList.add(newClass, 'animate-in');
}

const sections = document.querySelectorAll('section');
const navButtons = document.querySelectorAll('nav button');

// Sua função para remover o estilo de todos os botões
function removeStyle() {
    navButtons.forEach(btn => {
        btn.classList.remove('hover-ativo');
    });
}

// Tente com um valor bem baixo, como 0.1 (10%) ou até menor.
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0 // ANTES: Provavelmente 0.4 ou 0.5. DEPOIS: 0.1 ou 0.05
};

// Se quiser que dispare assim que 1 pixel entrar na tela, você pode até usar 0.
// const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0
// };

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // 'entry.isIntersecting' é true se a seção está na tela (conforme o threshold)
        if (entry.isIntersecting) {
            // Limpa o estilo de todos os botões
            removeStyle();

            // Pega o ID da seção que está visível (ex: "habilidades")
            const sectionId = entry.target.id;

            // Encontra o botão correspondente usando o atributo data-target
            const correspondingButton = document.querySelector(`button[data-target="${sectionId}"]`);
            
            // Adiciona a classe ativa ao botão correto
            if (correspondingButton) {
                correspondingButton.classList.add('hover-ativo');

                if (sectionId == 'home') {
                    changeBackground('bg-home');
                } else if (sectionId == 'habilidades') {
                    changeBackground('bg-habilidades');
                } else if (sectionId == 'sobre_section') {
                    changeBackground('bg-sobre');
                } else if (sectionId == 'contato') {
                    changeBackground('bg-contato');
                }
            }
         }
    });
};

// Cria o observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Manda o observer "observar" cada uma das suas seções
sections.forEach(section => {
    observer.observe(section);
});

// Para garantir que o estilo correto seja aplicado ao carregar a página
window.dispatchEvent(new Event('scroll'));


const textDynamic = document.getElementById('text_dynamic');
const textoOriginal = textDynamic.dataset.text; // Pega o texto do atributo "data-text"

// 2. Define os caracteres que serão usados na animação de "embaralhar"
const caracteres = '01';

let iteracao = 0;

// Limpa o intervalo anterior se houver um, para evitar múltiplas animações
let intervalo = null;

// 3. Inicia a animação
intervalo = setInterval(() => {
    textDynamic.innerText = textoOriginal
        .split('') // Divide a palavra em um array de letras: ['O','L','Á',...]
        .map((letra, index) => {
            // Se o índice da letra já foi "alcançado" pela iteração, mostre a letra original
            if (index < iteracao) {
                return textoOriginal[index];
            }
            
            // Caso contrário, mostre um caractere aleatório
            return caracteres[Math.floor(Math.random() * caracteres.length)];
        })
        .join(''); // Junta o array de volta em uma string

    // 4. Verifica se a animação terminou
    if (iteracao >= textoOriginal.length) {
        clearInterval(intervalo); // Para o setInterval
    }

    // Aumenta a iteração a cada passo da animação
    // O valor '1 / 3' controla a velocidade. Quanto menor, mais rápido.
    iteracao += 2 / 4; 

}, 100);

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

// window.addEventListener('scroll', function() {
//   console.log(Math.round(window.scrollY));
// });


