(function(){
    var ShakerSidenavTitleProto = Object.create(HTMLElement.prototype);

    ShakerSidenavTitleProto.createdCallback = function(){
        var shadow = this.createShadowRoot();
        var importDocument = document.querySelector('#shaker-sidenav-title').import;
        var template = importDocument.querySelector('#shaker-sidenav-title');
        var templateContent = document.importNode(template.content, true);
        var span = templateContent.querySelector('span');
        span.innerText = this.innerHTML;
        shadow.appendChild(templateContent);
    };

    document.registerElement('shaker-sidenav-title', {
        prototype: ShakerSidenavTitleProto
    });
})();