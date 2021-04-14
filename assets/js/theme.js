
const btnBurger = document.querySelector('.btn-burger');
const btnReturn = document.querySelector('.btn-close');
//const menu = document.querySelector('#header-menu');
const headerNav = document.querySelector('header');
const playIcon = document.querySelector('.header-image-play');
const changeLang = document.querySelector('.change-language');
const menuLink = document.getElementsByClassName('link');


let headerMenu = document.querySelector('.header-nav-bar');
let mobLang = document.querySelector('.lang-for-mob');
let headerImage = document.querySelector('.header-image');
let checkBox = document.querySelector('#checkbox');
let submitButton = document.querySelector('.contact-form-submit-button');


function clickSubmit() {
  if (checkBox.checked == true) {
    submitButton.classList.remove('disabled');
  } else {
    submitButton.classList.add('disabled');
  }
}


document.querySelector('.header-image-play').onclick = function() {
  this.style.display = 'none';
  headerImage.style.display = 'none';
  document.querySelector('.video').style.display = 'block';
  document.querySelector('iframe.facebook-video')
    .src="https://www.facebook.com/plugins/video.php?height=722&href=https%3A%2F%2Fwww.facebook.com%2FsparkleheartLV%2Fvideos%2F2368016840121489%2F&show_text=false&width=1366";
};



const openMenu = () => {
//  menu.classList.add('open');
  btnBurger.classList.remove('btn-active');
  btnBurger.classList.add('btn-hide');
  btnReturn.classList.remove('btn-hide');
  //menu.classList.remove('header-menu-open');
  playIcon.classList.add('btn-hide');
//  document.querySelectorAll('.language-hidden').forEach(n => n.classList.remove('hidden'));
  headerNav.classList.add('open-header-menu');

  headerMenu.style.display='flex';
  mobLang.style.display='flex';
  document.querySelector('.header-backgr').classList.add('header-container');
  document.querySelector('.gallery-top-border').style.visibility='hidden';




}

const closeMenu = () => {
//  menu.classList.remove('open');
  btnBurger.classList.add('btn-active');
  btnBurger.classList.remove('btn-hide');
  btnReturn.classList.add('btn-hide');
  //menu.classList.add('header-menu-open');
  playIcon.classList.remove('btn-hide');
//  document.querySelectorAll('.language-hidden').forEach(n => n.classList.add('hidden'));
  headerNav.classList.remove('open-header-menu');

  headerMenu.style.display='none';
  mobLang.style.display='none';
  document.querySelector('.header-backgr').classList.remove('header-container');
  document.querySelector('.gallery-top-border').style.visibility='visible';

}

btnBurger.addEventListener('click', openMenu);
btnReturn.addEventListener('click', closeMenu);



function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('back-to-top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back-to-top-show');
  }
}


function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 10);
  }
}

let goTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);



function closeAll(e) {
  closeMenu();
}
for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', closeAll);

}
