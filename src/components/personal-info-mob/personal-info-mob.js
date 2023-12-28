import './personal-info-mob.scss';

const closeIcon = document.querySelector('.profile-info-mob__close-icon');
const triggerMob = document.querySelector('.profile-mob-trigger');
const profileInfoMob = document.querySelector('.profile-info-mob');

const openTheWindow = (evt) => {
    evt.preventDefault();
    profileInfoMob.classList.add('profile-info-mob--active')
}

const closeTheWindow = (evt) => {
    evt.preventDefault();
    profileInfoMob.classList.remove('profile-info-mob--active')
}

triggerMob.addEventListener('click', openTheWindow);
closeIcon.addEventListener('click', closeTheWindow);