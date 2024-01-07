var faqs = document.querySelectorAll(".perg")

faqs.forEach(function(perg){
    perg.addEventListener('click', function(){
        perg.classList.toggle('ativo')
    })
})