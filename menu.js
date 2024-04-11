"use strict";
var _a, _b, _c, _d;
exports.__esModule = true;
var data = require("./menu_items.json");
var burgerMenu = document.querySelector('.burger-menu');
var navLinks = document.querySelector('.nav-links');
burgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('show');
});
var menuItems = data;
function displayMenuItems(menuItems) {
    var menu = document.getElementById('container');
    if (!menu)
        return;
    menu.innerHTML = '';
    menuItems.forEach(function (item) {
        var li = document.createElement('div');
        li.className = 'item-box';
        var image = '';
        if (item.image) {
            image = "<img src=\"" + item.image + "\" alt=\"" + item.name + "\">";
        }
        var allergens = item.allergens.map(function (allergen) { return "<span>" + allergen + "</span>"; }).join(' / ');
        var vegan = item.vegan ? "<span> / Vegan</span>" : '';
        var vegetarian = item.vegetarian ? "<span> / Vegetarian</span>" : '';
        li.innerHTML = "\n        <div class=\"image\">\n            " + image + "\n        </div>\n        <div class=\"description\">\n            <h2>" + item.name + "</h2>\n            <p>" + item.description + "</p>\n            <div class=\"categories\">\n              " + allergens + "\n              " + vegan + "\n              " + vegetarian + "\n            </div>\n        </div>\n        <div class=\"price\">\n            <p>$ " + item.price + "</p>\n        </div>\n      ";
        menu.appendChild(li);
    });
}
function filterMenuItems() {
    var searchQuery = document.getElementById('search').value.toLowerCase();
    var vegan = document.getElementById('vegan').checked;
    var vegetarian = document.getElementById('vegetarian').checked;
    var allergens = document.getElementById('allergens').value.toLowerCase();
    var filteredItems = menuItems.filter(function (item) {
        var nameMatch = item.name.toLowerCase().includes(searchQuery);
        var descriptionMatch = item.description.toLowerCase().includes(searchQuery);
        var veganMatch = !vegan || item.vegan;
        var vegetarianMatch = !vegetarian || item.vegetarian;
        var allergensMatch = allergens === '' || item.allergens.includes(allergens);
        return nameMatch && descriptionMatch && veganMatch && vegetarianMatch && allergensMatch;
    });
    displayMenuItems(filteredItems);
}
displayMenuItems(menuItems);
(_a = document.getElementById('search')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', filterMenuItems);
(_b = document.getElementById('vegan')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', function () {
    document.getElementById('checkbox-vegan').classList.toggle('activeCheckBox');
    filterMenuItems();
});
(_c = document.getElementById('vegetarian')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', function () {
    document.getElementById('checkbox-vegetarian').classList.toggle('activeCheckBox');
    filterMenuItems();
});
(_d = document.getElementById('allergens')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', filterMenuItems);
