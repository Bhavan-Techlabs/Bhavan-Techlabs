import React from "react";
import { get_ip, timestamp } from "../../functions/util";
import CopyToClipboard from "../common/CopyToClipboard";

function Timestamp() {
    const [ts, setTs] = React.useState(0);

    const gen_util_timestamp = (e) => {
        e.preventDefault();
        let currentTimeStamp = timestamp();
        setTs(currentTimeStamp);
    };

    return (
        <>
            <div className="col-md-2">
                <label htmlFor="util-timestamp" className="col-form-label">
                    Timestamp:
                </label>
            </div>
            <div className="col-md">
                <input
                    type="text"
                    className="form-control"
                    id="util-timestamp"
                    value={ts}
                    required
                    readOnly
                />
            </div>
            <div className="col-md-2">
                <input
                    type="button"
                    className="btn btn-primary w-100"
                    id="gen-util-timestamp-btn"
                    value="Get Timestamp"
                    onClick={gen_util_timestamp}
                />
            </div>
            <div className="col-md-2">
                <CopyToClipboard selector={'#util-timestamp'} />
            </div>
        </>
    );
}
function ConvertTimestamp() {
    const [ts, setTs] = React.useState(0);
    const [convertedTs, setConvertedTs] = React.useState("");

    const conv_util_timestamp = (e) => {
        e.preventDefault();
        let date = new Date(Number(ts));
        setConvertedTs(date);
    };
    const handleChange = (e) => {
        e.preventDefault();
        setTs(e.target.value);
    };

    return (
        <>
            <div className="col-md-2">
                <label htmlFor="conv-util-timestamp" className="col-form-label">
                    Convert Timestamp:
                </label>
            </div>
            <div className="col-md d-flex">
                <div className="col-md">
                    <input
                        type="text"
                        className="form-control"
                        id="conv-util-timestamp"
                        required
                        onChange={handleChange}
                        value={ts}
                    />
                </div>
                <div className="col-md">
                    <input
                        type="text"
                        className="form-control"
                        id="conv-util-timestamp-result"
                        readOnly
                        value={convertedTs}
                    />
                </div>
            </div>
            <div className="col-md-2">
                <input
                    type="button"
                    className="btn btn-primary w-100"
                    id="conv-util-timestamp-btn"
                    value="Convert"
                    onClick={conv_util_timestamp}
                />
            </div>
            <div className="col-md-2">
                <CopyToClipboard selector={"#conv-util-timestamp-result"} />
            </div>
        </>
    );
}
function IP() {
    const [ip, setIp] = React.useState("");

    const gen_util_ip = async () => {
        let publicIp = await get_ip();
        setIp(publicIp);
        navigator.clipboard.writeText(publicIp);
    };

    return (
        <>
            <div className="col-md-2">
                <label htmlFor="util-ip" className="col-form-label">
                    Public IP:
                </label>
            </div>
            <div className="col-md">
                <input
                    type="text"
                    className="form-control"
                    id="util-ip"
                    required
                    readOnly
                    value={ip}
                />
            </div>
            <div className="col-md-2">
                <input
                    type="button"
                    className="btn btn-primary w-100"
                    id="gen-util-ip-btn"
                    value="GET IP"
                    onClick={gen_util_ip}
                />
            </div>
            <div className="col-md-2">
                <CopyToClipboard selector={"#util-ip"} />
            </div>
        </>
    );
}

export default function Utility() {
    return (
        <>
            <div className="container mt-4">
                <div className="m-3 row">
                    <Timestamp />
                </div>
                <div className="m-3 row">
                    <ConvertTimestamp />
                </div>
                <div className="m-3 row">
                    <IP />
                </div>
            </div>
        </>
    );
}
