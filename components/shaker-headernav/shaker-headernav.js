(function(){
    var ShakerHeadernavProto = Object.create(HTMLElement.prototype);

    ShakerHeadernavProto.createdCallback = function(){
        var shadow = this.createShadowRoot();
        var importDocument = document.querySelector('#shaker-headernav').import;
        var template = importDocument.querySelector('#shaker-headernav');
        var templateContent = document.importNode(template.content, true);
        shadow.appendChild(templateContent);
    };


    document.registerElement('shaker-headernav', {
        prototype: ShakerHeadernavProto
    });
})();