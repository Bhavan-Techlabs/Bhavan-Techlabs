import React from "react";
import { getQueryParams } from "../../../functions/util";

function QueryParams({ id, parameter, parameter_value }) {
    const [checkboxChecked, setCheckboxChecked] = React.useState(true);

    const changeQueryParameter = (e) => {
        e.preventDefault();
    };

    const changeQueryParameterValue = (e) => {
        e.preventDefault();
    };

    return (
        <div className="row m-1">
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    id={`parameter-${id}`}
                    value={parameter}
                    placeholder="parameter"
                    required
                    onChange={changeQueryParameter}
                />
            </div>
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    id={`parameter_value-${id}`}
                    value={parameter_value}
                    placeholder="value"
                    required
                    onChange={changeQueryParameterValue}
                />
            </div>
            <div className="col-md-1 d-flex align-items-center">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`enable-parameter-${id}`}
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

export default function QueryTab({ requestURL }) {
    var params = getQueryParams(requestURL);

    const setQueryParams = (params) => {
        let content = [];
        let i = 0;
        for (const prop in params) {
            content.push(
                <QueryParams key={++i} id={++i} parameter={prop} parameter_value={params[prop]} />
            );
        }
        return content;
    };

    return (
        <>
            <h5 className="m-3 p-2 text-md-left">Query Parameters</h5>
            {setQueryParams(params)}
        </>
    );
}
