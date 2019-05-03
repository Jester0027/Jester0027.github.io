$('#slider').slick();
$('.slick-prev').html('<');
$('.slick-next').html('>');

const listePortfolio = document.getElementById('liste_portfolio').getElementsByTagName('li');

for(var i = 0 ; i < listePortfolio.length ; i++){
    listePortfolio[i].addEventListener("click", function(e){
        const flecheElt = document.getElementById('fleche_portfolio');
        if(e.target.tagName == "IMG"){

        }
        else{
            for(var j = 0 ; j < listePortfolio.length ; j++){
                listePortfolio[j].className = "";
            }
            
            flecheElt.parentNode.removeChild(flecheElt);
            e.target.className = "selected";
            e.target.insertAdjacentHTML('afterbegin', '<div id="fleche_portfolio"><img src="webagency_images/images/portfolio/selected.png" alt=""></div>');
        }
    });
}