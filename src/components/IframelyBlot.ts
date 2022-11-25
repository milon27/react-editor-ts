import { Quill } from "react-quill";

const BaseBlock = Quill.import('blots/block/embed');


class IframelyBlot extends BaseBlock {
    static create(html: string) {
        const node = super.create();

        // const innerHTML = html;//'<img src="https://avatars.githubusercontent.com/u/44096479?v=4">'
        const innerHTML = html;//
        node.innerHTML = innerHTML;
        // node.setAttribute('contenteditable', false);
        // store data
        //node.setAttribute('data-url', data.url);
        return node;
    }

}

IframelyBlot.blotName = 'iframely';
IframelyBlot.className = 'ql-iframely';
IframelyBlot.tagName = 'div';

export default IframelyBlot