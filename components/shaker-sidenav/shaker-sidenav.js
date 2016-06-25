(function(){
    var ShakerSidenavProto = Object.create(HTMLElement.prototype);

    ShakerSidenavProto.createdCallback = function(){
        var shadow = this.createShadowRoot();
        var importDocument = document.querySelector('#shaker-sidenav').import;
        var template = importDocument.querySelector('#shaker-sidenav');
        var templateContent = document.importNode(template.content, true);
        shadow.appendChild(templateContent);
    };


    document.registerElement('shaker-sidenav', {
        prototype: ShakerSidenavProto
    });
})();