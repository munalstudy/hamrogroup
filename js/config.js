// config.js
const API_CONFIG = {
    BASE_URL: 'https://hamrogroup.ca',
    // BASE_URL: 'http://localhost:3000',
    ENDPOINTS: {
        PRODUCTS: '/api/products',
        CATEGORIES: '/api/categories',
        SUBCATEGORIES: '/api/subcategories',
        LOGIN: '/api/auth/login',
    },
    getFullUrl: function(endpoint) {
        return this.BASE_URL + this.ENDPOINTS[endpoint];
    },
    getHeaders: function() {
        return {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            // 'Content-Type': 'application/json'
        };
    }
};

// Prevent modifications to the config object
Object.freeze(API_CONFIG);