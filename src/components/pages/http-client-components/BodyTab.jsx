import React from "react";
import format from "xml-formatter";

export default function BodyTab() {
    const [jsonBodyValue, setJsonBodyValue] = React.useState("");
    const [xmlBodyValue, setXmlBodyValue] = React.useState("");

    const handle_json_body = (e) => {
        setJsonBodyValue(e.target.value);
    };

    const handle_xml_body = (e) => {
        setXmlBodyValue(e.target.value);
    };

    return (
        <>
            <h5 className="m-3 p-2 text-md-left">Body</h5>
            <div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active"
                            id="nav-json-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-json"
                            type="button"
                            role="tab"
                            aria-controls="nav-json"
                            aria-selected="true"
                        >
                            Json
                        </button>
                        <button
                            className="nav-link"
                            id="nav-xml-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-xml"
                            type="button"
                            role="tab"
                            aria-controls="nav-xml"
                            aria-selected="false"
                        >
                            XML
                        </button>
                        <button
                            className="nav-link"
                            id="nav-text-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-text"
                            type="button"
                            role="tab"
                            aria-controls="nav-text"
                            aria-selected="false"
                        >
                            Text
                        </button>
                        <button
                            className="nav-link"
                            id="nav-form-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-form"
                            type="button"
                            role="tab"
                            aria-controls="nav-form"
                            aria-selected="false"
                        >
                            Form
                        </button>
                        <button
                            className="nav-link"
                            id="nav-form-encode-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-form-encode"
                            type="button"
                            role="tab"
                            aria-controls="nav-form-encode"
                            aria-selected="false"
                        >
                            Form-encode
                        </button>
                        <button
                            className="nav-link"
                            id="nav-binary-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-binary"
                            type="button"
                            role="tab"
                            aria-controls="nav-binary"
                            aria-selected="false"
                        >
                            Binary
                        </button>
                        <button
                            className="nav-link"
                            id="nav-graphql-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-graphql"
                            type="button"
                            role="tab"
                            aria-controls="nav-graphql"
                            aria-selected="false"
                        >
                            Graphql
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-json"
                        role="tabpanel"
                        aria-labelledby="nav-json-tab"
                    >
                        <div className="card">
                            <div className="card-header">Json Content</div>
                            <div className="card-body">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="json-body"
                                    rows="10"
                                    value={jsonBodyValue}
                                    onChange={handle_json_body}
                                ></textarea>
                                <button
                                    className="btn btn-outline-info"
                                    onClick={() => {
                                        let output = "";
                                        try {
                                            output = JSON.stringify(
                                                JSON.parse(jsonBodyValue),
                                                null,
                                                "\t"
                                            );
                                        } catch (error) {
                                            output = error;
                                        }
                                        setJsonBodyValue(output);
                                    }}
                                >
                                    format
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-xml"
                        role="tabpanel"
                        aria-labelledby="nav-xml-tab"
                    >
                        <div className="card">
                            <div className="card-header">Xml Content</div>
                            <div className="card-body">
                                <textarea
                                    type="text"
                                    className="form-control h-100"
                                    id="xml-body"
                                    rows="10"
                                    value={xmlBodyValue}
                                    onChange={handle_xml_body}
                                ></textarea>
                                <button
                                    className="btn btn-outline-info"
                                    onClick={() => {
                                        let output = "";
                                        try {
                                            output = format(xmlBodyValue, {
                                                indentation: "  ",
                                                filter: (node) => node.type !== "Comment",
                                                collapseContent: true,
                                                lineSeparator: "\n",
                                            });
                                        } catch (error) {
                                            output = error;
                                        }
                                        setXmlBodyValue(output);
                                    }}
                                >
                                    format
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-text"
                        role="tabpanel"
                        aria-labelledby="nav-text-tab"
                    >
                        <div className="card">
                            <div className="card-header">Text Content</div>
                            <div className="card-body">
                                <textarea
                                    type="text"
                                    className="form-control h-100"
                                    id="text-body"
                                    rows="10"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-form"
                        role="tabpanel"
                        aria-labelledby="nav-form-tab"
                    >
                        <div className="card">
                            <div className="card-header">form</div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-form-encode"
                        role="tabpanel"
                        aria-labelledby="nav-form-encode-tab"
                    >
                        <div className="card">
                            <div className="card-header">form-encode</div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-binary"
                        role="tabpanel"
                        aria-labelledby="nav-binary-tab"
                    >
                        <div className="card">
                            <div className="card-header">binary</div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-graphql"
                        role="tabpanel"
                        aria-labelledby="nav-graphql-tab"
                    >
                        <div className="card">
                            <div className="card-header">graphql</div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
