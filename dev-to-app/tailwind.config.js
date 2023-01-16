const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
            '2xl': {'min': '1399.98px'},

            'xl': {'min': '1199.98px'},

            'lg': {'min': '991.98px'},

            'md': {'min': '767.98px'},

            'sm': {'max': '575.98px'},
        }
    },

    plugins: [require('@tailwindcss/forms')],
};
