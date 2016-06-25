(function(){
    var ShakerSidenavLinkProto = Object.create(HTMLElement.prototype);

    ShakerSidenavLinkProto.createdCallback = function(){
        var shadow = this.createShadowRoot();
        var importDocument = document.querySelector('#shaker-sidenav-link').import;
        var template = importDocument.querySelector('#shaker-sidenav-link');
        var templateContent = document.importNode(template.content, true);
        var href = this.getAttribute("href");
        var anchor = templateContent.querySelector('a');
        anchor.href = href;
        anchor.innerHTML = this.innerHTML;
        shadow.appendChild(templateContent);
    };

    document.registerElement('shaker-sidenav-link', {
        prototype: ShakerSidenavLinkProto
    });
})();