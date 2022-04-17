import React from "react";

function Header({ id, header, header_value }) {
    const [checkboxChecked, setCheckboxChecked] = React.useState(true);

    return (
        <div className="row m-1">
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    id={`header-${id}`}
                    defaultValue={header}
                    placeholder="parameter"
                    required
                />
            </div>
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    id={`header_value-${id}`}
                    defaultValue={header_value}
                    placeholder="value"
                    required
                />
            </div>
            <div className="col-md-1 d-flex align-items-center">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`enable-header-${id}`}
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

export default function HeadersTab() {

    var headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": "Bearer "
    };

    const setHeaders = (headers) => {
        let content = [];
        let i = 0;
        for (const prop in headers) {
            content.push(
                <Header key={++i} id={++i} header={prop} header_value={headers[prop]} />
            );
        }
        return content;
    };

    return (
        <>
            <h5 className="m-3 p-2 text-md-left">Http Headers</h5>
            {setHeaders(headers)}
        </>
    );
}
