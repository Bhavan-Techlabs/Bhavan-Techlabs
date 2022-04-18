import Json from "../json/Json";
import HttpClient from "../http-client/HttpClient";
import Testdata from "../test-data/Testdata";
import TodoApp from "../todo/Todo";
import Utility from "../utility/Utility";
import TextEditor from "../text-editor/TextEditor";
import Xml from "../xml/Xml";
import MyCodeEditor from "../code-editor/MyCodeEditor";

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
        <div className="tab-content" id="homePageTab">
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
            <TabContent page={<HttpClient />} id="http-client" />
        </div>
    );
}
