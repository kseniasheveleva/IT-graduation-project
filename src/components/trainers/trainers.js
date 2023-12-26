import Swiper from 'swiper';
import { Navigation, Pagination, } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './trainers.scss';

new Swiper('.trainers__slider', {
    modules: [Navigation, Pagination,],
    spaceBetween: 20,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            spaceBetween: 40,
        }
    }
});
