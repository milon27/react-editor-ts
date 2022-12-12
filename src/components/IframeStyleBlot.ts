import { Quill } from "react-quill";

// BEGIN allow image alignment styles
export const FormatAttributesList = [
    'alt',
    'height',
    'width',
    'style'
];

const BaseVideoFormat = Quill.import('formats/video');

class IframeStyleBlot extends BaseVideoFormat {
    static formats(domNode: any) {
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
export default IframeStyleBlot