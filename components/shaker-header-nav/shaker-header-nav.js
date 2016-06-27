(function(){
    var ShakerHeadernavProto = Object.create(HTMLElement.prototype);

    ShakerHeadernavProto.createdCallback = function(){
        var shadow = this.createShadowRoot();
        var importDocument = document.querySelector('#shaker-header-nav').import;
        var template = importDocument.querySelector('#shaker-header-nav');
        var templateContent = document.importNode(template.content, true);
        shadow.appendChild(templateContent);
    };


    document.registerElement('shaker-header-nav', {
        prototype: ShakerHeadernavProto
    });
})();