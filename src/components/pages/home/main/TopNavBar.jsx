import LightSwitch from "../../../common/LightSwitch";

export default function TopNavBar() {
    return (
        <>
            <nav className="navbar navbar-theme">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Smart App
                    </a>

                    <div className="d-flex">
                        <form>
                            <a className="navbar-brand" href="/">
                                <i
                                    className="bx bx-bell m-1"
                                    style={{ fontSize: " xx-large" }}
                                ></i>
                                <i
                                    className="bx bx-user-circle m-1"
                                    style={{ fontSize: " xx-large" }}
                                ></i>
                            </a>
                        </form>
                        <LightSwitch />
                    </div>
                </div>
            </nav>
        </>
    );
}
