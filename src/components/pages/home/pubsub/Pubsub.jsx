export default function Pubsub() {
    return (
        <>
            <div className="container mt-4">
                <form className="row g-3 mt-2">
                    <div className="mb-3 row">
                        <label htmlFor="id-value" className="col-sm-2 col-form-label">
                            Id:{" "}
                        </label>
                        <div className="col-md">
                            <input
                                type="number"
                                className="form-control"
                                id="id-value"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="transactionid-value" className="col-sm-2 col-form-label">
                            Transaction Id:
                        </label>
                        <div className="col-md">
                            <input
                                type="text"
                                className="form-control"
                                id="transactionid-value"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="timestamp-value" className="col-sm-2 col-form-label">
                            Timestamp:
                        </label>
                        <div className="col-md">
                            <input
                                type="text"
                                className="form-control"
                                id="timestamp-value"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="source-value" className="col-sm-2 col-form-label">
                            Source:
                        </label>
                        <div className="col-md">
                            <input
                                type="text"
                                className="form-control"
                                id="source-value"
                                value="CUSTOMER_API"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="message_type"
                                id="email-noti"
                                value="email"
                                defaultChecked
                            />
                            <label className="form-check-label" htmlFor="email-noti">
                                Email Notification
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="message_type"
                                id="push-noti"
                                value="push"
                            />
                            <label className="form-check-label" htmlFor="push-noti">
                                Push Notification
                            </label>
                        </div>
                    </div>

                    <div id="email-notification-tab">
                        <div className="mb-3 row">
                            <label htmlFor="subject-value" className="col-sm-2 col-form-label">
                                Subject:
                            </label>
                            <div className="col-md">
                                <input type="text" className="form-control" id="subject-value" />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="email-from-value" className="col-sm-2 col-form-label">
                                From:
                            </label>
                            <div className="col-md">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email-from-value"
                                    value="support@w3gig.com"
                                />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="email-to-value" className="col-sm-2 col-form-label">
                                To:
                            </label>
                            <div className="col-md">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email-to-value"
                                    value="w3gig.qa+engineer@gmail.com"
                                />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="to_value" className="col-sm-2 col-form-label">
                                Email Type:
                            </label>
                            <div className="col-md">
                                <select className="form-select" id="email-type" required>
                                    <option selected disabled value="">
                                        Choose...
                                    </option>
                                    <option value="WELCOME">WELCOME</option>
                                    <option value="PROFILE_UPDATE">PROFILE_UPDATE</option>
                                    <option value="PROFILE_COMPLETE">PROFILE_COMPLETE</option>
                                    <option value="VALIDATION_START">VALIDATION_START</option>
                                    <option value="ADD_TESTS">ADD_TESTS</option>
                                    <option value="TEST_SUBMISSION">TEST_SUBMISSION</option>
                                    <option value="TEST_MARKS">TEST_MARKS</option>
                                    <option value="INTERVIEW_RESULT">INTERVIEW_RESULT</option>
                                    <option value="VALIDATION_APPROVE">VALIDATION_APPROVE</option>
                                    <option value="JOB_PROPOSAL">JOB_PROPOSAL</option>
                                    <option value="JOB_OFFER">JOB_OFFER</option>
                                    <option value="JOB_REJECTED">JOB_REJECTED</option>
                                    <option value="OFFER_ACCEPT">OFFER_ACCEPT</option>
                                    <option value="OFFER_REJECT">OFFER_REJECT</option>
                                    <option value="OFFER_HIRED">OFFER_HIRED</option>
                                    <option value="PROJECT_START">PROJECT_START</option>
                                    <option value="CALENDAR">CALENDAR</option>
                                    <option value="AVAILABILITY">AVAILABILITY</option>
                                    <option value="INTERVIEW">INTERVIEW</option>
                                    <option value="REFERRAL">REFERRAL</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div id="push-notification-tab" className="d-none">
                        <div className="mb-3 row">
                            <label htmlFor="push-message-value" className="col-sm-2 col-form-label">
                                Message:
                            </label>
                            <div className="col-md">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="push-message-value"
                                />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="push-title-value" className="col-sm-2 col-form-label">
                                Title:
                            </label>
                            <div className="col-md">
                                <input type="text" className="form-control" id="push-title-value" />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="push-userid-value" className="col-sm-2 col-form-label">
                                User Id:
                            </label>
                            <div className="col-md">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="push-userid-value"
                                />
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="push-type-value" className="col-sm-2 col-form-label">
                                Message Type:
                            </label>
                            <div className="col-md">
                                <select className="form-select" id="push-type-value" required>
                                    <option selected disabled value="">
                                        Choose...
                                    </option>
                                    <option value="INFO">INFO</option>
                                    <option value="SUCCESS">SUCCESS</option>
                                    <option value="WARNING">WARNING</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <textarea
                            className="form-control"
                            id="pre-json"
                            style={{height: "25em"}}
                            placeholder="Message.."
                            required
                        ></textarea>
                    </div>

                    <button type="button" id="gen-msg-btn" className="btn btn-primary mb-3">
                        Generate Message
                    </button>
                    <button
                        type="button"
                        id="copy-msg-btn"
                        className="btn btn-success col m-1"
                    >
                        Copy to Clipboard
                    </button>
                    <button
                        type="button"
                        id="clear-msg-btn"
                        className="btn btn-danger col m-1"
                    >
                        Clear
                    </button>

                    <textarea
                        className="form-control"
                        id="final-output-json"
                        style={{height: "30em"}}
                        placeholder="Message.."
                        readOnly
                    ></textarea>
                </form>
            </div>
        </>
    );
}
