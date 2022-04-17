import React from "react";
export default function TestsTab() {
    return (
        <>
            <h5 className="m-3 p-2 text-md-left">Tests</h5>
            <div className="m-3 row">
                <div className="col">
                    <select
                        type="text"
                        className="form-select"
                        id="test-type"
                        required
                    >
                        <option value="body">Response Body</option>
                        <option value="code">Response Code</option>
                        <option value="c_type">Content-Type</option>
                    </select>
                </div>
                <div className="col">
                    <select
                        type="text"
                        className="form-select"
                        id="action-type"
                        required
                    >
                        <option value="===">Equal to (===)</option>
                        <option value="!==">Not equal to (!==) </option>
                        <option value="<">{"Less than <"}</option>
                        <option value=">">{"Greater than >"}</option>
                        <option value=">=">{"Greater than or Equal to >="}</option>
                        <option value="<=">{"Less than or Equal to <="}</option>
                    </select>
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        id="value"
                        placeholder="Enter Value"
                        required
                    />
                </div>
            </div>
        </>
    );
}