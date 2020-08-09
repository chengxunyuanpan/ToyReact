export const ToyReact = {
    createElement(el, attributes, ...children) {
        let element = document.createElement(el)
        for(let name in attributes) {
            element.setAttribute(name, attributes[name])
        }
        for(let child of children) {
            if(typeof child === 'string') {
                child = document.createTextNode(child)
            }
            element.appendChild(child)
        }
        return element
    }
}