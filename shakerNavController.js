window.onload = function(){

    var shakerNav = document.querySelector('shaker-nav#second');

    shakerNav.setNavElements([
        {href: '#', label: 'Software'},
        {href: '#', label: 'Engineering'},
        {href: '#', label: 'With'},
        {href: '#', label: 'Web Components'}
    ]);

    shakerNav.setTitle('Shaker Tech');

};
