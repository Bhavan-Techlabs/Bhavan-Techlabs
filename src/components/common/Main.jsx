import Header from "./Header";
import Tabs from "./Tabs";
import TopNavBar from "./TopNavBar";

export default function Main() {
    return (
        <>
            <TopNavBar />
            <main className="container mt-5">
                <Header />
                <Tabs />
            </main>
        </>
    );
}