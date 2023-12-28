import './side-nav.scss';

const sideNavTrigger = document.querySelector('.side-nav-trigger');
const sideNav = document.querySelector('.side-nav');
const closeBtn = document.querySelector('.side-nav__close-btn');
const links = document.querySelector('.side-nav__links');


const openSideMenu = (evt) => {
    evt.preventDefault();
    sideNav.classList.add('side-nav--active');
}

const closeSideMenu = (evt) => {
    if (!evt.code) {
        sideNav.classList.remove('side-nav--active');
    }
}


sideNavTrigger.addEventListener('click', openSideMenu);
closeBtn.addEventListener('click', closeSideMenu);
links.addEventListener('click', closeSideMenu);