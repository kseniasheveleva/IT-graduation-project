import Swiper from 'swiper';
import { Navigation, Pagination, } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './trainers.scss';

new Swiper('.trainers__slider', {
    modules: [Navigation, Pagination,],
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //     1200: {
    //         slidesPerView: 3,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //     }

    // }
});
