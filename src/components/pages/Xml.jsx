import React from "react";
import format from "xml-formatter";
import { copy_to_clipboard } from "../../functions/util";

export default function Xml() {
    const [inputXmlValue, setInputXmlValue] = React.useState("");
    const [outputXmlValue, setOutputXmlValue] = React.useState("");

    const format_xml = () => {
        let output = "";
        try {
            output = format(inputXmlValue, {
                indentation: "  ",
                filter: (node) => node.type !== "Comment",
                collapseContent: true,
                lineSeparator: "\n",
            });
        } catch (error) {
            output = error;
        }
        setOutputXmlValue(output);
    };

    const copy_xml = () => {
        copy_to_clipboard("result-xml-txt");
    };

    const clear_xml = () => {
        setInputXmlValue("");
        setOutputXmlValue("");
    };

    const handleChange = (e) => {
        e.preventDefault();
        setInputXmlValue(e.target.value);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="mb-3 row">
                    <textarea
                        className="form-control col m-1"
                        id="input-xml-txt"
                        style={{ height: "30em" }}
                        placeholder="Enter your XML here..."
                        onChange={handleChange}
                        value={inputXmlValue}
                    ></textarea>
                    <textarea
                        className="form-control col m-1"
                        id="result-xml-txt"
                        style={{ height: "30em" }}
                        placeholder="Result..."
                        readOnly
                        value={outputXmlValue}
                    ></textarea>
                </div>
                <div className="mb-3 row">
                    <button
                        type="button"
                        id="stringify-json-btn"
                        className="btn btn-primary col m-1"
                        onClick={format_xml}
                    >
                        Format XML
                    </button>
                    <button
                        type="button"
                        id="copy-json-btn"
                        className="btn btn-success col m-1"
                        onClick={copy_xml}
                    >
                        Copy to Clipboard
                    </button>
                    <button
                        type="button"
                        id="clear-json-btn"
                        className="btn btn-danger col m-1"
                        onClick={clear_xml}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </>
    );
}
