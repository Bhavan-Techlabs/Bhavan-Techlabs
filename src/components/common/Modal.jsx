export default function Modal({ modalId, modalTitle, modalBody, modalFooter }) {
    return (
        <>
            <div
                className="modal fade"
                id={modalId}
                tabIndex="-1"
                aria-labelledby={`${modalId}-label`}
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${modalId}-label`}>
                                {modalTitle}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">{modalBody}</div>
                        <div className="modal-footer">{modalFooter}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
