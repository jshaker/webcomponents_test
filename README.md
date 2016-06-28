This is a first attempt at using web components.

I'm currently wrapping MDL components into custom components by ripping out the CSS and wrapping it into a component's shadow root.
There are a few possible benefits to doing such manipulations:

-CSS Isolation: it is immutable from the Light DOM unless done intentionally.

-Separation of concerns: you can now design a component without having to worry about the data. Once again, it is very isolated.

-Lightweight Markup: By having re-usable templates, the weight of the HTML transfers drops signficantly as the markup is simplified.

An immediate disappointment that I have noticed with this implementation is when creating custom components that require use of attributes. Because I use the content tag to select what's displayed in the Light DOM, the attributes are not transfered to the child.

This means that when creating a new component, you need to make sure to bind these attributes on 1) Creation callback, 2) Attribute changed callback. I wish there was a neater solution but for now that is it.