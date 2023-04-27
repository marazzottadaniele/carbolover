// FUNZIONE PER FAR FUNZIONARE L'HAMBURGER MENU
let hamburger = document.querySelector('.navbar__hamburger');
hamburger.addEventListener("click", function() {
document.body.classList.toggle('menu-open');
});


$(document).ready(function(){
    // FUNZIONE HOVER BOTTONI - ANIMAZIONE
    $(".cta").hover(function(){
        $(this).css("background-color", 'red')
    }, function(){
        $(this).css("background-color", '#e21219')
    }
    );



    
    // FUNZIONE FADE-IN ALLO SCROLL - ANIMAZIONI
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
      
        if (scrollPosition > 120) {
          $('.animazione-right').animate({
            'left': '0'
          }, 800);
        }
      });
})

