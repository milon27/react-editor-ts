import { Quill } from "react-quill";
import IframelyBlot from "./IframelyBlot";
// https://github.com/kensnyder/quill-image-resize-module/issues/43
// BEGIN allow image alignment styles
export const FormatAttributesList = [
    'alt',
    'height',
    'width',
    'style',
    'class'
];

var BaseTextFormat = Quill.import('blots/block');
// not used any where
class TextStyleBlot extends BaseTextFormat {
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
TextStyleBlot.tagName = 'p';
// TextStyleBlot.className = 'ql-align-center';
// Quill.register(ImageFormat, true);
// END allow image alignment styles
export default TextStyleBlot