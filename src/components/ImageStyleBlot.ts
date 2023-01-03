import { Quill } from "react-quill";
// https://github.com/kensnyder/quill-image-resize-module/issues/43
// BEGIN allow image alignment styles
export const FormatAttributesList = [
    'alt',
    'height',
    'width',
    'style'
];

const BaseImageFormat = Quill.import('formats/image');

class ImageStyleBlot extends BaseImageFormat {
    static create(value: string) {
        const node = super.create(value);
        if (typeof value == "string") {
            node.setAttribute('src', this.sanitize(value));
            // node.setAttribute('alt', "hello world");
        }
        return node;
    }
    static formats(domNode: any) {
        // domNode.parentNode.innerText = "hello"

        return FormatAttributesList.reduce(function (formats: any, attribute) {
            if (domNode.hasAttribute(attribute)) {
                formats[attribute] = domNode.getAttribute(attribute);
            }
            return formats;
        }, {});
    }
    format(name: string, value: string) {
        if (FormatAttributesList.indexOf(name) > -1) {
            if (value) {
                this.domNode.setAttribute(name, value);
            } else {
                this.domNode.removeAttribute(name);
            }
        } else {
            super.format(name, value);
        }
    }
}

// Quill.register(ImageFormat, true);
// END allow image alignment styles
export default ImageStyleBlot