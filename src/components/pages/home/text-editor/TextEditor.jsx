import React from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { uploadImageCallBack } from "./TextEditorMethods";

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
