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

    ShakerSidenavTitleProto.attachedCallback = function(){
        var span = this.shadowRoot.querySelector('span');
        this.addEventListener('DOMSubtreeModified', domSubtreeModifiedHandler.bind(span));
    };

    ShakerSidenavTitleProto.detachedCallback = function(){
        var span = this.shadowRoot.querySelector('span');
        this.removeEventListener('DOMSubtreeModified', domSubtreeModifiedHandler.bind(span));
    };


    function domSubtreeModifiedHandler(e){
        if (e.target.length > 0) {
            this.innerText = e.target.data;
        }
    }
    document.registerElement('shaker-sidenav-title', {
        prototype: ShakerSidenavTitleProto
    });
})();