import React from "react";
import { HomePage, LoginPage } from "./components/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    };

    const [token, setToken] = React.useState(getToken());

    const saveToken = (userToken) => {
        sessionStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token,
    };
}

export default function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <LoginPage setToken={setToken} />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}
