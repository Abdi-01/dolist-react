import React from "react";
import imageRegis from '../register.png'
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pwType: "password",
            pwVisible: <BsFillEyeFill />
        }
    }

    btnShowHide = () => {
        if (this.state.pwType == "password") {
            this.setState({ pwType: "text", pwVisible: <BsFillEyeSlashFill /> })
        } else {
            this.setState({ pwType: "password", pwVisible: <BsFillEyeFill /> })
        }
    }

    btRegis = () => {
        let username = this.refs.username.value
        let email = this.refs.email.value
        let password = this.refs.password.value
        let confPassword = this.refs.confpassword.value

        if (username == "" || email == "" || password == "" || confPassword == "") {
            alert(`Fill in registration form.`)
        } else {
            if (password == confPassword) {
                if (email.includes("@")) {
                    console.log(username, email, password, confPassword)
                    alert(`Your account has been succesfully created.`)
                } else {
                    alert(`Please enter the correct email.`)
                }
            } else {
                alert(`Match your password.`)
            }
        }


    }

    render() {
        return (
            <div className="container pt-5">
                <h1>Register Page</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={imageRegis} alt="register" style={{ width: "100%" }} />
                    </div>
                    <div className="col-6">
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Username</label>
                            <input type="text" className="form-control" ref="username" />
                        </div>
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Email</label>
                            <input type="text" className="form-control" ref="email" />
                        </div>
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Password</label>
                            <div className="input-group">
                                <input type={this.state.pwType} className="form-control" ref="password" />
                                <div className="input-group-append" >
                                    <span className="input-group-text" style={{ cursor: "pointer", height: "100%" }} onClick={this.btnShowHide}>{this.state.pwVisible}</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Confirm Password</label>
                            <div className="input-group">
                                <input type={this.state.pwType} className="form-control" ref="confpassword" />
                                <div className="input-group-append" >
                                    <span className="input-group-text" style={{ cursor: "pointer", height: "100%" }} onClick={this.btnShowHide}>{this.state.pwVisible}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary" style={{ width: "30%", marginTop: "1vw" }} onClick={this.btRegis}>Create Your Account</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;