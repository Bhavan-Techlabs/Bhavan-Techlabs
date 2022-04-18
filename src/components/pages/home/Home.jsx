import Header from "./main/Header";
import Tabs from "./main/Tabs";
import TopNavBar from "./main/TopNavBar";

export default function Home() {
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
