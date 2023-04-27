// FUNZIONE VALIDITA NEWSLETTER
const formNewsletter = document.getElementById('newsletterForm');
const newsletterErrore = document.getElementsByClassName('newsletterErrore')[0];
const newsletterSuccesso = document.getElementsByClassName('newsletterSuccesso')[0];
const mailNewsletter = document.getElementById('input-email');
const invioNewsletter = document.getElementsByClassName('bottone__form')[0];

formNewsletter.addEventListener('submit', function(event){
    event.preventDefault();

    if(!mailNewsletter.value.match(/[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/i)){
        mailNewsletter.classList.remove('mb-3')
        newsletterErrore.style.display = "block";
    } else {
        mailNewsletter.classList.add('mb-3')
        newsletterErrore.style.display = "none";
        invioNewsletter.style.display = 'none';

        newsletterSuccesso.style.display = 'block'
        // formNewsletter.submit();
    }
})
