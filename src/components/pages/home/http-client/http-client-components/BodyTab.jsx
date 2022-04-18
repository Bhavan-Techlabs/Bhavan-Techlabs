import React from "react";
import format from "xml-formatter";
import Modal from "../../../../common/Modal";

function addNewFormFieldModalBody({ id }) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <label
                            htmlFor={`form-fields-content-${id}`}
                            className="form-label"
                        >
                            Field Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id={`form-fields-content-${id}`}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor={`form-fields-value-${id}`}
                            className="form-label"
                        >
                            Value
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id={`form-fields-value-${id}`}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function addNewFormFieldModalFooter() {
    return (
        <>
            <button type="button" className="btn btn-primary">
                Save changes
            </button>
        </>
    );
}

function Form({ id, formField, formValue }) {
    const [checkboxChecked, setCheckboxChecked] = React.useState(true);

    return (
        <div className="row m-1">
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    id={`formField-${id}`}
                    defaultValue={formField}
                    placeholder="parameter"
                    required
                />
            </div>
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    id={`formValue-${id}`}
                    defaultValue={formValue}
                    placeholder="value"
                    required
                />
            </div>
            <div className="col-md-1 d-flex align-items-center">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`enable-formField-${id}`}
                        defaultChecked={checkboxChecked}
                        onClick={() => {
                            setCheckboxChecked(!checkboxChecked);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function FormTab({ id, name, formFields }) {
    const setFormFields = (formFields) => {
        let content = [];
        let i = 0;
        for (const prop in formFields) {
            content.push(
                <Form
                    key={++i}
                    id={++i}
                    formField={prop}
                    formValue={formFields[prop]}
                />
            );
        }
        return content;
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-3 p-2 text-md-left">{name}</h5>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#formFieldsModal${id}`}
                >
                    Add New Form Field
                </button>
                <Modal
                    modalId={`formFieldsModal${id}`}
                    modalTitle={name}
                    modalBody={addNewFormFieldModalBody({ id })}
                    modalFooter={addNewFormFieldModalFooter()}
                />
            </div>
            {setFormFields(formFields)}
        </>
    );
}

export default function BodyTab() {
    const [jsonBodyValue, setJsonBodyValue] = React.useState("");
    const [xmlBodyValue, setXmlBodyValue] = React.useState("");

    const handle_json_body = (e) => {
        setJsonBodyValue(e.target.value);
    };

    const handle_xml_body = (e) => {
        setXmlBodyValue(e.target.value);
    };

    const formatJson = () => {
        let output = "";
        try {
            output = JSON.stringify(JSON.parse(jsonBodyValue), null, "\t");
        } catch (error) {
            output = error;
        }
        setJsonBodyValue(output);
    };

    const formatXML = () => {
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
                            GraphQL
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
                                    onClick={formatJson}
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
                                    onClick={formatXML}
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
                            <div className="card-header">Form</div>
                            <div className="card-body">
                                <FormTab
                                    id={"1"}
                                    name="Form Fields"
                                    formFields={{}}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-form-encode"
                        role="tabpanel"
                        aria-labelledby="nav-form-encode-tab"
                    >
                        <div className="card">
                            <div className="card-header">Form-Encode</div>
                            <div className="card-body">
                                <FormTab
                                    id={"2"}
                                    name="Form Encoded"
                                    formFields={{}}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-binary"
                        role="tabpanel"
                        aria-labelledby="nav-binary-tab"
                    >
                        <div className="card">
                            <div className="card-header">Binary</div>
                            <div className="card-body">
                                <div className="input-group mb-3">
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="binary-file"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-graphql"
                        role="tabpanel"
                        aria-labelledby="nav-graphql-tab"
                    >
                        <div className="card">
                            <div className="card-header">GraphQL</div>
                            <div className="card-body">
                                <div className="form-control">
                                    <label
                                        className="m-1"
                                        htmlFor="graphql-query"
                                    >
                                        Query
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control h-100"
                                        id="graphql-query"
                                        rows="10"
                                    ></textarea>
                                </div>
                                <div className="form-control">
                                    <label
                                        className="m-1"
                                        htmlFor="graphql-variables"
                                    >
                                        Variables
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control h-100"
                                        id="graphql-variables"
                                        rows="10"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
