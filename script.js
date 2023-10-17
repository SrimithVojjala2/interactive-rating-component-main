const ratings = document.querySelectorAll('.ratings span');
const sub_button = document.querySelector('.button');
const rating_cards = document.querySelector('.rating_card');
const thankyou_card = document.querySelector('.thankyou_card');
const rating = document.getElementById('rate');

let rate = null;

ratings.forEach((ratecard)=>{
    ratecard.addEventListener('click',(e)=>{
        const active = document.querySelector('.checked');
        if(active){
            active.classList.remove('checked');
        }
        const card = e.target;
        card.classList.add('checked');
        rate= card.innerText;
    })
})

sub_button.addEventListener('click',()=>{
    if(rate){
        rating.innerText = rate;
        rating_cards.classList.add('hidden');
        thankyou_card.classList.remove('hidden');
    }
})