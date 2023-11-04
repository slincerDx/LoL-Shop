//Select

const selectBtn = document.querySelector('.dropdown-btn');
const selectList = document.querySelector('.dropdown__list');
const selectItem = document.querySelectorAll('.dropdown__list-item');
const selectInput = document.querySelector('.dropdown__input-hidden');

selectBtn.addEventListener('click', () => {
  selectList.classList.toggle('dropdown__list--hidden');
  selectBtn.classList.toggle('dropdown-btn--border');

});

selectItem.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
    selectBtn.innerText = this.innerText;
    selectList.classList.add('dropdown__list--hidden');
    selectBtn.classList.add('dropdown-btn--border');
    selectInput.value = this.dataset.value;
  })
});

document.addEventListener('click', (e) => {
  if (e.target !== selectBtn) {
    selectList.classList.add('dropdown__list--hidden');
    selectBtn.classList.add('dropdown-btn--border');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 'Tab') {
    selectList.classList.add('dropdown__list--hidden');
    selectBtn.classList.add('dropdown-btn--border');
  }

});


//SelectSort

const selectSortBtn = document.querySelector('.select-btn');
const selectSortList = document.querySelector('.select-sort__list');
const selectSortItem = document.querySelectorAll('.select-sort__list-item');
const selectName = document.querySelector('.select-btn-name');
const selectArrow = document.querySelector('.select-btn-img');

selectSortBtn.addEventListener('click', () => {
  selectSortList.classList.toggle('select-sort__list--hidden');
  selectSortBtn.classList.toggle('select-btn--border');
  selectArrow.classList.toggle('select-btn-img--active');
});

selectSortItem.forEach((item) => {
  item.addEventListener('click', function () {
    selectName.innerText = this.innerText;
    selectSortList.classList.add('select-sort__list--hidden');
    selectSortBtn.classList.add('select-btn--border');
    selectArrow.classList.toggle('select-btn-img--active');
  })
});

//FILTER

let filter = function () {
  let input = document.querySelector('.filter-input');

  input.addEventListener('keyup', () => {
    let filter = input.value.toLowerCase(),
      filterElement = document.querySelectorAll('.filter__items__list-item');

    filterElement.forEach((item) => {
      if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    })

  })
}

filter();

//FILTER OPEN

const filterWrap = document.querySelector('.filter-wrap');
const filterOpen = document.querySelector('.filter__right-item_btn');
const filterClose = document.querySelector('.filter-close-btn');

function Close() {
  filterWrap.classList.add('filter-wrap--hidden');
  document.body.style.overflow = '';
}

filterOpen.addEventListener('click', () => {
  filterWrap.classList.remove('filter-wrap--hidden');
  document.body.style.overflow = 'hidden';
})

filterClose.addEventListener('click', () => {
  Close();
})

filterWrap.addEventListener('click', (e) => {
  if (e.target === filterWrap) {
    Close();
  }
})

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    Close();
  }
})