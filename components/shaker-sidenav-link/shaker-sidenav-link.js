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
        anchor.innerText = this.innerHTML;
        shadow.appendChild(templateContent);
    };

    ShakerSidenavLinkProto.attachedCallback = function(){
        var anchor = this.shadowRoot.querySelector('a');
        this.addEventListener('DOMSubtreeModified', domSubtreeModifiedHandler.bind(anchor));
    };

    ShakerSidenavLinkProto.detachedCallback = function(){
        var anchor = this.shadowRoot.querySelector('a');
        this.removeEventListener('DOMSubtreeModified', domSubtreeModifiedHandler.bind(anchor));
    };

    ShakerSidenavLinkProto.attributeChangedCallback = function(attrName, oldVal, newVal){
        switch(attrName){
            case "href":    this.querySelector('a').href = newVal;
                            break;
        }
    };

    function domSubtreeModifiedHandler(e){
        if (e.target.length > 0) {
            this.innerText = e.target.data;
        }
    }


    document.registerElement('shaker-sidenav-link', {
        prototype: ShakerSidenavLinkProto
    });
})();