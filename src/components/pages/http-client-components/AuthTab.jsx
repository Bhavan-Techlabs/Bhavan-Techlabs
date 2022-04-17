import React from "react";
export default function AuthTab() {
    return (
        <>
            <h5 className="m-3 p-2 text-md-left">Auth</h5>
            <div>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            className="nav-link active"
                            id="nav-none-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-none"
                            type="button"
                            role="tab"
                            aria-controls="nav-none"
                            aria-selected="true"
                        >
                            None
                        </button>
                        <button
                            className="nav-link"
                            id="nav-basic-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-basic"
                            type="button"
                            role="tab"
                            aria-controls="nav-basic"
                            aria-selected="false"
                        >
                            Basic
                        </button>
                        <button
                            className="nav-link"
                            id="nav-bearer-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-bearer"
                            type="button"
                            role="tab"
                            aria-controls="nav-bearer"
                            aria-selected="false"
                        >
                            Bearer
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-none"
                        role="tabpanel"
                        aria-labelledby="nav-none-tab"
                    >
                        <h6 className="m-3 p-2 text-md-left">No Authentication Selected</h6>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-basic"
                        role="tabpanel"
                        aria-labelledby="nav-basic-tab"
                    >
                        <div className="card-header">Basic Authentication</div>
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="nav-bearer"
                        role="tabpanel"
                        aria-labelledby="nav-bearer-tab"
                    >
                        <div className="card">
                            <div className="card-header">Bearer Token</div>
                            <div className="card-body">
                                <div className="m-2 row">
                                    <div className="col-auto d-flex align-items-center">
                                        <label className="form-label" htmlFor="token-prefix">
                                            Token Prefix
                                        </label>
                                    </div>
                                    <div className="col-auto">
                                        <input
                                            defaultValue="Bearer "
                                            type="text"
                                            className="form-control"
                                            id="token-prefix"
                                        />
                                    </div>
                                </div>
                                <textarea
                                    type="text"
                                    className="form-control h-100"
                                    id="auth-token"
                                    rows="10"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
