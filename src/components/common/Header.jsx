export default function Header() {
    return (
        <>
            <ul className="nav nav-pills" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active"
                        id="utility-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#utility-testing"
                        type="button"
                        role="tab"
                        aria-controls="utility-testing"
                        aria-selected="false"
                    >
                        UTILITY
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="test-data-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#test-data-testing"
                        type="button"
                        role="tab"
                        aria-controls="test-data-testing"
                        aria-selected="false"
                    >
                        TEST DATA
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="todo-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#todo-testing"
                        type="button"
                        role="tab"
                        aria-controls="todo-testing"
                        aria-selected="false"
                    >
                        TODO
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="json-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#json-testing"
                        type="button"
                        role="tab"
                        aria-controls="json-testing"
                        aria-selected="false"
                    >
                        JSON
                    </button>
                </li>
                {/* <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="pubsub-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#pubsub-testing"
                        type="button"
                        role="tab"
                        aria-controls="pubsub-testing"
                        aria-selected="true"
                    >
                        PUBSUB
                    </button>
                </li> */}
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link"
                        id="postman-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#postman-testing"
                        type="button"
                        role="tab"
                        aria-controls="postman-testing"
                        aria-selected="false"
                    >
                        HTTP CLIENT
                    </button>
                </li>
            </ul>
        </>
    );
}