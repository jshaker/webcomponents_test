window.onload = function(){

    var shakerSidenav = document.querySelector('shaker-sidenav#second');

    shakerSidenav.setNavElements([
        {href: '#', label: 'Software'},
        {href: '#', label: 'Engineering'},
        {href: '#', label: 'With'},
        {href: '#', label: 'Web Components'}
    ]);

    shakerSidenav.setTitle('Shaker Tech');

    shakerSidenav.clearNavElements();

    shakerSidenav.addNavElement({href:'#test', label:'I am liking this'});

};
