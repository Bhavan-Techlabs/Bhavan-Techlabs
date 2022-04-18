import React, { useState } from "react";
import PropTypes from "prop-types";
import main_img from "../../../assets/images/main_img.webp";
import LightSwitch from "../../common/LightSwitch";

function loginUser(credentials) {
    return credentials.username.trim() === "admin" &&
        credentials.password.trim() === "PwaZFV_DCr2jyA6"
        ? { token: "123" }
        : {};
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = loginUser({
            username,
            password,
        });
        setToken(token);
    };

    return (
        <>
            <div className="d-flex">
                <LightSwitch />
            </div>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src={main_img}
                                className="img-fluid"
                                alt="Sample"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <p className="lead fw-normal mb-0 me-3">
                                        Sign in with
                                    </p>
                                    <button type="button" className="btn">
                                        <i
                                            className="bx bxl-facebook-circle"
                                            style={{ fontSize: "xx-large" }}
                                        ></i>
                                    </button>
                                    <button type="button" className="btn">
                                        <i
                                            className="bx bxl-twitter"
                                            style={{ fontSize: "xx-large" }}
                                        ></i>
                                    </button>
                                    <button type="button" className="btn">
                                        <i
                                            className="bx bxl-google"
                                            style={{ fontSize: "xx-large" }}
                                        ></i>
                                    </button>
                                </div>
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">
                                        Or
                                    </p>
                                </div>
                                <div className="form-floating form-outline mb-4">
                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        onChange={(e) =>
                                            setUserName(e.target.value)
                                        }
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="username"
                                    >
                                        Username
                                    </label>
                                    admin
                                </div>
                                <div className="form-floating form-outline mb-3">
                                    <input
                                        type="password"
                                        id="password"
                                        autoComplete="on"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    PwaZFV_DCr2jyA6
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            id="rememberme"
                                            onChange={() => {
                                                var x =
                                                    document.getElementById(
                                                        "password"
                                                    );
                                                if (x.type === "password") {
                                                    x.type = "text";
                                                } else {
                                                    x.type = "password";
                                                }
                                            }}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="rememberme"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="/" className="text-body">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 px-5"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};
