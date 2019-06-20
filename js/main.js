$('#slider').slick({
    speed: 1250,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: true
});
$('.slick-prev').html('<i class="fas fa-chevron-left" aria-hidden="true"></i>');
$('.slick-next').html('<i class="fas fa-chevron-right" aria-hidden="true"></i>');
$('.slick-arrow').attr('aria-hidden', true);
$('.slick-dots>li>button').html('');
$('.slick-dots>li>button').attr('aria-hidden', true);
$('.slick-dots').attr('aria-hidden', true);

const listePortfolio = $('#liste_portfolio li');

for(var i = 0 ; i < listePortfolio.length ; i++){
    listePortfolio[i].addEventListener("click", function(e){
        const flecheElt = document.getElementById('fleche_portfolio');
        if(e.target.tagName == "LI"){
            for(var j = 0 ; j < listePortfolio.length ; j++){
                listePortfolio[j].className = "";
            }
            
            e.target.className = "selected";
        }
        else{}
    });
}