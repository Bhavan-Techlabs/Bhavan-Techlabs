import React from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

function uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.imgur.com/3/image");
        xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
        const data = new FormData();
        data.append("image", file);
        xhr.send(data);
        xhr.addEventListener("load", () => {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
        });
        xhr.addEventListener("error", () => {
            const error = JSON.parse(xhr.responseText);
            reject(error);
        });
    });
}

export default function TextEditor() {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );

    return (
        <div className="container mt-4">
            <div className="row">
                <div
                    style={{
                        border: "1px solid black",
                        minHeight: "30em",
                        cursor: "text",
                    }}
                >
                    <div className="editor">
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            toolbar={{
                                inline: { inDropdown: true },
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                                history: { inDropdown: true },
                                image: {
                                    uploadCallback: uploadImageCallBack,
                                    alt: { present: true, mandatory: true },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
