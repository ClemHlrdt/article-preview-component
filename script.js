const shareButton = document.querySelector('.share__icon-background');
const footer = document.querySelector('.footer');
const profile = document.querySelector('.profile');
const shareItems = document.querySelector('.share__items');


const shareMobile = function(event){
  footer.classList.toggle('footer--dark');
  profile.classList.toggle('hide');
  shareItems.classList.toggle('hide');
  shareButton.classList.toggle('share__icon-background--dark');
};

const shareDesktop = function(event){
  console.log(event);
}


function adaptToSize(x) {
  if (x.matches) {
    shareButton.removeEventListener("click", shareMobile);
    footer.classList.remove('footer--dark');
    profile.classList.remove('hide');
    shareItems.classList.add('hide');
    shareButton.classList.remove('share__icon-background--dark')
  } else {
    shareButton.addEventListener('click', shareMobile);
  }
}

let x = window.matchMedia("(min-width: 600px)");
adaptToSize(x); 
x.addListener(adaptToSize); 
