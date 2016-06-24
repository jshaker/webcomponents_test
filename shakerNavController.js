window.onload = function(){

    var shakerSidenav = document.querySelector('shaker-sidenav#first');
    shakerSidenav.setNavElements([
        {href: '#', label: 'About'},
        {href: '#', label: 'Demos'},
        {href: '#', label: 'Contact Us'}
    ]);

    shakerSidenav.setTitle('Menu');


};
