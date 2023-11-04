let rewiewBtnBack  = document.querySelector('.review-write__btn-back');
let rewiewBtnLeave = document.querySelector('.reviews__leave-btn');
let rewiewWrite    = document.querySelector('.review-write');

rewiewBtnLeave.addEventListener('click', () =>{
rewiewWrite.classList.remove('review-write--hidden');
rewiewBtnLeave.classList.add('review-leave-btn--hidden');
});

rewiewBtnBack.addEventListener('click', () =>{
rewiewWrite.classList.add('review-write--hidden');
rewiewBtnLeave.classList.remove('review-leave-btn--hidden');
});
