import React from "react";
import imageLogin from '../login.png'


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container pt-5">
                <h1>Working Sign In</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={imageLogin} alt="login" style={{ width: "100%" }} />
                    </div>
                    <div className="col-6">
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group py-3">
                            <label style={{ width: "100%", textAlign: "left" }}>Password</label>
                            <div className="input-group">
                                <input type={this.state.passType} className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;