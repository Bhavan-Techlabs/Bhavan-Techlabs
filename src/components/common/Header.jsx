function HeaderNavItem({ name, id, isActive = false }) {
    return (
        <>
            <li className="nav-item" role="presentation">
                <button
                    className={isActive ? "nav-link active" : "nav-link"}
                    id={`${id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${id}-testing`}
                    type="button"
                    role="tab"
                    aria-controls={`${id}-testing`}
                    aria-selected="false"
                >
                    {name}
                </button>
            </li>
        </>
    );
}

export default function Header() {
    return (
        <>
            <ul className="nav nav-pills" id="myTab" role="tablist">
                <HeaderNavItem
                    name={"TEXT EDITOR"}
                    id={"text-editor"}
                    isActive={true}
                />
                <HeaderNavItem name={"CODE EDITOR"} id={"code-editor"} />
                <HeaderNavItem name={"UTILITY"} id={"utility"} />
                <HeaderNavItem name={"TEST DATA"} id={"test-data"} />
                <HeaderNavItem name={"TODO"} id={"todo"} />
                <HeaderNavItem name={"JSON"} id={"json"} />
                <HeaderNavItem name={"XML"} id={"xml"} />
                {/* <HeaderNavItem name={"PUBSUB"} id={"pubsub"} /> */}
                <HeaderNavItem name={"HTTP CLIENT"} id={"http-client"} />
            </ul>
        </>
    );
}
