(function(){
    var ShakerHeaderProto = Object.create(HTMLElement.prototype);

    ShakerHeaderProto.createdCallback = function(){
        var shadow = this.createShadowRoot();
        var importDocument = document.querySelector('#shaker-header').import;
        var template = importDocument.querySelector('#shaker-header');
        var templateContent = document.importNode(template.content, true);
        shadow.appendChild(templateContent);
    };


    document.registerElement('shaker-header', {
        prototype: ShakerHeaderProto
    });
})();