const accountsWrap  = document.querySelector('.accounts-wrap');
const accountsClose = document.querySelector('.accounts-close');
const accountsOpen  = document.querySelector('.personal-area__accounts-btn');


function closeAccounts () {
    accountsWrap.classList.add('accounts--hidden');
    document.body.style.overflow = '';
}

accountsOpen.addEventListener('click', () => {
    accountsWrap.classList.remove('accounts--hidden');
    document.body.style.overflow = 'hidden';
})

accountsClose.addEventListener('click', () => {
    closeAccounts();
})


accountsWrap.addEventListener('click', (e) => {
    if (e.target === accountsWrap) {
      closeAccounts();
    }
  })
  
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeAccounts();
    }
  })
