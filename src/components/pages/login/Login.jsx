import React, { useState } from "react";
import PropTypes from "prop-types";
import main_img from "../../../assets/images/main_img.webp";
import LightSwitch from "../../common/LightSwitch";

async function loginUser(credentials) {
    return fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
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
                                        id="form3Example3"
                                        className="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        onChange={(e) =>
                                            setUserName(e.target.value)
                                        }
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example3"
                                    >
                                        Username
                                    </label>
                                </div>

                                <div className="form-floating form-outline mb-3">
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        autoComplete="on"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example4"
                                    >
                                        Password
                                    </label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="form2Example3"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="form2Example3"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">
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
