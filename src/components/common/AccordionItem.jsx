export default function AccordionItem({
    accordion_header_id,
    accordion_collapse_id,
    accordion_header_title,
    accordion_body,
    show = false,
}) {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={accordion_header_id}>
                    <button
                        className={
                            "accordion-button " + (show ? "" : "collapsed")
                        }
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${accordion_collapse_id}`}
                        aria-expanded="true"
                        aria-controls={accordion_collapse_id}
                    >
                        <h5>{accordion_header_title}</h5>
                    </button>
                </h2>
                <div
                    id={accordion_collapse_id}
                    className={
                        "accordion-collapse collapse " + (show ? "show" : "")
                    }
                    aria-labelledby={accordion_header_id}
                >
                    <div className="accordion-body">{accordion_body}</div>
                </div>
            </div>
        </>
    );
}
