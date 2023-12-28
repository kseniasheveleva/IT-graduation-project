import './personal-info.scss';

const closeBtn = document.querySelector('.personal-info__close-btn');
const trigger = document.querySelector('.profile-trigger');
const profileInfo = document.querySelector('.personal-info');
const KEYBOARD_KEYS = {
    escape: 'Escape'
}

const openWindow = (evt) => {
    evt.preventDefault();
    profileInfo.classList.add('personal-info--active');
}



const closeWindow = (evt) => {
    if (evt.code === KEYBOARD_KEYS.escape || !evt.code) {
        evt.preventDefault();
        profileInfo.classList.remove('personal-info--active')
    }
}

trigger.addEventListener('click', openWindow);
closeBtn.addEventListener('click', closeWindow);
window.addEventListener('keydown', closeWindow);
