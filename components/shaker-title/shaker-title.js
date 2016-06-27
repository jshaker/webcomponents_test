(function(){
    var ShakerTitleProto = Object.create(HTMLElement.prototype);

    ShakerTitleProto.createdCallback = function(){
        var shadow = this.createShadowRoot();
        var importDocument = document.querySelector('#shaker-title').import;
        var template = importDocument.querySelector('#shaker-title');
        var templateContent = document.importNode(template.content, true);
        var span = templateContent.querySelector('span');
        shadow.appendChild(templateContent);
    };

    document.registerElement('shaker-title', {
        prototype: ShakerTitleProto
    });
})();