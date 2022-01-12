import React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    render() {
        return (
            <div>
                <h2>Register page</h2>
            </div>
        )
    }
}

export default RegisterPage