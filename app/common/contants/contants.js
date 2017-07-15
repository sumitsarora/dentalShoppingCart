(function () {
    'use strict';

    angular.module('app')

            .constant('APP_AUTHOR', 'Sumit Arora')
            .constant('APP_NAME', 'e-Dental')
            .constant('APP_VERSION', '0.0.4')
            .constant('MOST_SELLING', 'Most Selling')
            .constant('SERVICES', 'Services')
            .constant('DEALER_SHIP', 'DealerShip')
            .constant('CONTACT', 'Contact & Order')
            .constant('TESTIMONIAL', 'Testimonials')
            .constant('TODAY_DEALS', 'Today\'s Deals')
            .constant('HTTP_URL', 'http://localhost:5000/ws/lang')
            .constant('HTTP_URL_PC', 'http://localhost:5000/ws/productItem');
})();
