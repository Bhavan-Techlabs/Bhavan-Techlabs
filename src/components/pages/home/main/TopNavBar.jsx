export default function TopNavBar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Smart App
                    </a>
                    <form className="d-flex">
                        <a className="navbar-brand" href="/">
                            <i className="bx bx-bell m-1" style={{ "fontSize": " xx-large" }}></i>
                            <i
                                className="bx bx-user-circle m-1"
                                style={{ "fontSize": " xx-large" }}
                            ></i>
                        </a>
                    </form>
                </div>
            </nav>
        </>
    );
}
