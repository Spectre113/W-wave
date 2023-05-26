// search
var search = document.querySelector('.header__search-button--noactive');
var nav = document.querySelector('.header__nav');
var searchcontent= document.querySelector('.header__search-active');
var content= document.querySelector('.header__right');
var close = document.querySelector('.header__search-close');

search.addEventListener('click', function(event){
	event.stopPropagation();
	search.classList.add('none');
	searchcontent.classList.add('block');
	nav.classList.add('none')
	content.classList.add('header__right-active-search');
});

close.addEventListener('click', function(event){
	event.stopPropagation();
	search.classList.remove('none');
	searchcontent.classList.remove('block');
	nav.classList.remove('none');
	content.classList.remove('header__right-active-search');
});

document.addEventListener('click', function(event){
	if (!searchcontent.contains(event.target) && !search.contains(event.target)) {
		search.classList.remove('none');
		searchcontent.classList.remove('block');
		nav.classList.remove('none');
		content.classList.remove('header__right-active-search');
	}
});
// log
var lopen = document.querySelectorAll('.header__right-log');
var lcontent = document.querySelector('.header__right-log-content');
var lclose = document.querySelector('.header__right-close-btn');

lopen.forEach(function(button) {
  button.addEventListener('click', function(){
    lcontent.classList.remove('none');
    lcontent.classList.add('flex');
  });
});

lclose.addEventListener('click', function(){
  lcontent.classList.add('none');
  lcontent.classList.remove('flex');
});
	// log-validation
const validate = new window.JustValidate('#log-form');
const validator = new JustValidate('#log-form');

validator
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели логин',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимум 30 символов',
    },
  ])
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели пароль',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
  ]);
  // play-pause
var buttons = document.querySelectorAll('.header__playing-btn, .header__playing-btn-pause');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('header__playing-btn')) {
      button.classList.add('none');
      button.nextElementSibling.classList.remove('none');
    } else {
      button.classList.add('none');
      button.previousElementSibling.classList.remove('none');
    }
  });
});
// podcasts
function changeNumber(button) {
  var path = button.querySelector('.podcasts__item-path');
  var number = button.querySelector('.podcasts__item-action-number');
  var value = parseInt(number.innerText);

  if (button.classList.contains('is-active')) {
    value--;
    path.setAttribute('fill', '#A1A6B4');
  } else {
    value++;
    path.setAttribute('fill', '#4F28A5');
  }
  number.innerText = value;
  button.classList.toggle('is-active');
};
const playButtons = document.querySelectorAll('.podcasts__item-play-btn');

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    const playIcon = button.querySelector('.podcasts__item-btn--play');
    const pauseIcon = button.querySelector('.podcasts__item-btn--pause');
    playIcon.classList.toggle('none');
    pauseIcon.classList.toggle('none');
  });
});
// broadcasts
const mySelect = new Choices('#my-select', {
  shouldSort: false,
  value: 'option1',
});
// broadcasts-items
const brliItems = document.querySelectorAll('.broadcasts__item');
brliItems.forEach(item => {
  item.addEventListener('click', (event) => {
    const brlink = item.querySelector('.broadcasts__item-link');
    brlink.click();
  });
});
mySelect.passedElement.element.addEventListener('change', function(event) {
  const targetId = event.target.value;
  const blocks = document.querySelectorAll('.broadcasts__right-block');

  blocks.forEach(function(block) {
    if (block.id === targetId) {
      block.classList.add("br-show");
    } else {
      block.classList.remove("br-show");
    }
  });
});

// guests
document.querySelectorAll('.accordion-body-btn').forEach(function(tabsBtn){
	tabsBtn.addEventListener('click', function(e){
		const path = e.currentTarget.dataset.path;
		document.querySelectorAll('.accordion-body-btn').forEach(function(btn){
btn.classList.remove('acc--selected')});
	e.currentTarget.classList.add('acc--selected');
	document.querySelectorAll('.accordion-show').forEach(function(tabsBtn){
tabsBtn.classList.remove('accordion-show--active')});
document.querySelector(`[data-target="${path}"]`).classList.add('accordion-show--active');
	});
});
// Playlists
document.querySelectorAll('.playlists__radio-input').forEach(function(playlists){
    playlists.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.playlists__cards-content').forEach(function(playlists){
            playlists.classList.remove('playlists__cards-content--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('playlists__cards-content--active');
    });
});

