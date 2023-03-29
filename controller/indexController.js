const productos = require('../productos/product')

const controller = {
    index: function (req, res) {
        res.render('index', {lsProd: productos})
    },
    login: function (req, res) {
        res.render('login')
    },
    register: function (req, res) {
        res.render('register')
    },
    searchResults: function (req, res) {
        res.render('search-results')
    },

}

module.exports = controller;