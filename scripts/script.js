//var partners = document.querySelectorAll('.partners ul li img');
//
//partners.forEach
//
//
//partners.forEach(function(partner) {
//    partner.addEventListener('mouseover', function() {
//        partner.src = '../img/linkedinkleur.png';
//    }
//                             )});
var triplets = document.querySelector('.triplets');
var productslink = document.querySelector('nav ul li:nth-of-type(3)');

productslink.addEventListener('click', function() {
    triplets.scrollIntoView ({
        behavior: 'smooth'
    });
});

//partnerslink.addEventListener('click', function() {
//    partners.scrollIntoView ({
//        behavior: 'smooth'
//    });
//});

var contactknop = document.querySelector('.contactknop');
var section = document.querySelector('.message');
var naam = document.querySelector('naam').value;
var mail = document.querySelector('mail').value;
var tel = document.querySelector('tel').value;


contactknop.addEventListener('click', function () {
    var berichttitel = document.createElement('h2');
    var berichttekst = document.createElement('p');
    section.appendChild(berichttekst);
    section.appendChild(berichttitel);
    berichttekst.innerHTML = "Beste " + naam +"," <br> "Wij hebben uw aanvraag ontvangen. Er is een bevestiging gestuurd naar uw emailadres. Wij zullen zo snel mogelijk contact met u opnemen op het opgegeven nummer" <br> "Uw telefoonnummer: " + tel + "." <br> "Bedankt voor het bezoeken van onze website.";
    berichttitel.textContent = "Reactie op " + Date;
})

var linksknop = document.querySelector('.partners button:first-of-type');
var rechtsknop = document.querySelector('.partnes button:last-of-type');

linksknop.addEventListener('click', function() {

}
