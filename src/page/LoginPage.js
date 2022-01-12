import React from "react";
import { Link } from "react-router-dom";
import imageLogin from '../login.png';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passType: "password",
            passVisible: <BsFillEyeFill />
        }
    }

    btnShowHide = () => {
        if (this.state.passType == "password") {
            this.setState({ passType: "text", passVisible: <BsFillEyeSlashFill /> })
        } else {
            this.setState({ passType: "password", passVisible: <BsFillEyeFill /> })
        }
    }

    btSignIn = () => {
        let name = this.refs.name.value
        let password = this.refs.password.value
        console.log(name, password)
        if (name == "" || password == "") {
            alert(`Please fill login form ✖`)
        } else {
            alert("Login Success")
        }
    }

    render() {
        return (
            <div className="container pt-5">
                <h1>Working Sign In</h1>
                <div className="row pt-5">
                    <div className="col-md-6 d-none d-md-block">
                        <img src={imageLogin} alt="login" style={{ width: "100%" }} />
                    </div>
                    <div className="col-md-6">
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Name</label>
                            <input type="text" className="form-control" ref="name" />
                        </div>
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }} >Password</label>
                            <div className="input-group" >
                                <input type={this.state.passType} className="form-control" ref="password" />
                                <div className="input-group-append" >
                                    <span className="input-group-text" style={{ cursor: "pointer", height: "100%" }} onClick={this.btnShowHide}>{this.state.passVisible}</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">Remember Me</div>
                        <button type="button" className="btn btn-primary" style={{ width: "100%", marginTop: "1vw" }} onClick={this.btSignIn}>Sign In</button>
                        <div style={{ paddingTop: "1vw" }}>Don't have account? <b>
                            <Link to="/register">Sign Up</Link>
                        </b></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;