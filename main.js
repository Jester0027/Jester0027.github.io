$('#slider').slick({
    speed: 1250,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: true
});
$('.slick-prev').html('<');
$('.slick-next').html('>');
$('.slick-dots>li>button').html('');

const listePortfolio = $('#liste_portfolio li');

for(var i = 0 ; i < listePortfolio.length ; i++){
    listePortfolio[i].addEventListener("click", function(e){
        const flecheElt = document.getElementById('fleche_portfolio');
        if(e.target.tagName == "LI"){
            for(var j = 0 ; j < listePortfolio.length ; j++){
                listePortfolio[j].className = "";
            }
            
            flecheElt.parentNode.removeChild(flecheElt);
            e.target.className = "selected";
            e.target.insertAdjacentHTML('afterbegin', '<div id="fleche_portfolio"><img src="webagency_images/images/portfolio/selected.png" alt=""></div>');
        }
        else{}
    });
}