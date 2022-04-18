export default function TopNavBar() {
    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        Smart App
                    </a>
                    <form class="d-flex">
                        <a class="navbar-brand" href="/">
                            <i class="bx bx-bell m-1" style={{ "font-size": " xx-large" }}></i>
                            <i
                                class="bx bx-user-circle m-1"
                                style={{ "font-size": " xx-large" }}
                            ></i>
                        </a>
                    </form>
                </div>
            </nav>
        </>
    );
}
