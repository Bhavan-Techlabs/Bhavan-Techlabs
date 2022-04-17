import React from "react";
import QueryTab from "./http-client-components/QueryTab";
import HeadersTab from "./http-client-components/HeadersTab";
import TestsTab from "./http-client-components/TestsTab";
import BodyTab from "./http-client-components/BodyTab";
import AuthTab from "./http-client-components/AuthTab";

function PostmanTabs({ requestURL }) {
    return (
        <>
            <ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="pills-query-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-query"
                        type="button"
                        role="tab"
                        aria-controls="pills-query"
                        aria-selected="true"
                    >
                        Query
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="pills-headers-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-headers"
                        type="button"
                        role="tab"
                        aria-controls="pills-headers"
                        aria-selected="false"
                    >
                        Headers
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="pills-auth-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-auth"
                        type="button"
                        role="tab"
                        aria-controls="pills-auth"
                        aria-selected="false"
                    >
                        Auth
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="pills-body-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-body"
                        type="button"
                        role="tab"
                        aria-controls="pills-body"
                        aria-selected="false"
                    >
                        Body
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="pills-tests-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-tests"
                        type="button"
                        role="tab"
                        aria-controls="pills-tests"
                        aria-selected="false"
                    >
                        Tests
                    </button>
                </li>
            </ul>
            <div className="tab-content card" id="pills-tabContent">
                <div
                    className="tab-pane fade show active card-body"
                    id="pills-query"
                    role="tabpanel"
                    aria-labelledby="pills-query-tab"
                >
                    <QueryTab requestURL={requestURL} />
                </div>
                <div
                    className="tab-pane fade card-body"
                    id="pills-headers"
                    role="tabpanel"
                    aria-labelledby="pills-headers-tab"
                >
                    <HeadersTab />
                </div>
                <div
                    className="tab-pane fade card-body"
                    id="pills-auth"
                    role="tabpanel"
                    aria-labelledby="pills-auth-tab"
                >
                    <AuthTab />
                </div>
                <div
                    className="tab-pane fade card-body"
                    id="pills-body"
                    role="tabpanel"
                    aria-labelledby="pills-body-tab"
                >
                    <BodyTab />
                </div>
                <div
                    className="tab-pane fade card-body"
                    id="pills-tests"
                    role="tabpanel"
                    aria-labelledby="pills-tests-tab"
                >
                    <TestsTab />
                </div>
            </div>
        </>
    );
}

export default function HttpClient() {
    const [requestURL, setRequestURL] = React.useState("");

    const changeRequestURL = (e) => {
        e.preventDefault();
        setRequestURL(e.target.value);
    };

    const sendRequest = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container mt-4">
                <div className="m-3 row">
                    <div className="col-md-auto">
                        <select
                            type="text"
                            className="form-select"
                            id="request-type"
                            required
                        >
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="request-url"
                            placeholder="Enter URL"
                            value={requestURL}
                            onChange={changeRequestURL}
                            required
                        />
                    </div>
                    <div className="col-md-auto">
                        <button
                            className="btn btn-outline-success"
                            id="todo-add-btn"
                            onClick={sendRequest}
                        >
                            SEND <i className="bx bx-paper-plane"></i>
                        </button>
                    </div>
                </div>
                <div className="m-3 row">
                    <PostmanTabs requestURL={requestURL} />
                </div>
                <div className="m-3 row">
                    <textarea
                        className="form-control col m-1"
                        id="response-txt"
                        style={{ height: "30em" }}
                        placeholder="RESPONSE"
                    ></textarea>
                </div>
            </div>
        </>
    );
}
