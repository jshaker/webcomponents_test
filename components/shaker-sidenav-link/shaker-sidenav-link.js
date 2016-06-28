(function(){
    var ShakerSidenavLinkProto = Object.create(HTMLElement.prototype);

    ShakerSidenavLinkProto.createdCallback = function(){
        var shadow = this.createShadowRoot();
        var importDocument = document.querySelector('#shaker-navlink').import;
        var importStyling = document.querySelector('#shaker-sidenav-link').import;
        var template = importDocument.querySelector('#shaker-navlink');
        var style = importStyling.querySelector('#shaker-sidenav-link');
        var templateContent = document.importNode(template.content, true);
        var styleContent = document.importNode(style.content,true);
        templateContent.appendChild(styleContent);
        var href = this.getAttribute("href");
        var anchor = templateContent.querySelector('a');
        anchor.href = href;
        shadow.appendChild(templateContent);
    };

    ShakerSidenavLinkProto.attributeChangedCallback = function(attrName, oldVal, newVal){
        switch(attrName){
            case "href":    this.shadowRoot.querySelector('a').href = newVal;
                            break;
        }
    };

    document.registerElement('shaker-sidenav-link', {
        prototype: ShakerSidenavLinkProto
    });
})();