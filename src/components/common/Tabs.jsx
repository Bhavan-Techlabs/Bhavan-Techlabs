import Json from "../pages/Json";
import HttpClient from "../pages/HttpClient";
// import Pubsub from "../pages/Pubsub";
import Testdata from "../pages/Testdata";
import TodoApp from "../pages/Todo";
import Utility from "../pages/Utility";

export default function Tabs() {
    return (
        <div className="tab-content" id="myTabContent">
            <div
                className="tab-pane fade mt-3 show active"
                id="utility-testing"
                role="tabpanel"
                aria-labelledby="utility-tab"
            >
                <Utility />
            </div>
            <div
                className="tab-pane fade mt-3"
                id="test-data-testing"
                role="tabpanel"
                aria-labelledby="test-data-tab"
            >
                <Testdata />
            </div>
            <div
                className="tab-pane fade mt-3"
                id="todo-testing"
                role="tabpanel"
                aria-labelledby="todo-tab"
            >
                <TodoApp />
            </div>
            <div
                className="tab-pane fade mt-3"
                id="json-testing"
                role="tabpanel"
                aria-labelledby="json-tab"
            >
                <Json />
            </div>
            {/* <div
                className="tab-pane fade mt-3"
                id="pubsub-testing"
                role="tabpanel"
                aria-labelledby="pubsub-tab"
            >
                <Pubsub />
            </div> */}
            <div
                className="tab-pane fade mt-3"
                id="postman-testing"
                role="tabpanel"
                aria-labelledby="postman-tab"
            >
                <HttpClient />
            </div>
        </div>
    );
}
