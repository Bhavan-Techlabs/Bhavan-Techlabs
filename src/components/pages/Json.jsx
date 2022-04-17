import React from "react";
import { copy_to_clipboard } from "../../functions/util";

export default function Json() {
    const [inputJsonValue, setInputJsonValue] = React.useState("");
    const [outputJsonValue, setOutputJsonValue] = React.useState("");

    const stringify_json = () => {
        let output = "";
        try {
            output = JSON.stringify(inputJsonValue, null, "\t");
        } catch (error) {
            output = error;
        }
        setOutputJsonValue(output);
    };

    const parse_json = () => {
        let output = "";
        try {
            let parsed_text = JSON.parse(inputJsonValue);
            output = JSON.stringify(JSON.parse(parsed_text), null, "\t");
        } catch (error) {
            output = error;
        }
        setOutputJsonValue(output);
    };

    const beautify_json = () => {
        let output = "";
        try {
            output = JSON.stringify(JSON.parse(inputJsonValue), null, "\t");
        } catch (error) {
            output = error;
        }
        setOutputJsonValue(output);
    };

    const normalise_json = () => {
        let output = "";
        try {
            output = JSON.stringify(JSON.parse(inputJsonValue));
        } catch (error) {
            output = error;
        }
        setOutputJsonValue(output);
    };

    const copy_json = () => {
        copy_to_clipboard("result-json-txt");
    };

    const clear_json = () => {
        setInputJsonValue("");
        outputJsonValue("");
    };

    const handleChange = (e) => {
        e.preventDefault();
        setInputJsonValue(e.target.value);
    };

    return (
        <>
            <div className="container mt-4">
                <div className="mb-3 row">
                    <textarea
                        className="form-control col m-1"
                        id="input-json-txt"
                        style={{ height: "30em" }}
                        placeholder="Enter your JSON here..."
                        onChange={handleChange}
                        value={inputJsonValue}
                    ></textarea>
                    <textarea
                        className="form-control col m-1"
                        id="result-json-txt"
                        style={{ height: "30em" }}
                        placeholder="Result..."
                        readOnly
                        value={outputJsonValue}
                    ></textarea>
                </div>
                <div className="mb-3 row">
                    <button
                        type="button"
                        id="stringify-json-btn"
                        className="btn btn-primary col m-1"
                        onClick={stringify_json}
                    >
                        Stringify JSON
                    </button>
                    <button
                        type="button"
                        id="parse-json-btn"
                        className="btn btn-primary col m-1"
                        onClick={parse_json}
                    >
                        Parse JSON
                    </button>
                    <button
                        type="button"
                        id="beautify-json-btn"
                        className="btn btn-primary col m-1"
                        onClick={beautify_json}
                    >
                        Beautify JSON
                    </button>
                    <button
                        type="button"
                        id="normalise-json-btn"
                        className="btn btn-primary col m-1"
                        onClick={normalise_json}
                    >
                        Normalise JSON
                    </button>
                    <button
                        type="button"
                        id="copy-json-btn"
                        className="btn btn-success col m-1"
                        onClick={copy_json}
                    >
                        Copy to Clipboard
                    </button>
                    <button
                        type="button"
                        id="clear-json-btn"
                        className="btn btn-danger col m-1"
                        onClick={clear_json}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </>
    );
}
