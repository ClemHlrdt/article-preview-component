const shareButton = document.querySelector('.share__icon-background');
const footer = document.querySelector('.footer');
const profile = document.querySelector('.profile');
const shareItems = document.querySelector('.share__items');

const shareItemsDesktop = document.querySelector('.share__items--desktop');
const arrowDown = document.querySelector('.arrow-down');


const shareMobile = function(event){
  footer.classList.toggle('footer--dark');
  profile.classList.toggle('hide');
  shareItems.classList.toggle('hide');
  shareButton.classList.toggle('share__icon-background--dark');
};

const shareDesktop = function(event){
  shareItemsDesktop.classList.toggle('hide');
  arrowDown.classList.toggle('hide');
  shareButton.classList.toggle('share__icon-background--dark');
}


function adaptToSize(x) {
  if (x.matches) {
    shareButton.removeEventListener("click", shareMobile);
    footer.classList.remove('footer--dark');
    profile.classList.remove('hide');
    shareItems.classList.add('hide');
    shareButton.classList.remove('share__icon-background--dark');
    shareButton.addEventListener('click', shareDesktop);
  } else {
    shareButton.removeEventListener('click', shareDesktop);
    shareButton.addEventListener('click', shareMobile);
    shareButton.classList.remove('share__icon-background--dark');
    shareItemsDesktop.classList.add('hide');
    arrowDown.classList.add('hide');
  }
}

let x = window.matchMedia("(min-width: 860px)");
adaptToSize(x); 
x.addListener(adaptToSize); 
