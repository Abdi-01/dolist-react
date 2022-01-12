import React from "react";
import imageRegis from '../register.png'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Confirm Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div>
                            <button>Create Your Account</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;