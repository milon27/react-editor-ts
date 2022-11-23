import { useState } from 'react'
import { CKEditor, } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class MyUploadAdapter {
    loader: any;

    constructor(loader: any) {
        this.loader = loader;
    }
    async upload() {
        console.log("FILE: -------------", await this.loader.file);
        return {
            default: 'https://ckeditor.com/docs/assets/2.1.7/img/book.svg'
        }
    }
    abort() {

    }
}

export default function Ck() {
    const [data, setData] = useState("")

    function DNXCustomUploadAdapterPlugin(editor: ClassicEditor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return new MyUploadAdapter(loader)
        };
    };

    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    extraPlugins: [DNXCustomUploadAdapterPlugin],
                }}
                data={data}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    // console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setData(data)
                    // console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    // console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    // console.log('Focus.', editor);
                }}
            />
            <br />
            <p>
                {
                    data
                }
            </p>
        </div>
    )
}
