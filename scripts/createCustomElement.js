var createCustomElement = function(elementName, elementSelector, elementExtends){
    var proto = Object.create(HTMLElement.prototype);


    if(elementSelector){
        proto.attributeChangedCallback = function(attrName, oldVal, newVal){
            this.shadowRoot.querySelector(elementSelector).setAttribute(attrName,newVal);
        };
        if(elementExtends){
            proto.createdCallback = function(){
                var shadow = this.createShadowRoot();
                var importDocument = document.querySelector('#'+elementExtends).import;
                var importStyling = document.querySelector('#'+elementName).import;
                var template = importDocument.querySelector('#'+elementExtends);
                var style = importStyling.querySelector('#'+elementName);
                var templateContent = document.importNode(template.content, true);
                var styleContent = document.importNode(style.content,true);
                templateContent.appendChild(styleContent);
                var element = templateContent.querySelector(elementSelector);

                for(var key in this.attributes){
                    if(!this.attributes[key] || this.attributes[key].nodeName === undefined){
                        continue;
                    }
                    var attribute = this.attributes[key];
                    element.setAttribute(attribute.nodeName,attribute.nodeValue);
                }
                shadow.appendChild(templateContent);
            };
        }
        else{
            proto.createdCallback = function(){
                var shadow = this.createShadowRoot();
                var importDocument = document.querySelector('#'+elementName).import;
                var template = importDocument.querySelector('#'+elementName);
                var templateContent = document.importNode(template.content, true);
                var element = templateContent.querySelector(elementSelector);
                for(var key in this.attributes){
                    if(!this.attributes[key] || this.attributes[key].nodeName === undefined){
                        continue;
                    }
                    var attribute = this.attributes[key];
                    element.setAttribute(attribute.nodeName,attribute.nodeValue);
                }
                shadow.appendChild(templateContent);
            };
        }
    }
    else{
        if(elementExtends){
            proto.createdCallback = function(){
                var shadow = this.createShadowRoot();
                var importDocument = document.querySelector('#'+elementExtends).import;
                var importStyling = document.querySelector('#'+elementName).import;
                var template = importDocument.querySelector('#'+elementExtends);
                var style = importStyling.querySelector('#'+elementName);
                var templateContent = document.importNode(template.content, true);
                var styleContent = document.importNode(style.content,true);
                templateContent.appendChild(styleContent);
                shadow.appendChild(templateContent);
            };
        }
        else{
            proto.createdCallback = function(){
                var shadow = this.createShadowRoot();
                var importDocument = document.querySelector('#'+elementName).import;
                var template = importDocument.querySelector('#'+elementName);
                var templateContent = document.importNode(template.content, true);
                shadow.appendChild(templateContent);
            };
        }
    }

    return document.registerElement(elementName, {
        prototype: proto
    });
};