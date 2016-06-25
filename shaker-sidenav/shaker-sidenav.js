(function(){
    var ShakerSidenavProto = Object.create(HTMLElement.prototype);
    ShakerSidenavProto.shadows = {};

    ShakerSidenavProto.createdCallback = function(){
        var shadow = this.createShadowRoot();
        this.shadows[this.id] = shadow;
        var importDocument = document.querySelector('#shaker-sidenav').import;
        var template = importDocument.querySelector('#shaker-sidenav');
        var templateContent = document.importNode(template.content, true);
        shadow.appendChild(templateContent);
    };

    ShakerSidenavProto.attachedCallback = function(){
        var sidenavID = this.id;
        var shakerSidenav = document.querySelector('shaker-sidenav#'+sidenavID);
        var nav = this.shadows[sidenavID].querySelector('.mdl-navigation');
        var title = this.shadows[sidenavID].querySelector('.mdl-layout-title');
        //var drawer = this.shadows[sidenavID].querySelector('mdl-layout__drawer');
        shakerSidenav.setNavElements = function(navElements){
            var navElementsString = "";
            navElements.forEach(function(element){
                navElementsString += "<a class='mdl-navigation__link' href='"+element.href+"'>"+element.label+"<\a>";
            });
            nav.innerHTML = navElementsString;
        };
        shakerSidenav.setTitle = function(title2){
            title.innerText = title2;
        };
        shakerSidenav.addNavElement = function(navElement){
            nav.innerHTML += "<a class='mdl-navigation__link' href='"+navElement.href+"'>"+navElement.label+"<\a>";
        };
        shakerSidenav.clearNavElements = function(){
            while (nav.firstChild) {
                nav.removeChild(nav.firstChild);
            }
        };


    };

    document.registerElement('shaker-sidenav', {
        prototype: ShakerSidenavProto
    });
})();