document.querySelectorAll('.playlists__radio-label').forEach(function(label){
    label.addEventListener('click', function(e){
        const input = document.querySelector(`#${e.currentTarget.getAttribute('for')}`);
        input.click();
    });
});

document.querySelectorAll('.playlists__radio-form').forEach(function(div){
    div.addEventListener('keydown', function(e){
        if (e.keyCode === 13) {
            const input = div.querySelector('.playlists__radio-input');
            input.click();
        }
    });
});
const cardsItems = document.querySelectorAll('.playlists__cards-item');

cardsItems.forEach(function (item) {
  item.addEventListener('click', function () {
    toggleActiveClass(this);
  });

  item.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      toggleActiveClass(this);
    }
  });
});

function toggleActiveClass(element) {
  if (element.classList.contains('playlists__cards-item--active')) {
    element.classList.remove('playlists__cards-item--active');
  } else {
    cardsItems.forEach(function (item) {
      item.classList.remove('playlists__cards-item--active');
    });
    element.classList.add('playlists__cards-item--active');
  }
}
const radioButtons = document.querySelectorAll('.playlists__radio-btn');
const contents = document.querySelectorAll('.playlists__cards-content');

function handleRadioButtonClick(event) {
  const clickedButton = event.currentTarget;
  const clickedPath = clickedButton.dataset.path;

  if (clickedButton.classList.contains('playlists__radio-btn--active')) {
    return;
  }
  radioButtons.forEach((button) => {
    button.classList.remove('playlists__radio-btn--active');
  });
  clickedButton.classList.add('playlists__radio-btn--active');
  contents.forEach((content) => {
    content.style.display = 'none';
  });
  const contentToShow = document.querySelector(`[data-target="${clickedPath}"]`);
  contentToShow.style.display = 'block';
}
radioButtons.forEach((button) => {
  button.addEventListener('click', handleRadioButtonClick);
});
// swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  spaceBetween: 30,
  autoplay: {
    delay: 15000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
  	256: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 29,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
// about-us validation
const validation = new JustValidate('#fd-form');
validation
  .addField('#fd-name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимум 30 символов',
    },
    {
      rule: 'customRegexp',
      value: /^[а-яА-ЯёЁa-zA-Z\s]+$/,
      errorMessage: 'Ошибка'
  	},
  ])
  .addField('#fd-message', [
    {
      rule: 'required',
      errorMessage: 'Напишите что-нибудь',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 300,
      errorMessage: 'Максимум 300 символов',
    },
  ])
  .addField('#fd-email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели почту',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Минимум 3 символа',
    },
    {
    	rule: 'email',
    	errorMessage: 'Ошибка формата почты'
    },
  ])
  .addField('#fd-check', [
    {
      rule: 'required',
      errorMessage: 'Обязательно',
    },
  ]);
//
const fdcheckboxes = document.querySelectorAll('.about-us__check-input');

for (let i = 0; i < fdcheckboxes.length; i++) {
  fdcheckboxes[i].addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      this.checked = !this.checked;
    }
  });
}
// Hamburger
var hambbtn = document.querySelector('.header__hamburger-btn');
var hambmenu = document.querySelector('.header__hamburger-block');
var hambclose = document.querySelector('.header__hamburger-close');
hambbtn.addEventListener('click', function(){
	hambmenu.classList.remove('header__hamburger-block--noactive');
});
hambclose.addEventListener('click', function(){
	hambmenu.classList.add('header__hamburger-block--noactive');
});
// broadcast-mobile
var mbbtn = document.querySelector('.header__playing--mobile-btn');
var mbmenu = document.querySelector('.header__playing--mobile-content');
var mbsvg = document.querySelector('.header__playing--mobile-svg')
mbbtn.addEventListener('click', function(){
	mbmenu.classList.toggle('header__playing--mobile-content--noactive');
	mbsvg.classList.toggle('header__playing--mobile-svg--active');
});
