import Json from "../pages/Json";
import HttpClient from "../pages/HttpClient";
// import Pubsub from "../pages/Pubsub";
import Testdata from "../pages/Testdata";
import TodoApp from "../pages/Todo";
import Utility from "../pages/Utility";
import TextEditor from "../pages/TextEditor";
import Xml from "../pages/Xml";
import MyCodeEditor from "../pages/MyCodeEditor";

function TabContent({ page, id, isActive = false }) {
    return (
        <>
            <div
                className={
                    isActive
                        ? "tab-pane fade mt-3 show active"
                        : "tab-pane fade mt-3"
                }
                id={`${id}-testing`}
                role="tabpanel"
                aria-labelledby={`${id}-tab`}
            >
                {page}
            </div>
        </>
    );
}

export default function Tabs() {
    return (
        <div className="tab-content" id="myTabContent">
            <TabContent
                page={<TextEditor />}
                id="text-editor"
                isActive={true}
            />
            <TabContent page={<MyCodeEditor />} id="code-editor" />
            <TabContent page={<Utility />} id="utility" />
            <TabContent page={<Testdata />} id="test-data" />
            <TabContent page={<TodoApp />} id="todo" />
            <TabContent page={<Json />} id="json" />
            <TabContent page={<Xml />} id="xml" />
            {/* <TabContent page={<Pubsub />} id="pubsub"  /> */}
            <TabContent page={<HttpClient />} id="http-client" />
        </div>
    );
}
