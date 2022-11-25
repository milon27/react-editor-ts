import React, { useLayoutEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import BlotFormatter from 'quill-blot-formatter';
import IframelyBlot from '../IframelyBlot';
import TableModule from 'quill1-table';

import 'react-quill/dist/quill.snow.css';

Quill.register({ 'formats/iframely': IframelyBlot });
Quill.register('modules/table', TableModule);
Quill.register('modules/blotFormatter', BlotFormatter);

interface IVideoInput {
    onInsertClick: (url: string) => void
}

const VideoInput = ({ onInsertClick }: IVideoInput) => {
    const [url, setUrl] = useState("https://www.instagram.com/p/ClQv_lSvEIV/")
    return <div className='absolute top-[50px] left-[50%] border p-2 rounded flex gap-2 bg-white'>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button className='bg-blue-500 rounded py-1 px-2 text-white' placeholder='enter url' onClick={() => {
            onInsertClick(url)
        }}>insert</button>
    </div>
}


const MyQuill = () => {
    const [value, setValue] = useState(``);
    const reactQuillRef: any = useRef(null);

    const [showPrev, setShowPrev] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const [currentPos, setCurrentPos] = useState(0)

    useLayoutEffect(() => {
        if (document) {
            const _iframe = document.querySelector(".ql-iframe") as HTMLElement | undefined
            if (_iframe)
                _iframe.innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}.cls-2{fill-rule:evenodd;}</style></defs><g id="ic-media-disk"><rect class="cls-1" x="8" y="5" width="8" height="14" rx="0.2"/><path class="cls-2" d="M5,8H2.2a.2.2,0,0,0-.2.2v7.6a.2.2,0,0,0,.2.2H5"/><path class="cls-2" d="M19,16h2.8a.2.2,0,0,0,.2-.2V8.2a.2.2,0,0,0-.2-.2H19"/></g></svg>`

            const _table = document.querySelector(".ql-table .ql-picker-label") as HTMLElement | undefined
            if (_table) {
                _table.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#fff" fill-rule="nonzero" stroke="#464646" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 13.5h13v9h-13z"/><path d="M18.5 13.5h13v9h-13z"/><path d="M31.5 13.5h13v9h-13z"/><path d="M44.5 13.5h13v9h-13zm-39 9h13v9h-13z"/><path d="M18.5 22.5h13v9h-13z"/><path d="M31.5 22.5h13v9h-13z"/><path d="M44.5 22.5h13v9h-13zm-39 9h13v9h-13z"/><path d="M18.5 31.5h13v9h-13z"/><path d="M31.5 31.5h13v9h-13z"/><path d="M44.5 31.5h13v9h-13zm-39 9h13v9h-13z"/><path d="M18.5 40.5h13v9h-13z"/><path d="M31.5 40.5h13v9h-13z"/><path d="M44.5 40.5h13v9h-13z"/></svg>`
            }
        }
    }, [])

    let toolbarOptions = [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],        // toggled buttons
        [{ 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'color': [] }, { "background": [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        ['image', 'video', 'iframe'],
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [
            {
                'table': TableModule.tableOptions()
            },
            {
                'table': [
                    'insert',
                    'append-row-above',
                    'append-row-below',
                    'append-col-before',
                    'append-col-after',
                    'remove-col',
                    'remove-row',
                    'remove-table',
                    'split-cell',
                    'merge-selection',
                    'remove-cell',
                    'remove-selection',
                    'undo',
                    'redo'
                ]
            }
        ]
    ];

    const imageHandler = async () => {
        const quill = reactQuillRef?.current?.getEditor();
        const cursorPosition = quill.getSelection().index;
        // alert(1);
        // max-width: 100%;
        quill.insertEmbed(cursorPosition, 'image', 'https://avatars.githubusercontent.com/u/44096479?v=4');
        quill.setSelection(cursorPosition + 1);
        // hide();
    };

    const iframeHandler = async () => {
        setShowVideo(old => !old)
        const quill = reactQuillRef?.current?.getEditor();
        const cursorPosition = quill.getSelection().index;
        setCurrentPos(cursorPosition)
    }

    const onInsertClick = (url: string) => {
        const quill = reactQuillRef?.current?.getEditor();
        const cursorPosition = currentPos
        // call iframely
        const API_KEY = 'ccc4853ce40fbc9f0859aaff1e7971b6'
        let _url = `https://cdn.iframe.ly/api/iframely?url=${url}&key=${API_KEY}&iframe=1&omit_script=1`

        fetch(_url)
            .then((res) => res.json())
            .then((res) => {
                let _html = (res.html + "").replace("63", "46")
                _html = _html.replace("max", "margin: auto;max")
                _html = _html.replace("284px", "100%")
                _html = _html.replace("padding-bottom: 100%;", "padding-bottom: 45%;padding-top: 100%;")

                quill.insertEmbed(cursorPosition, 'iframely', _html);
                setShowVideo(false)
            })
    }

    const modules = React.useMemo(
        () => ({
            toolbar: {
                container: toolbarOptions,
                handlers: {
                    image: imageHandler,
                    iframe: iframeHandler
                },
            },
            blotFormatter: {

            }, table: {
                // table module options
                cellSelectionOnClick: true // true: cell selection on click, false: cell selection with CTRL key
            },
        }),
        [],
    );

    return (
        <div className='relative'>
            {
                !showPrev && <>
                    <ReactQuill
                        ref={reactQuillRef}
                        theme="snow"
                        value={value || ''}
                        modules={modules}
                        onChange={setValue}
                        placeholder={"Enter some content"}

                    />
                    {showVideo && <VideoInput onInsertClick={onInsertClick} />}
                </>
            }

            <br />
            <button onClick={() => { setShowPrev(old => !old) }}>
                {showPrev ? "Edit again" : "show preview"}
            </button>
            <br />
            {
                showPrev && <div className='max-w-[650px] mx-auto border p-5 ql-container ql-snow'>
                    <div className='ql-editor' dangerouslySetInnerHTML={{ __html: value }}></div>
                </div>
            }

        </div>
    );
};

export default MyQuill;